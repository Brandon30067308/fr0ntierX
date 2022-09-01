import { FC } from "react";
import Image from "next/image";
import Accordion from "../../shared/Accordion/Accordion";
import classNames from "classnames";
import breakpoints from "../../../breakpoints";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
// images / icons
import linkIcon from "../../../assets/images/link-icon.svg";
import twitchIcon from "../../../assets/images/twitch-icon.svg";
import instagramIcon from "../../../assets/images/instagram-icon.svg";
import twitterIcon from "../../../assets/images/twitter-icon.svg";
import controlIcon from "../../../assets/images/control-icon.svg";
import infoIcon from "../../../assets/images/info-icon.svg";

const items: Array<{ name: string; percentage: number }> = [
  {
    name: "Accessories & Ears",
    percentage: 9,
  },
  {
    name: "Arms",
    percentage: 15,
  },
  {
    name: "Background",
    percentage: 2,
  },
  {
    name: "Eye",
    percentage: 32,
  },
  {
    name: "Glasses",
    percentage: 3,
  },
  {
    name: "Hair & Styles",
    percentage: 2,
  },
  {
    name: "Head",
    percentage: 92,
  },
  {
    name: "Legs & Clothes",
    percentage: 2,
  },
  {
    name: "Mouth",
    percentage: 46,
  },
];

const MainContent: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="MainContent w-full max-w-7xl flex flex-col lg:flex-row text-white pt-8 mx-auto">
      <div className="flex-1 lg:flex-[0.5] lg:mr-5 mb-4 lg:mb-0">
        <Accordion
          isOpen={true}
          header={
            <p className="flex items-center text-base text-white font-bold">
              <Image src={controlIcon} alt="control_icon" layout="intrinsic" />
              <span className="ml-1.5">Lorem ipsum</span>
            </p>
          }
          content={
            <div className="h-fit min-h-[360px] bg-opacity-50 rounded-md">
              <div className="w-full max-w-lg">
                <p className="text-base leading-6 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="w-full grid grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Image
                      src={linkIcon}
                      alt="link_icon"
                      layout="intrinsic"
                      width={20}
                      height={20}
                    />
                    <a href="#" className="text-base text-red ml-2.5">
                      Lorem ipsum.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={twitchIcon}
                      alt="twitch_icon"
                      layout="intrinsic"
                      width={20}
                      height={20}
                    />
                    <a href="#" className="text-base text-red ml-2.5">
                      @Lorem ipsum
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={instagramIcon}
                      alt="instagram_icon"
                      layout="intrinsic"
                      width={20}
                      height={20}
                    />
                    <a href="#" className="text-base text-red ml-2.5">
                      @Lorem ipsum
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={twitterIcon}
                      alt="twitter_icon"
                      layout="intrinsic"
                      width={20}
                      height={20}
                    />
                    <a href="#" className="text-base text-red ml-2.5">
                      @Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div className="flex-1 lg:flex-[0.5]">
        <Accordion
          isOpen={true}
          className="mb-4 lg:mb-5"
          header={
            <p className="flex items-center text-base text-white font-bold">
              <Image
                src={controlIcon}
                alt="control_icon"
                layout="intrinsic"
                width={16}
                height={16}
              />
              <span className="mx-1.5">Lorem ipsum</span>
              <Image
                src={infoIcon}
                alt="info_icon"
                layout="intrinsic"
                width={16}
                height={16}
              />
            </p>
          }
          content={
            <div className="flex flex-col">
              <div
                className={classNames("w-full grid rounded-md mb-4", {
                  "grid-cols-3 gap-2": width >= breakpoints.md,
                  "grid-cols-2 gap-1.5": width < breakpoints.md,
                })}
              >
                {items.map((item, i) => (
                  <div
                    key={`r-${i}`}
                    className="w-full h-36 bg-primary flex flex-col items-center justify-center
                        text-center cursor-pointer rounded-md py-4 px-2"
                  >
                    <p className="text-base text-gray mb-1.5">{item.name}</p>
                    <h2 className="text-base font-bold mb-2.5">Lorem ipsum</h2>
                    <p className="text-base text-gray">{item.percentage}%</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <Accordion
          header={
            <p className="flex items-center text-base text-white font-bold">
              <Image src={controlIcon} alt="control_icon" layout="intrinsic" />
              <span className="ml-1.5">Lorem ipsum</span>
            </p>
          }
          content={<p className="text-base">Lorem ipsum</p>}
        />
      </div>
    </div>
  );
};

export default MainContent;
