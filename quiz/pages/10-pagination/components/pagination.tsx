import { useState } from 'react'
import { ActivePage } from './style'

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1)

  const [currentPage, setCurrentPage] = useState(1)

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) })
    setCurrentPage(Number(event.target.id))
  }

  const onClickPrevPage = (event) => {
    if (startPage === 1) return

    setStartPage((prev) => prev - 10)
    props.refetch({ page: Number(startPage - 10) })
    setCurrentPage(Number(startPage - 10))
  }

  const onClickNextPage = (event) => {
    if (startPage + 10 > props.lastPage) return
    setStartPage((prev) => prev + 10)
    props.refetch({ page: Number(startPage + 10) })
    setCurrentPage(Number(startPage + 10))
  }

  return (
    <div>
      <button
        disabled={startPage === 1 ? true : false}
        onClick={onClickPrevPage}
      >
        이전페이지
      </button>
      {new Array(10).fill(1).map((el, index) =>
        index + startPage <= props.lastPage ? (
          <ActivePage
            current={currentPage === index + startPage}
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {'  '} {index + startPage}
          </ActivePage>
        ) : (
          <span></span>
        )
      )}
      <button
        disabled={props.lastPage - startPage < 10 ? true : false}
        onClick={onClickNextPage}
      >
        다음페이지
      </button>
    </div>
  )
}
