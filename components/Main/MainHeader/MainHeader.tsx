import { FC } from "react";
import Image from "next/image";
// images / icons
import headerImage from "../../../assets/images/header-image.png";
import headerImageRound from "../../../assets/images/header-image-round.png";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import breakpoints from "../../../breakpoints";

const MainHeader: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <header className="MainHeader w-full pb-8">
      <div className="w-full max-w-screen-2xl flex flex-col">
        <div className="w-full relative">
          {width >= breakpoints.md ? (
            <Image
              src={headerImage}
              alt="header_image"
              layout="responsive"
              width={1536}
              height={260}
              className="rounded-md"
            />
          ) : (
            <div className="relative w-full h-[155px] bg-header bg-cover bg-center bg-no-repeat rounded-md" />
          )}
          <div
            className="absolute sm:h-32 h-24 sm:w-32 w-24 rounded-[50%] left-1/2
            -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={headerImageRound}
              alt="header_image_round"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-white text-center sm:pt-24 pt-16">
          <h1 className="text-4xl font-bold mb-5">Lorem ipsum</h1>
          <p className="text-base mb-2 5">
            Created by: Lorem <span className="text-red">ipsum</span>
          </p>
          <p className="text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
