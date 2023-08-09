import React from "react";
import Comment from "./Comment";

function FirstPageMotivation() {
  return (
    <div>
      <div className="h-[95vh] w-[100vw]  flex items-center bg-[url(./assets/first-page-background.jpg)] bg-center bg-cover">
        <div className="h-[80vh] w-[90vw] ml-[5vw] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 animate-fade-in dark:text-white">
          <div className="flex flex-col h-full gap-2 m-2 text-xl">
            <p className="w-full font-bold text-center md:text-3xl">
              ONE DAY <span className="text-red-600">OR</span> DAY ONE
            </p>
            <div className="flex flex-col h-full">
              <div className="flex flex-col ">
                <p className="flex justify-center w-full mt-2 text-lg text-center md:text-2xl">
                  START <span className="ml-2 text-red-600"> NOW</span>
                </p>
                <div className="flex flex-col items-center justify-between h-[65vh] ">
                  <p className="text-sm md:text-xl leading-5 ml-[2vw] mt-6 bg-opacity-80 dark:bg-opacity-80 bg-white dark:bg-gray-900 p-4">
                    Welcome to a world of{" "}
                    <span className="text-red-600">transformation</span> and{" "}
                    <span className="text-red-600">triumph</span>. At this gym,
                    we don't just sculpt bodies, we sculpt{" "}
                    <span className="text-red-600">destinies</span>. Make every
                    sweat drop becomes a step closer to{" "}
                    <span className="text-red-600">greatness</span>. Today, you
                    stand at the crossroads of{" "}
                    <span className="text-red-600">change</span>. A choice that
                    ignites your journey towards a stronger, healthier, and more
                    confident you. The time is{" "}
                    <span className="text-red-600">now</span>, the path is
                    clear, and the challenge is yours to{" "}
                    <span className="text-red-600">conquer</span>. Let these
                    walls witness your dedication, your sweat, and your
                    unyielding spirit. You've envisioned the{" "}
                    <span className="text-red-600">change</span>, now let's
                    bring it to life.{" "}
                    <span className="text-red-600">Join us</span>, and let every
                    day be your day one.
                  </p>
                  <div className="w-[90%]">
                    <Comment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPageMotivation;
