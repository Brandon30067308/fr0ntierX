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
        className="w-full max-w-screen-2xl flex justify-between items-center
        text-white py-6 px-3 sm:px-10 mx-auto"
      >
        <div>
          <Logo />
        </div>

        {width >= breakpoints.lg ? (
          <div className="w-full flex items-center">
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
        ) : (
          <button
            className={classNames(
              "mobile-burger h-6 w-[30px] flex flex-col justify-between",
              { open: navOpen }
            )}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </div>
      {width <= breakpoints.md && <NavMobile open={navOpen} />}
    </nav>
  );
};

export default Nav;
