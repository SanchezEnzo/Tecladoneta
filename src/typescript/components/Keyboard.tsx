const firstRow: string[] = [
  '°',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '?',
  '¡'
]
const secondRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '´', '+']
const thirdRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', '{', '}']
const fourthRow = ['<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-']
const fifthRowPart1 = ['windows', 'Alt']
const fifthRowPart2 = ['Alt', 'FN', 'T']

function DeleteKey() {
  return (
    <figure className='w-[120px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{'DELETE'}</span>
    </figure>
  )
}

function SpaceKey() {
  return (
    <figure className='w-[370px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{'-'}</span>
    </figure>
  )
}

function TabKey() {
  return (
    <figure className='w-[90px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{'TAB'}</span>
    </figure>
  )
}
function CtrlKey() {
  return (
    <figure className='w-[90px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{'CTRL'}</span>
    </figure>
  )
}

function EnterKey() {
  return (
    <div className=' flex flex-col items-end'>
      <figure className='w-[90px] h-[60px] border border-b-0 border-black flex justify-center items-center mt-1 mx-1 bg-slate-300 cursor-pointer rounded-md rounded-br-none hover:bg-slate-400'>
        <span className='text-black '>{'ENTER'}</span>
      </figure>
      <figure className='w-[70px] h-[68px] border border-t-0 border-black flex justify-center items-center mx-1 mb-1 bg-slate-300 cursor-pointer rounded-md rounded-t-none hover:bg-slate-400'></figure>
    </div>
  )
}

function BloqMayusKey() {
  return (
    <figure className='w-[110px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{'BLOQ MAYUS'}</span>
    </figure>
  )
}

function ShiftKeyLeft() {
  return (
    <figure className='w-[80px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{'SHIFT'}</span>
    </figure>
  )
}

function ShiftKeyRight() {
  return (
    <figure className='w-[170px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{'SHIFT'}</span>
    </figure>
  )
}

export function LastRow({ letter }: { letter: string }) {
  return (
    <figure className='w-[80px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{letter}</span>
    </figure>
  )
}

export function CommonKey({ letter }: { letter: string }) {
  return (
    <figure className='w-[60px] h-[60px] border border-black flex justify-center items-center m-1 bg-slate-300 cursor-pointer rounded-md hover:bg-slate-400'>
      <span className='text-black'>{letter}</span>
    </figure>
  )
}

export function Keyboard() {
  return (
    <section className='w-full min-h-screen bg-slate-700 flex justify-center items-center'>
      <figure className='min-w-[1200px] h-[400px] border rounded-md flex'>
        <section className='flex flex-col px-2 pt-7'>
          {/* Row one */}
          <div className='w-full flex'>
            {firstRow.map((key, index) => (
              <CommonKey key={index} letter={key} />
            ))}
            <DeleteKey />
          </div>
          {/* Row two */}
          <div className='w-full flex relative'>
            <TabKey />
            {secondRow.map((key, index) => (
              <CommonKey key={index} letter={key} />
            ))}
            <div className='absolute right-0'>
              <EnterKey />
            </div>
          </div>
          {/* Row three */}
          <div className='w-full flex'>
            <BloqMayusKey />
            {thirdRow.map((key, index) => (
              <CommonKey key={index} letter={key} />
            ))}
          </div>
          {/* Row four */}
          <div className='w-full flex'>
            <ShiftKeyLeft />
            {fourthRow.map((key, index) => (
              <CommonKey key={index} letter={key} />
            ))}
            <ShiftKeyRight />
          </div>
          {/* Row five */}
          <div className='w-full flex'>
            <CtrlKey />
            {fifthRowPart1.map((key, index) => (
              <LastRow key={index} letter={key} />
            ))}
            <SpaceKey />
            {fifthRowPart2.map((key, index) => (
              <LastRow key={index} letter={key} />
            ))}
            <CtrlKey />
          </div>
          <section>
            {/* Comands */}
            <section></section>
            {/* Arrows */}
            <section></section>
          </section>
        </section>
      </figure>
    </section>
  )
}
