import suid from '@suid/vite-plugin'
import solid from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [suid(), solid({ ssr: true }), ssr()]
}

export default config
