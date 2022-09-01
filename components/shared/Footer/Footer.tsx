import { FC } from "react";
import Logo from "../Logo/Logo";

const Footer: FC = () => {
  return (
    <footer className="Footer h-[200px] sm:h-[250px] flex items-center justify-center">
      <div>
        <Logo alt={true} />
      </div>
    </footer>
  );
};

export default Footer;
