import { FC } from 'react'

interface Props {
  children: React.ReactNode
  open: boolean
}

const OverlayBackGroundFixed: FC<Props> = ({ children, open }) => {
  return (
    <div
      className={
        `fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-screen justify-center items-center overscroll-contain overflow-y-scroll hidden-scrollbar before:content-[""] before:w-[1px] before:h-[calc(100vh+1px)] before:flex after:content-[""] after:w-[1px] after:h-[calc(100vh+1px)] after:flex` +
        (open ? ' flex scale-100' : ' scale-0')
      }
    >
      <div className='w-full flex justify-center'>{children}</div>
    </div>
  )
}
export default OverlayBackGroundFixed
