import { FC } from "react";
import Image from "next/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import breakpoints from "../../../breakpoints";
// icons / images
import frontierXLogoImage from "../../../assets/images/frontierx-logo.png";
import frontierXLogoAltImage from "../../../assets/images/frontierx-logo-alt.png";

interface LogoProps {
  alt?: boolean;
}

const Logo: FC<LogoProps> = ({ alt = false }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="Logo">
      <Image
        src={alt ? frontierXLogoAltImage : frontierXLogoImage}
        alt="FrontierX_Logo"
        layout="intrinsic"
        height={width >= breakpoints.sm ? 20 : 15}
        width={width >= breakpoints.sm ? 169 : 127}
      />
    </div>
  );
};

export default Logo;
