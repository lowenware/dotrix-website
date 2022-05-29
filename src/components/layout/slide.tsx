import classNames from "classnames";
import Image from "next/image";
import React, {ReactNode} from "react";

interface SlideProps {
    children?: ReactNode,
    image: string,
}

export const Slide: React.FC<SlideProps> = ({image, children}) => {
    const stretch = "absolute top-0 left-0 right-0 bottom-0";
    return (
        <div className="relative h-960 overflow-hidden">
            <div className={
                classNames("flex justify-center items-center z-30", stretch)
            }>
                {children}
            </div>
            <div className={classNames(stretch, "z-10")}>
                <Image src={image} layout="responsive" width={1440} height={700} />
            </div>
            <div className={classNames(stretch, "z-20 bg-black opacity-75")}></div>
        </div>
    );
};
