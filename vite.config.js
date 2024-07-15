import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Opcional: Puedes configurar la opción `host` si necesitas especificar la dirección IP de tu máquina
    // para asegurar que sea accesible desde dispositivos móviles en la misma red WiFi.
    host: '0.0.0.0',
  },
})
