import react from '@vitejs/plugin-react'

export default {
  root: 'src/',
  base: '/tic-tac-toe/',
  publicDir: '../public/',
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [react()],
}