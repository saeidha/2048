import { http, createConfig } from 'wagmi'
import { linea } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [linea],
  connectors: [
    injected()
  ],
  transports: {
    [linea.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
