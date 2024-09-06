import { act } from "react"

const DetailsButton = ({ href, label, active }) => {
  return (
    <a href={href}>
      <button className={'capitalize px-3 py-2 m-1 ' + active}>{label}</button>
    </a>
  )
}
export default DetailsButton