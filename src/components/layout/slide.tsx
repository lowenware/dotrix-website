import classNames from "classnames";
import React, {ReactNode} from "react";

type SlideSizeEnum = "small" | "large";

interface SlideProps {
  children?: ReactNode,
  image: string,
  size?: SlideSizeEnum,
  className?: string,
}

export const Slide: React.FC<SlideProps> = ({
  className,
  image,
  children,
  size = "small",
}) => {
  const sizeClassNames = (() => {
    switch (size) {
    case "small": return "min-h-slide";
    case "large": return "min-h-screen";
    }
  })();

  return (
    <div
      style={{backgroundImage: `url(${image})`}}
      className={
        classNames(
          `slide--${size}`,
          className,
          sizeClassNames,
          "flex items-stretch overflow-hidden bg-no-repeat bg-cover bg-fixed bg-center relative z-0"
        )
      }
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-dark opacity-90 z-10">
      </div>
      <div className="flex-grow relative flex justify-center items-center z-20 py-20">
        {children}
      </div>
    </div>
  );
};
