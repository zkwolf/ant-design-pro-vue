// vite.config.js
import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import { loadEnv } from 'vite'

export default ({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    plugins: [createVuePlugin({ jsx: true, jsxOptions: { injectH: true } })],
    resolve: {
      alias: [
        { find: /^~@/, replacement: path.join(__dirname, './src') },
        { find: /^~/, replacement: '' },
        { find: '@', replacement: path.join(__dirname, './src') }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true
        }
      }
    },
    define: {
      'process.env.VUE_APP_API_BASE_URL': JSON.stringify(env.VITE_APP_API_BASE_URL),
      'process.env.VUE_APP_PUBLIC_PATH': JSON.stringify(env.VITE_APP_PUBLIC_PATH)
    }
  }
}
