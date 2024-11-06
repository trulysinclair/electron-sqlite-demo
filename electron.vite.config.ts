import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { existsSync } from 'fs'
import { mkdir, rm } from 'fs/promises'
import { copyFile } from 'node:fs/promises'
import { resolve } from 'path'

if (existsSync('out'))
  // Might as well while we're here
  await rm('out', { recursive: true })

await mkdir('out')

// ensure we use a copy of the database during development, not copied during packaging
await copyFile(resolve(__dirname, `resources/data.db`), resolve(__dirname, `out/data.db`))

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
