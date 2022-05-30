import {Logo} from "~/assets";

import {JoinUs} from "./join-us";

export const Footer: React.FC = () => {
  return (
    <div id="footer">
      <JoinUs />
      <div className="mh-200">
        <div className="w-1/3 hidden sm:block">
          © 2022 Löwenware s.r.o. All rights reserved
        </div>
        <div className="w-1/3 justify-center hidden sm:flex">
          <Logo.Lowenware />
        </div>

        <div className="w-1/3 text-right text-12 sm:text-18 hidden sm:block">
          License | Privacy
        </div>
        <div className="w-1/3 text-center mb-8 text-12 sm:text-18 block sm:hidden ">
          License | Privacy
        </div>
        <div className="w-1/3 block mb-16 sm:hidden text-center">
          © 2022 Löwenware s.r.o. All rights reserved
        </div>
        <div className="w-1/3 ml-8 justify-center flex sm:hidden">
          <Logo.Lowenware />
        </div>
      </div>
    </div>
  );
};
