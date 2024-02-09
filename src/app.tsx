import logo from './assets/logo-nlw-expert.svg'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='NLW Expert' />

      <form className='w-full'>
        <input 
          type='text' 
          placeholder='Busque em suas notas...' 
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-200'>
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-300'>
            há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, iure dicta. Minima vel quo est impedit libero perspiciatis commodi omnis maiores quod accusantium. Nesciunt facilis fugit, sit reiciendis error nemo.
          </p>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-300'>
            há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente voluptatibus ex esse nihil molestias eius tenetur blanditiis possimus quam ut facere, soluta, minima voluptatem recusandae natus adipisci? Veritatis, odit?
          </p>
        </div>  

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>
            há 7 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente voluptatibus ex esse nihil molestias eius tenetur blanditiis possimus quam ut facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nisi odit voluptatem ullam eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo, vel natus architecto velit odit aut enim vero qui pariatur provident, unde dolorem nisi deserunt nam at molestiae aspernatur similique!
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2' />
        </div>              
      </div>
    </div>
    
  )
}

// *No React quando queremos uma variável Javascript dentro do HTML basta utilizar {chaves}

// *No React nunca posso ter um elemento HTML na colada do outro sem ter algo em torno deles, como uma 'div', por exemplo

// *No React não utilizamos o atributo 'class' e sim "className"


//        -------- Dentro do 'className' da div --------

//  'mx-auto':
//      Altera as margens do eixo X para 'auto', ou seja, altera a 'margin-left' e a 'margin-right' para 'auto'
//      *As 'div' tem 'display block', então é necessário colocar uma largura nela

//  'max-w-6xl':
//      Altera a 'max-width' para '1152px' ---> largura máxima

//  'my-12':
//      Altera a 'margin-top' e 'margin-bottom' para '48px' 
//      *No Tailwind para saber qual valor por no className devemos pegar o valor que queremos e dividir por 4. No caso acima queriamos uma margem de 48, então fizemos 48/4 = 12
//      Se quisermos um valor de 40px pegamos 40/4 = 10, então o className seria 'my-10'
//      Isso acontece porque na área do Design existe uma prática comum de fazer os espaçamentos e tamanhos com valores múltiplos de 4



//        -------- Dentro do 'className' do form --------

//      *Por padrão os forms não tem 'display block'
//  'w-full':
//      Faz com que o form ocupe toda a tela
//      *Coloque 'outline' no 'className' para ver a região que o elemento ocupa 



//        -------- Dentro do 'className' do input --------

//  'w-full':
//      Faz com que o input ocupe toda a tela  
//      *Repare que colocar o 'w-full' no form fez com que o form ocupasse um espaço de maneira invisível, percebida somente com a utilização do 'outline'. Porém o 'w-full' no input fez com que o input ocupasse a mesma largura de espaço, mas visível             

//  'bg-transparent':
//      Faz com que o 'background' fique transparente

//  'text-3xl':
//      Faz com que o tamanho do texto fique 30px
//      *Para verificar qual o tamanho correspondente em px de cada 'text-2xl', 'text-4xl', por exemplo, utilize CTRL + Espaço

//  'font-semibold':
//      Altera o peso da fonte para semibold

//  'tracking-tight':
//      'tracking' altera o espaçamento entra as letras
//      'tight' faz as letras ficarem um pouquinho mais coladas

//  'placeholder:text-slate-500':
//      Sempre que utilizarmos ':' tudo o que vier depois refere-se somente ao que tem do lado esquerdo dos ':', ou seja, atribuimos a 'placeholder' 'text-slate-500', que é uma cor cinza

//  'outline-none':
//      Remove o outline do input no estado de foco




// Agora vamos mexer com espaçamentos...

// Verificamos no figma que o espaçamento entre a logo, o input, a linha e as notas é de 24px
// Então colocamos no 'className' da 'div' que encobre tudo o seguinte:

// 'space-y-6':
//    Gera um espaçamento de 6x4 = 24px entre todos os elementos do eixo Y
//    Ou seja, como o logo, o input, a futura linha e as futuras notas estão todos dentro da div, todos seguem essa regra



