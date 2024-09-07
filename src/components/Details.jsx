import { locationIcon, timeIcon, profile, search } from "../assets/icons";

const Details = ({ detailsLabel }) => {
  return (
    detailsLabel === 'tours'
      ? (
        <div className="flex-center">
          <div className="flex justify-start flex-wrap w-full px-2">
            <div className="detail-section">
              <p className="text-gray-600 mb-3 font-semibold">location</p>
              <div className="flex gap-1">
                <img src={locationIcon} alt="icon" width={16} height={16} />
                <select className="outline-none font-semibold" name="location" id="location">
                  <option value="usa">New York, USA</option>
                  <option value="usa">Paris, France</option>
                </select>
              </div>
            </div>

            <div className="detail-section">
              <p className="text-gray-600 mb-3 font-semibold">check in</p>
              <div className="flex gap-1">
                <img src={timeIcon} alt="icon" width={16} height={16} />
                <select className="outline-none font-semibold" name="location" id="location">
                  <option value="usa">New York, USA</option>
                  <option value="usa">Paris, France</option>
                </select>
              </div>
            </div>

            <div className="detail-section">
              <p className="text-gray-600 mb-3 font-semibold">check out</p>
              <div className="flex gap-1">
                <img src={timeIcon} alt="icon" width={16} height={16} />
                <select className="outline-none font-semibold" name="location" id="location">
                  <option value="usa">New York, USA</option>
                  <option value="usa">Paris, France</option>
                </select>
              </div>
            </div>

            <div className="detail-section last">
              <p className="text-gray-600 mb-3 font-semibold">guest</p>
              <div className="flex gap-1">
                <img src={profile} alt="icon" width={16} height={16} />
                <select className="outline-none font-semibold" name="location" id="location">
                  <option value="usa">New York, USA</option>
                  <option value="usa">Paris, France</option>
                </select>
              </div>
            </div>

          </div>
          <div className='flex-center gap-1 px-4 py-3 bg-black text-white rounded-full font-bold mx-3 text-center lg:w-[20%]'>
            <img src={search} alt="search" />
            <span>search</span>
          </div>
        </div>)
      : 'empty'
  )
}
export default Details