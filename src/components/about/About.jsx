import React from "react";
import { GymStory } from "./GymStory";
import { GymTeam } from "./GymTeam";

function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-lg font-bold text-center text-red-600 mb-[2vh] pt-[12vh] md:text-2xl lg:text-3xl">
        About Us
      </h1>
      <GymStory />
      <GymTeam />
    </div>
  );
}

export default About;
