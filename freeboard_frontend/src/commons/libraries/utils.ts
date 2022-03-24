export const getDate = (date: string | number | Date) => {
  const newDate = new Date(date)
    const yyyy = String(newDate.getFullYear())
    const mm = String(newDate.getMonth() + 1)
    const dd = String(newDate.getDate())
    const yyyymmdd : String = `${yyyy}-${mm}-${dd}`
  return yyyymmdd
}