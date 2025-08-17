// vite.config.js

import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Add this

export default defineConfig({
  plugins: [
        react(),
        tailwindcss(), // ✅ Add this
  ],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
