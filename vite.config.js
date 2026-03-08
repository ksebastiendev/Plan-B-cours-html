import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bitcoinFoundations: resolve(__dirname, 'courses/bitcoin-foundations.html'),
        bitcoinProtocol: resolve(__dirname, 'courses/bitcoin-protocol.html'),
        internetStructure: resolve(__dirname, 'courses/internet-structure.html'),
        lightningNetwork: resolve(__dirname, 'courses/lightning-network.html'),
        masterclassSynthesis: resolve(__dirname, 'courses/masterclass-synthesis.html'),
      },
    },
  },
})
