// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
    
    }
    
  
  },
  css: [
    '@/assets/css/main.css',
  ],
 
    postcss: {
      
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    
  
})
