import { earth, playstore, appstore, profile } from '../assets/icons';
import { dots, heroCar } from '../assets/images';
import { buttons } from '../constants';
import { Details, DetailsButton } from '../components';
import { useState } from 'react';

const Hero = () => {
  const [bigShow, setBigShow] = useState('tours');

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
            <a href="https://play.google.com/store" className='flex-center gap-5 bg-black text-white rounded-lg w-44 p-2'>
              <img src={playstore} alt="icon" width={35} />
              <div>
                <p className='text-xs'>GET IT ON</p>
                <h2 className='text-lg font-semibold'>Google Play</h2>
              </div>
            </a>
            <a href="https://www.apple.com/app-store/" className='flex-center gap-5 bg-black text-white rounded-lg w-44 p-2'>
              <img src={appstore} alt="icon" width={35} />
              <div>
                <p className='text-xs'>Download on the</p>
                <h2 className='text-lg font-semibold'>App Store</h2>
              </div>
            </a>
          </div>
        </div>

        <div className='relative lg:w-[750px] lg:h-[450px]'>
          <img className='absolute top-14 left-2' src={dots} alt="icon" width={100} />
          <img className='absolute bottom-0 right-0' src={heroCar} alt="icon" />
        </div>
      </div>

      <div className='bg-white ring-1 ring-gray-300 mx-auto rounded-xl lg:w-[85%] lg:px-6 p-4 pb-0'>
        <div className='flex-between gap-1 '>
          <div className='flex gap-2'>
            {buttons.map(item => (
              <DetailsButton key={item}
                url={item}
                bigShow={bigShow}
                changeBigShow={(item) => setBigShow(item)}
              />
            ))}
          </div>
          <span className='text-gray-700 text-sm flex-center gap-1'>
            <img src={profile} alt="icon" width={12} height={14} />
            <span>Need some help?</span>
          </span>
        </div>

        <div className="bg-white ring-1 ring-gray-300 mt-4 mb-0 p-5 rounded-xl">
          {/* {bigShow} */}
          <Details
            detailsLabel={bigShow}
          />
        </div>
      </div>
    </div>
  )
}
export default Hero