import * as Dialog from '@radix-ui/react-dialog'
// Esse " * as Dialog " pega todas as exportações que o 'react-dialog' faz e coloca dentro de um objeto chamado 'Dialog', assim ao digitar 'Dialog.' vai aparecer todos os elementos 

interface NoteCardProps {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
    return (
      <Dialog.Root>
        <Dialog.Trigger className='rounded-md text-left flex flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
          <span className='text-sm font-medium text-slate-300'>
            {note.date.toISOString()}
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            {note.content}
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 fixed bg-black/60' />
          <Dialog.Content>
            Rocketseat
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>
    )
}


// Estou utilizando 'Dialog' da Biblioteca Radix, que faz aparecer um Modal ao clicar em certo lugar
// Queremos que ao clicar em uma nota apareça o modal

// 'Dialog.Root': Estrutura que fica em volta de tudo

// 'Dialog.Trigger': É o elemento que ao ser clicado vai abrir o Modal

// 'Dialog.Content': É o conteúdo que vai aparecer quando clicarmos no Modal

// 'Dialog.Portal': É colocado em volta do Dialog.Content, ele faz com que o conteúdo não seja mostrada exatamente onde ele foi colocado. Ele teleporta o Content lá para a raíz da aplicação

// 'Dialog.Overlay': É colocado dentro de '.Portal', antes do '.Content' e serve para configurar aquele efeito no fundo do Modal, geralmente um preto com 60% de opacidade