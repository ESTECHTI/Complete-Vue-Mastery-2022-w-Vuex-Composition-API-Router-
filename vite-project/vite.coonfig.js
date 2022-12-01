import { defineConfig } from "vite" 
import eslint from "vite-plugin-eslint"
import vue from "vue-plugin";

export default defineConfig ({
  plugins: [eslint(), vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }    
})