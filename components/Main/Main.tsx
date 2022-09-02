import classNames from "classnames";
import { FC, useState } from "react";
import Image from "next/image";
import MainHeader from "./MainHeader/MainHeader";
import MainContent from "./MainContent/MainContent";
// images / icons
import metricsIcon from "../../assets/images/metrics-icon.svg";
import controlIcon from "../../assets/images/control-icon.svg";
import homeIcon from "../../assets/images/home-icon.svg";

const Main: FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <main className="Main w-full bg-body-gradient">
      <div className="max-w-screen-2xl flex flex-col pt-8 py-10 px-3 md:px-10 mx-auto">
        <MainHeader />
        <div className="w-full my-8 overflow-auto">
          <ul className="sm:w-[576px] w-[540px] flex items-center justify-between text-white mx-auto">
            {new Array(3).fill(null).map((_, i) => (
              <li
                key={`i-${i}`}
                className={classNames(
                  "bg-primary flex items-center font-semibold text-base rounded-md cursor-pointer px-8 py-4 hover:bg-opacity-100 transition-colors",
                  {
                    "bg-opacity-100": selected === i,
                    "bg-opacity-50": selected !== i,
                  }
                )}
                onClick={() => {
                  setSelected(i);
                }}
              >
                <Image
                  src={i == 0 ? metricsIcon : i === 1 ? controlIcon : homeIcon}
                  alt="icon"
                  layout="intrinsic"
                  width={16}
                  height={16}
                />
                <span className="w-fit block ml-1.5">Lorem ipsum</span>
              </li>
            ))}
          </ul>
        </div>
        <MainContent />
      </div>
    </main>
  );
};

export default Main;
