import { heroCar } from "../assets/images";
import { gold_star } from "../assets/icons";

const CarCard = ({ id, imgUrl, rate, reviews, carName, place, distance, engine, fuel, size, price }) => {

  return (
    <div className="border rounded-3xl min-w-[30%] relative">
      <img className="w-96 h-96" src={heroCar} alt={carName} />
      <img className="absolute top-3 right-3" src={heart} alt={heart} />
      <span></span>
      <div className="border rounded-3xl p-3 relative">
        <span className="absolute -top-[50%] rounded-full text-sm px-2 py-1">
          {rate} (<span className="text-gray-300">{reviews} reviews</span>)
        </span>
        <h3 className="font-semibold text-2xl">{carName}</h3>
      </div>
    </div>
  )
}

export default CarCard