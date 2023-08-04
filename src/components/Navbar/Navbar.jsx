import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { styles } from "../../styles";
import { menu, close, logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../../store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navs = useSelector((state) => {
      return state.navs;
  });

  const handleClick = (navItem) => {
      dispatch(changeMenu(navItem.name));
      navigate(navItem.href)
  }

  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div
          className='flex items-center gap-2'
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex ' onClick={() => navigate('/')}>
            OFC &nbsp;
            <span className='sm:block hidden'> | Odisha Freelancer Community</span>
          </p>
        </div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navs.map((nav) => (
            <li
              key={nav.name}
              className={`${
                nav.current ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              // onClick={() => setActive(nav.title)}
              onClick={() => handleClick(nav)}
            >
              {nav.name}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navs.map((nav) => (
                <li
                  key={nav.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    nav.current ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    handleClick(nav)
                    // setToggle(!toggle);
                    // setActive(nav.name);
                  }}
                >
                  {nav.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
