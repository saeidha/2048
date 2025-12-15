import { http, createConfig } from 'wagmi'
import { linea } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [linea],
  connectors: [
    metaMask({
      dappMetadata: {
        name: '2048 Game',
      },
    })
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
