import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
/// <reference types="vitest/config" />

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: { environment: 'jsdom', globals: true, setupFiles: ['./test/setup.ts'], include: ['test/**/*.test.{ts,tsx}'] },
} as any)
