import { http, createConfig } from 'wagmi'
import { baseSepolia, lineaSepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    injected()
  ],
  transports: {
    [baseSepolia.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
