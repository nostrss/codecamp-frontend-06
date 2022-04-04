import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function CounterPage() {
  // 퀴즈 1-1
  const router = useRouter()
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('컴포넌트가 마운트됐습니다~')
    inputRef.current?.focus()
    return () => {
      alert('컴포넌트가 변경됐습니다~')
    }
  }, [])

  useEffect(() => {
    console.log('수정되고 다시 그려짐!!')
  })

  const onClickCounter = () => {
    setCount((prev) => prev + 1)
  }
  const onClickMove = () => {
    router.push('/')
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  console.log('마운트 시작')
  return (
    <div>
      <h2>1-3</h2>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </div>
  )
}
