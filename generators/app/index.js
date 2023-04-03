const Generator = require('yeoman-generator')
const path = require('path')

module.exports = class extends Generator {
  prompting() {
    /**
     * @type {Template.Answers}
     */
    const answers= this.prompt([
      { type: 'input',  name: 'projectName', message: '请输入项目名称', default: this.appname }
    ])

    this.answers = answers
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(item),
      this.destinationPath(item),
      this.answers
    )
  }
}
