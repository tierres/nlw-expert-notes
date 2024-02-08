import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Sempre que falarmos 'renderizar' nada mais é do que 'mostra em tela'

// No caso do código acima, ele pega a div com id 'root' e dentro dela ele cria a nossa aplicação, renderizando o App
// " <React.StrictMode> " não é algo visível, ele apenas evita alguns errinhos, então é bom mantelo