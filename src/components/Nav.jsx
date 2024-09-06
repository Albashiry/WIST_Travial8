import {  phone, email, thunder, arrow_right, lang, theme_light, logo, arrow_down, menu} from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="text-xs">
      <div className='flex-between sm:flex-col lg:flex-row gap-1 padding-x border border-b-slate-200 border-x-0'>
        {/* contact */}
        <div className='flex gap-4'>
          <a href="tel:+1 222-555-33-99" className='flex-center gap-1'>
            <img src={phone} alt="icon" width="14" height="14" />
            +1 222-555-33-99
          </a>
          <a href="mailto:support@travila.com" className='flex-center gap-1'>
            <img src={email} alt="icon" width="14" height="10px" />
            support@travila.com
          </a>
        </div>

        {/* note */}
        <div className="flex-center gap-1 pl-2">
          <img src={thunder} alt="icon" width="9" height="14" />
          <p className="text-gray-800 sm:hidden lg:block">Unlock the Magic of Travel with Travila - Your Gateway to Extraordinary Experiences</p>
          <a href="#" className="flex-center gap-2">
            <span className="text-[#F09814] ml-10">Get This Now</span>
            <img src={arrow_right} alt="icon" width="9.33" height="9.33" />
          </a>
        </div>

        {/* config */}
        <div className="flex-center gap-2">
          <span className="flex-center border border-l-0 border-y-0 lg:h-10 h-8 px-2">
            <img src={lang} alt="icon" width="24" height="24" />
            <div className="relative inline-block">
              <select className="w-full bg-white  focus:outline-none">
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </span>

          <span className="flex-center border border-l-0 border-y-0 lg:h-10 h-8 px-2">
            <select className="focus:outline-none">
              <option value="en">USD</option>
              <option value="ar">SR</option>
              <option value="ar">YR</option>
            </select>
          </span>

          <span className="flex-center h-10 px-4">
            <img src={theme_light} alt="icon" width="24" height="24" />
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex-between padding-x capitalize">
        {/* logo */}
        <div className="relative logo">
          <a href="/" className="flex-center gap-1">
            <img className="z-10" src={logo} alt="icon" width='34.88' height='33.75' />
            <h2 className="font-bold text-xl">Travila</h2>
          </a>
        </div>

        {/* dropdown list */}
        <ul className="flex justify-center items-start flex-col lg:flex-row gap-2 pl-12 w-full lg:w-auto">
          {navLinks.map(item => (
            <li key={item.label} className="group flex-between lg:flex-center relative w-full lg:w-auto">
              <a href={item.href}>{item.label}</a>
              {item.submenu && <>
                <img src={arrow_down} alt="icon" width={20} height={20} />
                <ul className="hidden group-hover:block absolute top-[40%] lg:top-[80%] left-[50%] bg-white rounded-md shadow overflow-hidden z-10">
                  {item.submenu.map(subItem => (
                    <li key={subItem.label} className="hover:bg-yellow-100 px-4 py-2 font-semibold"><a href={subItem.href}>{subItem.label}</a></li>
                  ))}
                </ul></>
              }
            </li>
          ))}
        </ul>

        {/* subscribe */}
        <div className="flex-center gap-5">
          <button className="bg-black text-white rounded-full px-3 py-2 m-1">Become Local Expert</button>
          <button className="flex-center bg-yellow-300 hover:hue-rotate-15 transition duration-200 p-2 rounded-md">
            <img src={menu} alt="" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header >
  )
}
export default Nav