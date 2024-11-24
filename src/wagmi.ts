import { http, createConfig } from 'wagmi'
import { lineaSepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [lineaSepolia],
  connectors: [
    injected()
  ],
  transports: {
    [lineaSepolia.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
