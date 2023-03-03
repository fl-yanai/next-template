import { FC } from 'react'

interface Props {
  children: React.ReactNode
  open: boolean
}

const OverlayBackGroundFixed: FC<Props> = ({ children, open }) => {
  return (
    <div
      className={
        `hidden-scrollbar fixed top-0 left-0 h-screen w-full items-center justify-center overflow-y-scroll overscroll-contain bg-[rgba(0,0,0,0.5)] before:flex before:h-[calc(100vh+1px)] before:w-[1px] before:content-[""] after:flex after:h-[calc(100vh+1px)] after:w-[1px] after:content-[""]` +
        (open ? ' flex scale-100' : ' scale-0')
      }
    >
      <div className='flex w-full justify-center'>{children}</div>
    </div>
  )
}
export default OverlayBackGroundFixed
