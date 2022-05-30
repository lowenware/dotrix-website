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
             className="relative h-screen overflow-hidden bg-no-repeat bg-cover bg-fixed"
             style={{backgroundImage: `url(${image})`}}
             >
            <div className={
                classNames("flex justify-center items-center z-30", stretch)
            }>
                {children}
            </div>
            <div className={classNames(stretch, "z-20 bg-black opacity-75")}></div></div>
            )}


        {size === "small" &&(<div className="relative h-40vh overflow-hidden bg-fixed
         bg-no-repeat bg-cover"
        style={{backgroundImage: `url(${image})`}}>
            <div className={
                classNames("flex justify-center items-center z-30", stretch)
            }>
                {children}
            </div>
            <div className={classNames(stretch, "z-20 bg-black opacity-75")}></div></div>)}

        </>
    );
};
