import React from "react";

const PlayInfo = ({ play }) => {
    return (
        <article className="grid grid-cols-3 gap-4 justify-items-center w-80 border-b border-b-gray-300 mb-2 h-10">
            <span className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
                {play.number}
            </span>
            <span className="w-8 h-8 rounded-full flex justify-center items-center border-2 border-black bg-black">
                <p className="text-white">{play.good}</p>
            </span>
            <span className="w-8 h-8 rounded-full flex justify-center items-center border-2 border-white bg-white">
                <p className="text-black">{play.regular}</p>
            </span>
        </article>
    );
};

export default PlayInfo;
