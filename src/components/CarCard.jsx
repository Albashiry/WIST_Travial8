import { heroCar } from "../assets/images";
import { gold_star, heart, locationIcon, distance_meter, gear, fuel_machine, seatIcon } from "../assets/icons";

const CarCard = ({ id, imgUrl, rate, reviews, carName, place, distance, engine, fuel, seats, price }) => {

  return (
    <div className="border rounded-3xl lg:w-[30%] relative">
      <img className="w-96 h-96" src={heroCar} alt={carName} />
      <img className="absolute top-5 right-5" src={heart} alt={heart} />

      <div className="border rounded-3xl p-3 relative font-semibold">
        <span className="absolute -top-5 right-7 bg-white border rounded-full flex-center gap-1 text-sm px-3 py-2">
          <img className="" src={gold_star} alt={gold_star} />
          {rate} (<span className="text-gray-400">{reviews} reviews</span>)
        </span>
        <h3 className="font-bold text-2xl p-3 mt-3">{carName}</h3>
        <div className="flex gap-2 px-3">
          <img src={locationIcon} alt="locationIcon" />
          <span className="font-semibold text-gray-400">{place}</span>
        </div>
        <hr className="w-[90%] mx-auto my-6" />
        <div className="grid grid-cols-2 gap-3 px-4">
          <div className="flex gap-1"><img src={distance_meter} alt="" /> {distance} miles</div>
          <div className="flex gap-1"><img src={gear} alt="" /> {engine}</div>
          <div className="flex gap-1"><img src={fuel_machine} alt="" /> {fuel}</div>
          <div className="flex gap-1"><img src={seatIcon} alt="" /> {seats} seats</div>
        </div>
        <div className="flex-between p-4 my-2">
          <p className="text-gray-400">from <span className="text-3xl text-black font-bold">${price}</span></p>
          <button className="px-3 py-2 bg-gray-200 capitalize font-semibold rounded-full">book now</button>
        </div>
      </div>
    </div>
  )
}

export default CarCard