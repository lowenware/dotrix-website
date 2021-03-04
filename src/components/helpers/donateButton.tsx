import Button from "./button";
import dotrix from "src/interfaces/dotrix";
import Link from "next/link";
import React from "react";

const DonateButton: React.FC = (props) => {
  return (
    <Button className="btn" background={"#df67ca"} {...props}>
      <Link href={dotrix.links.donate.href} prefetch={false}>
        <a>
          <img src="/img/icons/heart.svg" />
          <span>Donate</span>
        </a>
      </Link>
    </Button>
  );
};

export default DonateButton;
