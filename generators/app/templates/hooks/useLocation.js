import { reactive } from '@vue/composition-api'

export function useLocation() {
  const location = reactive({ x: 0, y: 0 })

  uni.getLocation({
    type: 'gcj02',
    success: ({ longitude, latitude }) => {
      location.x = longitude
      location.y = latitude
    },
    fail: error => {
      console.error('error', error)
    }
  })

  return location
}
