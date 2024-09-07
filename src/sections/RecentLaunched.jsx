import { arrow_left, arrow_right } from "../assets/icons"
import { cars } from "../constants"
import { CarCard } from "../components"

const RecentLaunched = () => {
  return (<>
    <div className="padding-x flex justify-between">
      <div className="">
        <h2 className="text-4xl font-semibold my-6">Recent Launched Cars</h2>
        <p className="text-gray-400 font-semibold">The world's leading car brands</p>
      </div>
      <div className="flex justify-end items-end gap-2">
        <span className="w-10 h-10 bg-gray-300 rounded-full flex-center"><img src={arrow_left} alt="back" width={12} height={12} /></span>
        <span className="w-10 h-10 bg-gray-300 rounded-full flex-center"><img src={arrow_right} alt="back" width={12} height={12} /></span>
      </div>
    </div>

    <div className="flex flex-wrap gap-3">
      {cars.map((item, index) => (
        <CarCard
          key={index}
          id={item.id}
          imgUrl={item.imgUrl}
          rate={item.rate}
          reviews={item.reviews}
          carName={item.carName}
          place={item.place}
          distance={item.distance}
          engine={item.engine}
          fuel={item.fuel}
          size={item.size}
          price={item.price}
        />
      ))}
    </div>
  </>)
}
export default RecentLaunched