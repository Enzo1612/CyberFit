import React from "react";
import ProfilePicture from "./ProfilePicture";

function Comment() {
  return (
    <div className="flex items-center p-4 ml-2 bg-white rounded-lg dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80">
      <div className="w-[10vw]">
        <ProfilePicture />
      </div>
      <p className="ml-4 text-xs md:text-lg lg:text-2xl">
        Life upgraded since joining this gym! 💪{" "}
        <span className="text-red-600">#FitnessWins</span>
      </p>
    </div>
  );
}

export default Comment;
