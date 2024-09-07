const DetailsButton = ({ url, bigShow, changeBigShow }) => {
  const handleClick = () => {
    if (bigShow !== url) {
      changeBigShow(url)
    }
  }

  return (
    <button
      className={`${bigShow === url ? 'bg-black text-white' : 'bg-transparent'} rounded-full px-4 py-2 capitalize`}
      onClick={handleClick}
    >
      {url}
    </button>
  )
}
export default DetailsButton