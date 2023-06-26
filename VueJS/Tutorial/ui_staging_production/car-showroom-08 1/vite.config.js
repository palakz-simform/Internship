import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  // Set default values for baseURL and publicPath
  let baseURL = '/'
  let publicPath = '/'

  // Override values for staging and production modes
  if (mode === 'stage') {
    baseURL = '/staging/'
    publicPath = '/staging/'
  } else if (mode === 'prod') {
    baseURL = '/prod/'
    publicPath = '/prod/'
  }

  return {
    plugins: [vue()],
    base: baseURL,
    publicDir: publicPath,
  }
})
