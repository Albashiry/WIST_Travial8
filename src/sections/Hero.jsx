import { earth, playstore, appstore } from '../assets/icons';
import { dots, heroCar } from '../assets/images';
import { help } from '../constants';
import {DetailsButton} from '../components';

const Hero = () => {
  return (
    <div className="lg:h-[700px] padding" id="hero">
      <div className="flex-center lg:padding-l flex-col lg:flex-row gap-3">
        <div className='lg:w-[700px]'>
          <button className="flex-center gap-2 bg-yellow-300 rounded-full font-bold px-4 py-2">
            <img src={earth} alt="icon" width={20} height={20} />
            <span>Explore the World</span>
          </button>
          <h2 className='text-4xl font-semibold'>Unveil the Beauty <br />of the World Every Day</h2>
          <p className='text-gray-500 text-xl font-semibold my-5'>Travel Without Limits Browse, Book, Explore</p>
          <div className='py-10 flex gap-3'>
            <a href="#" className='flex-center gap-5 bg-black text-white rounded-lg w-44 p-2'>
              <img src={playstore} alt="icon" width={35} />
              <div>
                <p className='text-xs'>GET IT ON</p>
                <h2 className='text-lg font-semibold'>Google Play</h2>
              </div>
            </a>
            <a href="#" className='flex-center gap-5 bg-black text-white rounded-lg w-44 p-2'>
              <img src={appstore} alt="icon" width={35} />
              <div>
                <p className='text-xs'>Download on the</p>
                <h2 className='text-lg font-semibold'>App Store</h2>
              </div>
            </a>
          </div>
        </div>

        <div className='relative lg:w-[750px] lg:h-[450px]'>
          <img className='absolute top-14 left-2' src={dots} alt="image" width={100} />
          <img className='absolute bottom-0 right-0' src={heroCar} alt="image" />
        </div>
      </div>

      <div className='bg-white ring-1 ring-gray-300 mx-auto rounded-xl lg:w-[85%] lg:px-6 p-4 pb-0'>
        <div className='flex-between gap-1 '>
          <div className='flex gap-2'>
            {help.map(item => (
              <DetailsButton href={item.href} label={item.label} active={item.active} />
            ))}
          </div>
          <span className='text-gray-700'>Need some help?</span>
        </div>

        <div className="flex-between bg-white ring-1 ring-gray-300 mt-4 mb-0 p-4 rounded-xl">
          <div>details</div>
          <span className='search'>search</span>
        </div>
      </div>
    </div>
  )
}
export default Hero