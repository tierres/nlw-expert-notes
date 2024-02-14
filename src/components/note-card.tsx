export function NoteCard() {
    return (
        <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible'>
          <span className='text-sm font-medium text-slate-300'>
            há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, iure dicta. Minima vel quo est impedit libero perspiciatis commodi omnis maiores quod accusantium. Nesciunt facilis fugit, sit reiciendis error nemo.
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    )
}

//  Adicionei 'hover:border-2' ao className do card
//  Ele altera a 'border-width' para 2px

//  O problema é que essa borda ela ocupa espaço do elemento, então ao passar o mouse e ativar a bordar fica um efeito chato, onde o texto fica saindo do lugar

//  Para resolver isso troquei o 'hover-border-2' por 'hover:ring-2' que aplica uma 'box shadow'
//  Só que essa box shadow funciona da mesma forma que uma borda funciona, só que sem prejudicar o tamanho/posição das letras

//  Para trocar a cor do 'ring-2' para a cor que está no figma adicionei logo em seguida 'hover:ring-slate-600'



//  Alterei o note-card de 'div' para 'button', para eles ficarem clicáveis e termos estado de foco
//  Acontece que por padrão os botões tem o texto centralizado, então adicionei ao className:
//    'text-left':
//      Altera para 'text-align: left;'



//  Perceba que por padrão o focus do meu notebook é branco, para alterar isso fiz o seguinte:
//

// PC - 14/02/2024 - 20h20 - 01:00:00 de vídeo