/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        rocketseat: '#8257e6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

// " content " determina quais arquivos da aplicação vão conter classes do TailwindCSS, ou seja, quais arquivos tem elementos HTML que podem conter classes


// Em 'extend', podemos extender/aumentar as propriedades do tailwind
// Por exemplo: Posso abrir um colchete de cores e adicionar uma cor nova com qualquer nome

// Para o projeto 'Notes' vamos extender a 'fontFamily'
// Criamos uma propriedade 'sans' pois queremos substituir o padrão de fonte san serifa do tailwind
// Colocamos um array que faz com que ele pegue a fonte 'Inter' e se a Inter não estiver disponível ele pega uma 'sans-serif' qualquer do sistema