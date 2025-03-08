import React from 'react';
import '../css/Navbar.css';
import { IoMenu,  IoSettingsSharp, IoChevronDown, IoPersonAdd, IoKeySharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa"; // ✅ Corrected Import
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <section>
      <nav className='main justify-content-between'>
        <div className='child-1'>
          <ul>
            <li><IoMenu /></li>
            <li className='create'>Create</li>
            <li>Recent <IoChevronDown/></li>
            <li>Favorite<IoChevronDown/> </li>
            <li>Spaces<IoChevronDown/> </li>
          </ul>
        </div>

        <div className='child-2'>
          <FaSearch />
          <div className='placeholder'>
            <input type="text" className='search' placeholder='Search or ask a question' />
          </div>
        </div>

        <div className='child-3'>
          <ul>
            <li><IoPersonAdd /> Invite Members <RxCross1 /></li>
            <li><IoIosNotifications /></li>
            <li><HiOutlineQuestionMarkCircle /></li>
            <li><IoSettingsSharp /></li>
            <li>Upgrade <IoKeySharp /></li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
