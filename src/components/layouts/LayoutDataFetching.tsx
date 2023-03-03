import { FC } from 'react'
import IconLoadingCircle from '../parts/elements/icons/IconLoadingCircle'
import OverlayBackGroundFixed from '../parts/elements/overlays/OverlayBackGroundFixed'

interface Props {
  fetched: boolean
  children: React.ReactNode
}

const LayoutDataFetching: FC<Props> = ({ fetched, children }) => {
  return (
    <>
      {children}
      <OverlayBackGroundFixed open={!fetched}>
        <IconLoadingCircle />
      </OverlayBackGroundFixed>
    </>
  )
}
export default LayoutDataFetching
