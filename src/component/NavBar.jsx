import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { menus } from "../utils/data";
const themes = {
    cupcake: 'cupcake',
    synthwave:'synthwave'
}
const getThemeFromLocalStorage = () => {
   return localStorage.getItem('theme') || themes.synthwave
}


const NavBar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const toggleTheme = () => {
        const {cupcake, synthwave} = themes
        const newTheme = theme == cupcake ? synthwave : cupcake;
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', theme)
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme)
},[theme])

  return (
    <section className=" bg-base-300">
      <nav className="navbar align-element fixed top-0 h-16 w-full bg-base-300 shadow-xl">
        <div className="navbar-start ">
          <h3 className="text-2xl tracking-wider font-bold  text-slant capitalize">
            vtech
            <span className="text-primary font-normal">wise</span>
          </h3>
        </div>
        <div className="navbar-center hidden lg:!flex">
          <div className="menu  menu-horizontal gap-x-4">
            {menus.map((menu) => {
              return <li className="text-lg border-b border-transparent capitalize hover:border-b hover:border-primary pb-2  transition-all duration-300" key={menu.id}>{menu.text}</li>
            })}
          </div>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <label htmlFor="my-drawer" className="drawer-button lg:hidden ml-8">
            <FaBarsStaggered className="h-6 w-6 " />
          </label>
        </div>
      </nav>
      {/* // ; */}
    </section>
  );
};
export default NavBar;
 