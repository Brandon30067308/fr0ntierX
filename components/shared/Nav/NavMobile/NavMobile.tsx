import classNames from "classnames";
import { FC } from "react";
import NavSearch from "../NavSearch/NavSearch";

interface NavMobileProps {
  open: boolean;
}

const NavMobile: FC<NavMobileProps> = ({ open }) => {
  return (
    <div className={classNames("NavMobile fixed", { open })}>
      <div className="nav-mobile-content w-full">
        <div className="w-full mb-6">
          <NavSearch />
        </div>
        <div className="w-full flex flex-col">
          <ul className="w-full text-white">
            <li>
              <a className="block font-medium text-base py-2.5 mb-2.5">Lorem</a>
            </li>
            <li>
              <a className="block font-medium text-base py-2.5 mb-2.5">Lorem</a>
            </li>
            <li>
              <a className="block font-medium text-base py-2.5">Lorem</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-mobile-bg"></div>
    </div>
  );
};

export default NavMobile;
