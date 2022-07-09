import classNames from "classnames";
import Link from "next/link";
import {ReactNode} from "react";

type ButtonVariantEnum = "primary" | "secondary" | "outline";

interface ButtonProps {
  variant?: ButtonVariantEnum,
  children: ReactNode,
  className?: string,
  href: string,
  softLink?: boolean,
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  href,
  softLink = false
}) => {
  const getVariantClassNames = (variant: ButtonVariantEnum) => {
    switch (variant) {
    case "primary":
      return "bg-blue border-blue hover:bg-blue hover:border-blue";
    case "secondary":
      return "bg-green border-green";
    case "outline":
      return "border-white hover:bg-blue hover:border-blue";
    }
  };

  const classes = classNames(
    "button border-2 py-24 px-32 hover:bg-opacity-20",
    getVariantClassNames(variant),
    className
  );

  return (
    <Link href={href}>
      {softLink ? (
        <button className={classes}>{children}</button>
      ) : (
        <a className={classes}>{children}</a>
      )}
    </Link>
  );
};
