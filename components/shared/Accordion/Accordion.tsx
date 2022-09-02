import classNames from "classnames";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
// images / icons
import arrowDownIcon from "../../../assets/images/arrow-down-icon.svg";

interface AccordionProps {
  header: string | JSX.Element;
  content: string | JSX.Element;
  isOpen?: boolean;
}

const Accordion: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    AccordionProps
> = ({ header, content, isOpen = false, className = "", ...props }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div
      className={classNames(
        "Accordion w-full flex flex-col bg-primary bg-opacity-50",
        className,
        { "pb-6": open },
        { "pb-0": !open }
      )}
      {...props}
    >
      <div
        className="accordion-header w-full flex justify-between items-center cursor-pointer
        py-6 px-4 sm:px-6"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="w-fit">{header}</div>
        <div
          className={`${open ? "rotate-180" : "rotate-0"} transition-transform`}
        >
          <Image
            src={arrowDownIcon}
            alt="arrow_down_icon"
            layout="intrinsic"
            width={16}
            height={11}
          />
        </div>
      </div>
      <div
        className={classNames(
          "accordion-content w-full transition-all duration-500 overflow-hidden px-4 sm:px-6",
          {
            "max-h-0": !open,
            "max-h-fit": open,
          }
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
