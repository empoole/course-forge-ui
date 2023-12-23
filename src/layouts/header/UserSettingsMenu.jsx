import { useState } from "react";

const UserSettingsMenu = () => {
  const [showDropDown, setShowDropdown] = useState(false);

  const dropDown = (
    <div className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30">
      <a
        href="#"
        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
      >
        <i className="fa fa-user fa-fw"></i> Profile
      </a>
      <a
        href="#"
        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
      >
        <i className="fa fa-cog fa-fw"></i> Settings
      </a>
      <div className="border border-gray-800"></div>
      <a
        href="#"
        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
      >
        <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
      </a>
    </div>
  );

  return (
    <div className="relative inline-block">
      <button
        className="drop-button text-white py-2 px-2"
        onClick={() => setShowDropdown(!showDropDown)}
      >
        {" "}
        <span className="pr-2">
          <i className="em em-robot_face"></i>
        </span>{" "}
        Hi, User{" "}
        <svg
          className="h-3 fill-current inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      {showDropDown ? dropDown : null}
    </div>
  );
};

export default UserSettingsMenu;
