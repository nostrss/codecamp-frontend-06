import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function CounterPage() {
  // 퀴즈 1-1
  const router = useRouter()
  const [isChange, setIsChange] = useState(false)

  useEffect(() => {
    alert('Rendered')
    return () => {
      alert('bye')
    }
  }, [])

  useEffect(() => {
    alert('changed')
  }, [isChange])

  const onClickChange = () => {
    setIsChange(true)
  }

  const onClickMove = () => {
    router.push('/')
  }

  // 퀴즈 1-2
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <h2>1-1</h2>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <h2>1-2</h2>
      <input placeholder="포커스는 여기로" type="text" ref={inputRef} />
    </div>
  )
}