// className da 'div' de baixo do form(div que faz aquela linha)

//    'h-px bg-slate-700':
//  O 'h' representa 'height', e o 'px' representa 1px, então fizemos uma div box com altura de 1 pixel com backgrond color de slate-700, que é um cinza




//           GRID de Notas

// Para criar os blocos de notas criei mais uma div dentro da div principal, logo abaixo da div da linha

// 'grid':
//    Deixa a div em formato de grid

// 'grid-cols-3':
//    Seleciona a quantidade de colunas por padrão, neste caso 3

// 'auto-rows-[250px]':
//    Seta o tamanho da altura de todos os elementos do grid para 250px
//    *Também é possível utilizar o 'height' para cada div interna a div grid, uma de cada vez
//    *Com os colchetes é possível setar qualquer valor sem ser aqueles valores padrão que multiplicam por 4




//          Primeiro elemento dentro da div GRID
//          (div de 'adicionar nota')

//  dentro do className:

// 'rounded-md':
//    Altera o 'border-radius' para um tamanho 'medium', que equivale a 6px

// 'bg-slate-700':
//    Altera a 'background-color' para um cinza





//  Adicionei 'gap-6' no className da div da grid para adicionar um espaçamento de 24px entre as colunas

//  Adicionei os elementos 'span' e 'p' no primeiro quadrado do grid




//    Para formatar a primeira div da grid....

//  Verifiquei no figma que o primeiro bloco tem um espaçamento interno de 20px, então adicionei 'p-5' no className da primeira div do grid(pois 5x4 = 20px)('p' se refere a 'padding')




//    Agora vamos customizar o texto do primeiro bloco
//  Começando pelo 'span'
//  Dentro do className...

//  'text-sm':
//    Altera a fonte para um tamanho 'small' -> uma 'font-size' de 14px

//  'font-medium':
//    Altera o peso da fonte para 500 -> para 'font-weight: 500;'

//  Alterei a cor do texto para 'slate-200'


//  Agora vamos para o 'p'
//  Dentro do className...

//  'text-sm':
//    Altera a fonte para um tamanho 'small' -> uma 'font-size' de 14px

//  'leading-6':
//    Altera o 'line-height' para 6x4 = 24px

//  Alterei a cor do texto para 'slate-400'




//  Voltando para a formatação da primeira div em si...

//  Verifiquei no figma que o espaçamento entre o 'span' e o 'p' é de 12px
//  Então coloquei no className da div do primeiro bloco o seguinte:
//    'space-y-3':
//      Fez com que surgisse um espaçamento vertical de 3x4 = 12px entre todos os elementos 





// Copiei e colei 2x a primeira div para gerar mais 2 blocos

// Mudei a cor de fundo dos dois últimos cards para 'slate-800'
// Alterei o 'span' dos dois últimos cards para "há x dias"
// Alterei o 'p' dos dois últimos cards para textos aleatórios
// Alterei a cor do 'span' dos dois últimos cards de slate-200 para 'slate-300'



// Ou seja, a primeira div dentro do grid tem um padrão de cores diferente dos demais, pois ali que vai ser escrita as notas novas
// Os demais cards vão ter tons de 'background-color' e do 'span' mais escuros



// Gerei mais um card e perceba que ele caiu para a linha de baixo por causa do 'grid-cols-3' que faz com que tenhamos no máximo 3 colunas



// Coloquei um texto grande dentro da última div e o texto saiu pra ford do card
// Para resolver isso....

//  'overflow-hidden':
//    Faz com que o excesso de conteúdo não saia do card



// Para fazer aquele sombreamento/gradiente que tem nos cards no figma:

// Adicionei 'relative' ao card, que deixa 'position: relative'
// Criei uma div sem conteúdo em baixo do 'p' e adicionei ao seu className:
//  'absolute':
//      Deixa 'position: absolute'
//  'bottom-0 left-0 right-0 h-1/2':
//      Essas classes fazem o seguinte: -bottom: 0px;
//                                      -left: 0px;
//                                      -right: 0px;
//                                      -height: 50%;

//      *Nas classes do Tailwind porcentagem é representado por fração

// PC - 09/02/2024 - 00h06 - video parou em 51:20