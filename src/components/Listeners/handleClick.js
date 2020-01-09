import { useEffect } from 'react'

const handleClick = (ref, setModalOpen) => {
  const handleClickOutside = event =>
    !ref.current.contains(event.target) && setModalOpen(false)

  useEffect(() => {
    ;[`mousedown`, `touchstart`].forEach(event =>
      document.addEventListener(event, handleClickOutside)
    )
    return () =>
      [`mousedown`, `touchstart`].forEach(event =>
        document.removeEventListener(event, handleClickOutside)
      )
  })
}

export default handleClick
