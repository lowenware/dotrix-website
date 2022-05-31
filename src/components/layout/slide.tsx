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

  const stretch = "absolute top-0 left-0 right-0 bottom-0";
  const sizeClassNames = (() => {
    switch (size) {
    case "small": return "h-30vh";
    case "large": return "h-80vh sm:h-screen pt-80";
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
          "overflow-hidden bg-no-repeat sm:bg-cover bg-fixed relative bg-auto"
        )
      }
    >
      <div className={classNames(stretch, "bg-dark opacity-90")}></div>
      <div className={classNames("flex justify-center items-center", stretch)}>
        {children}
      </div>
    </div>
  );
};
