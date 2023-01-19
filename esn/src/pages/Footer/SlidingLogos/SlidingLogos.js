import React from 'react';
import './SlidingLogos.css';

function SlidingLogos(props) {
  return (
    <div className=" flex items-center min-h-screen justify-center">
      {/* 1. */}
      <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
        {/* 2. */}
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
          {/* 3 */}
          {props.logos.map((i) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                <img src={i} />
              </div>
            );
          })}
          {props.logos.map((i) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                <img src={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SlidingLogos