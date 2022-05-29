import classNames from "classnames";
import Link from "next/link";
import {ReactNode} from "react";

type ButtonVariantEnum = "primary" | "secondary" | "outline";

interface ButtonProps {
  variant?: ButtonVariantEnum,
  children: ReactNode,
  className?: string,
  href: string,
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  href,
}) => {
  const getVariantClassNames = (variant: ButtonVariantEnum) => {
    switch (variant) {
      case "primary":
        return "bg-blue-light";
      case "secondary":
        return "bg-green";
      case "outline":
        return "border-white border-2";
    }
  };

  return (
    <Link href={href}>
      <a
        className={classNames(
          "button text-18 sm:text-24 py-16 px-32 hover:bg-gray hover:bg-opacity-70",
          getVariantClassNames(variant),
          className
        )}
        href="#"
      >
        {children}
      </a>
    </Link>
  );
};
