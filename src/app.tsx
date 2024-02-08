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

      <div className='grid grid-cols-3 auto-rows'>

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



// Dentro da className da 'div' de baixo do form

//    'h-px bg-slate-700':
//  O 'h' representa 'height', e o 'px' representa 1px, então fizemos uma div box com altura de 1 pixel com backgrond color de slate-700, que é um cinza




//           GRID de Notas

// Para criar os blocos de notas criei mais uma div dentro da div principal, logo abaixo da div da linha

// notebook 11:56 

