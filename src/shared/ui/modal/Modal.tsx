import { FC, ReactNode } from 'react'

import s from './Modal.module.scss'

type Props = {
  children: ReactNode
  setShowModal: (showModal: boolean) => void
  showModal: boolean
}

export const Modal: FC<Props> = ({ children, setShowModal, showModal }) => {
  return (
    <div className={`${s.modal} ${showModal && s.active}`} onClick={() => setShowModal(false)}>
      <div className={s.content} onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
