import React from "react";

export const GymTeam = () => {
  return (
    <div>
      <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4">
        <div className="pb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-heading">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg">
            <div className="mb-8">
              <img
                className="object-cover object-center rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-xl font-bold text-gray-700">
                🥊 John Smith - Master of the Boxing Ring
              </p>
              <p className="text-base font-normal text-gray-400">
                As our male boxing coach, John Smith is a force to be reckoned
                with. With over a decade of experience in the ring and a passion
                that burns brighter than ever, he's the guiding light for
                aspiring pugilists. John's impressive track record includes
                regional championships and a deep understanding of the sweet
                science. His expertise and dedication make him the perfect coach
                to transform beginners into boxing champs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg">
            <div className="mb-8">
              <img
                className="object-cover object-center rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-xl font-bold text-gray-700">
                🧘‍♀️ Emily Jones - Yoga Guru and Wellness Advocate
              </p>
              <p className="text-base font-normal text-gray-400">
                Emily Jones, our woman yoga teacher, is a living embodiment of
                mindfulness and balance. With a background in traditional yoga
                practices and a heart dedicated to holistic well-being, Emily
                leads our yoga sessions with grace and expertise. Her extensive
                training in various yoga styles and her commitment to fostering
                mind-body harmony make her the ultimate guide to your yogic
                journey.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg">
            <div className="mb-8">
              <img
                className="object-cover object-center rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-xl font-bold text-gray-700">
                🏋️‍♀️ Sarah Johnson - CrossFit Dynamo
              </p>
              <p className="text-base font-normal text-gray-400">
                Sarah Johnson, our dynamic woman CrossFit trainer, is a
                powerhouse of strength and motivation. With a CrossFit Level 2
                certification and a passion for pushing limits, Sarah thrives on
                helping clients crush their fitness goals. Her deep knowledge of
                functional movements, coupled with a relentless drive, ensures
                that every CrossFit session is a step towards becoming the
                strongest version of yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
