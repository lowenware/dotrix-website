import Button from "../button";
import dotrix from "src/interfaces/dotrix";
import Link from "next/link";
import React from "react";

const GetButton: React.FC = (props) => {
  return (
    <Button className="btn" background={"#46c166"} {...props}>
      <Link href={dotrix.links.get.href} prefetch={false}>
        <a>
          <img src="/img/icons/download.svg" />
          <span>Get Dotrix</span>
        </a>
      </Link>
    </Button>
  );
};

export default GetButton;
