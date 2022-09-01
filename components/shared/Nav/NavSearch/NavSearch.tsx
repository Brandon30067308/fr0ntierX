import { FC } from "react";
import Image from "next/image";
// icons / images
import searchIcon from "../../../../assets/images/search-icon.svg";

const NavSearch: FC = () => {
  return (
    <div className="NavSearch w-full h-14 bg-secondary flex items-center rounded-md">
      <button className="w-14 h-full flex items-center justify-center p-4 mr-1 sm:mr-2">
        <Image
          src={searchIcon}
          alt="search_icon"
          layout="intrinsic"
          width={20}
          height={20}
        />
      </button>
      <input
        type="text"
        placeholder="Lorem ipsum"
        className="nav-input w-full h-full bg-transparent font-medium text-base text-white
        outline-none border-none"
      />
    </div>
  );
};

export default NavSearch;
