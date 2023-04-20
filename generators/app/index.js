const Generator = require('yeoman-generator')
const fs = require('fs')
const glob = require('glob')
const _ = require('lodash')
const chalk = require('chalk')
const sourcePkg = require('./templates/package.json')

/**
 * @type {Map<Template.Answers['frontEndFramework'], string>}
 */
const frontEndFrameworkMap = new Map([
  ['uview-ui', '^2.0.36'],
  ['vant', '^4.1.2'],
])

module.exports = class extends Generator {
  /**
   * 获取当前项目状态，获取基本配置参数等
   */
  initializing() {
    console.log('初始化')
  }

  /**
   * 向用户展示交互式问题收集关键参数
   */
  async prompting() {
    /**
     * @type {Template.Answers}
     */
    const answers = await this.prompt([
      { type: 'input',  name: 'projectName', message: '请输入项目名称', default: this.appname },
      { type: 'input',  name: 'description', message: '请输入项目介绍', default: '' },
      { type: 'list', name: 'frontEndFramework', message: '前端框架', loop: true,
        choices: [
          { name: 'uView', value: 'uview-ui' },
          { name: 'vant', value: 'vant' }
        ]
      },
      { type: 'list',  name: 'packageManage', message: '请选择包管理器',
        choices: [
          { name: 'npm', value: 'npm' },
          { name: 'pnpm', value: 'pnpm' },
          { name: 'yarn', value: 'yarn' }
        ]
      }
    ])

    this.props = answers
  }

  /**
   * 保存配置相关信息且生成配置文件（名称多为'.'开头的配置文件,例如.editorconfig）
   */
  configuring() {}

  /**
   * 未匹配任何生命周期方法的非私有方法均在此环节*自动*执行
   */
  default() {}

  /**
   * 依据模板进行新项目结构的写操作
   */
  writing() {
    const pkg = _.merge(sourcePkg, {
      name: this.props.projectName,
      description: this.props.description,
      dependencies: {
        [this.props.frontEndFramework]: frontEndFrameworkMap.get(this.props.frontEndFramework)
      }
    })

    /**
     * 渲染模板
     */
    const files = glob.sync('**/*', { cwd: this.templatePath(), dot: true })

    files.forEach((file) => {
      const templateFilePath = this.templatePath(file)

      if (fs.statSync(templateFilePath).isFile()) {
        this.fs.copyTpl(
          this.templatePath(templateFilePath),
          this.destinationPath(file.replace(/^_/, '.')),
          this.props
        )
      }
    })

    /**
     * 写入 package.json
     */
    this.fs.writeJSON(this.destinationPath('package.json'), pkg)
  }

  /**
   * 处理冲突(内部调用，一般不用处理）
   */
  conflicts() {}

  /**
   * 使用指定的包管理工具进行依赖安装(支持npm,bower,yarn)
   */
  install() {
    this.spawnCommandSync('git', ['init'])

    switch (this.props.packageManage) {
      case 'npm':
        this.spawnCommandSync(this.props.packageManage, ['install'])
        break
      case 'pnpm':
        this.spawnCommandSync(this.props.packageManage, ['i'])
        break
      case 'yarn':
        this.spawnCommandSync(this.props.packageManage)
        break
    }
  }

  /**
   * 结束动作，例如清屏，输出结束信息，say GoodBye等等
   */
  end() {
    this.log(chalk.blue('Jobs is Done!'))
  }
}
