import dotrix from "src/interfaces/dotrix";
import Link from "next/link";
import React from "react";

const Copyright: React.FC = (props) => {
  return (
    <div {...props}>
      <span>© 2021 by </span>
      <Link href={dotrix.links.lowenware.href} prefetch={false}>
        <a>Löwenware s.r.o.</a>
      </Link>
    </div>
  );
};

export default Copyright;
