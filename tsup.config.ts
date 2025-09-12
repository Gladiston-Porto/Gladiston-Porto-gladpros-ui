import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Temporarily disabled due to React 19 compatibility issues
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'next',
    '@radix-ui/*',
    'class-variance-authority',
    'clsx',
    'lucide-react',
    'tailwind-merge',
    'tailwindcss'
  ]
})