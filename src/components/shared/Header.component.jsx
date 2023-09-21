import React, { useEffect, useState } from "react";
import HeaderLogo from "../../asserts/Logo.png";
import { HeaderContactBtn, HeaderTxt_NoAccount } from "../../constants";
import Button from "../atoms/Button.component";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { username, status } = useAuth();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 px-5 md:px-10 py-5 shadow-2xl transition duration-150 ${
        scrollPosition > 0 ? "bg-signature" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <img className="h-10 w-10" src={HeaderLogo} alt="logo" />
        <div className="flex flex-row items-center space-x-3 text-sm">
          {username === "" ? (
            <>
              <span>{HeaderTxt_NoAccount}</span>
              <Button customClass="text-gray">{HeaderContactBtn}</Button>
            </>
          ) : (
            <span>Welcome {username}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
