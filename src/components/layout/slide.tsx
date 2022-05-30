import classNames from "classnames";
import React, {ReactNode} from "react";

type SlideSizeEnum = "small" | "medium" | "large";

interface SlideProps {
    children?: ReactNode,
    image: string,
    size?:SlideSizeEnum,
}

export const Slide: React.FC<SlideProps> = ({image, children,size = "small"}) => {
    const stretch = "absolute top-0 left-0 right-0 bottom-0";
    return (
       <>
            {size === "large" &&( <div
             className="h-80vh sm:h-screen overflow-hidden
              bg-no-repeat sm:bg-cover bg-fixed relative
              top-80 bg-auto"
             style={{backgroundImage: `url(${image})`}}
             ><div className={classNames(stretch, "h-screen bg-dark opacity-75")}></div>
            <div className={
                classNames("flex justify-center items-center", stretch)
            }>
                {children}
            </div>
            </div>
            )}


        {size === "small" &&(<div className="relative h-30vh overflow-hidden bg-fixed
         bg-no-repeat sm:bg-cover top-80 bg-auto"
        style={{backgroundImage: `url(${image})`}}>
            <div className={classNames(stretch, "h-screen bg-dark opacity-75")}></div>
            <div className={
                classNames("flex justify-center items-center z-30", stretch)
            }>
                {children}
            </div>
            </div>)}

        </>
    );
};
