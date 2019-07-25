import {Fetch} from '@public/service/http'
import URL from './url'
export const demoFetch = (options) => Fetch({
  url: URL.demo.demoUrl,
  data: {
    ...options
  }
})

export const mockFetch = () => Fetch({
  url: '/api/data'
})
