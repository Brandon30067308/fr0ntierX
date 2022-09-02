import { FC, useState } from "react";
import Logo from "../Logo/Logo";
import NavSearch from "./NavSearch/NavSearch";
import NavMobile from "./NavMobile/NavMobile";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import breakpoints from "../../../breakpoints";
import classNames from "classnames";

const Nav: FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <nav
      className="Nav sticky top-0 left-0 w-full h-[90px] bg-primary flex items-center
      justify-center z-10"
    >
      <div
        className="w-full h-full max-w-screen-2xl flex justify-between items-center
        text-white py-6 px-3 sm:px-10 mx-auto"
      >
        <div className="min-w-fit">
          <Logo />
        </div>

        <div className="w-full hidden lg:flex items-center">
          <div className="w-[50%] max-w-xl ml-auto mr-16">
            <NavSearch />
          </div>
          <ul className="nav-items flex items-center font-medium text-base">
            <li className="mr-8">
              <a href="#" className="py-2.5">
                Lorem
              </a>
            </li>
            <li className="mr-8">
              <a href="#" className="py-2.5">
                Lorem
              </a>
            </li>
            <li>
              <a href="#" className="py-2.5">
                Lorem
              </a>
            </li>
          </ul>
        </div>
        <button
          className={classNames(
            "mobile-burger w-[30px] flex lg:hidden flex-col justify-center",
            { open: navOpen }
          )}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <span className="mb-[5px]" />
          <span className="mb-[5px]" />
          <span />
        </button>
      </div>
      {width <= breakpoints.lg && <NavMobile open={navOpen} />}
    </nav>
  );
};

export default Nav;
