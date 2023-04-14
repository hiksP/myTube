import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeClosing = {
  ref: any
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useClosing = (isVisible: boolean): TypeClosing => {
  const [isShow, setIsShow] = useState(isVisible)
  const ref = useRef<HTMLElement>(null)

  const handleClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  })
  return { ref, isShow, setIsShow }
}
