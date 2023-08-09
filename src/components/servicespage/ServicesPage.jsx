import boxingImage from "../../assets/boxing.jpg";
import yogaImage from "../../assets/yoga.jpg";
import crossfitImage from "../../assets/crossfit.jpg";

const ServicesPage = () => {
  return (
    <section className="flex justify-center items-center dark:bg-gray-900 dark:text-white px-4 pb-12 lg:pb-[90px] pt-[10vh]">
      <div className="pt-[2vh]">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                Empower yourself. Choose your path to a stronger you.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap px-4">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="pb-4 mb-8 text-black bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white hover:shadow-lg">
              <div className="flex items-center justify-center w-full h-full mb-8 bg-primary rounded-2xl">
                <img
                  src={boxingImage}
                  className="w-full h-full rounded-t-lg"
                  alt="boxing image"
                />
              </div>
              <div className="px-4">
                <h4 className="mb-3 text-xl font-semibold text-dark">
                  Boxing: Unleash Your Inner Fighter
                </h4>
                <p className="text-body-color">
                  Step into the ring and ignite your fire with our boxing
                  program. Our expert coaches will guide you through every one
                  of your punches and jabs, helping you develop strength,
                  agility,reflexes, and unwavering confidence. Whether you're a
                  novice or a seasoned fighter, our boxing classes are tailored
                  to elevate your skills and empower your spirit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="pb-4 mb-8 text-black bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white hover:shadow-lg">
              <div className="flex items-center justify-center w-full h-full mb-8 bg-primary rounded-2xl">
                <img
                  src={yogaImage}
                  className="w-full h-full rounded-t-lg"
                  alt="yoga image"
                />
              </div>
              <div className="px-4 infos">
                <h4 className="mb-3 text-xl font-semibold text-dark">
                  Yoga: Find Balance and Inner Peace
                </h4>
                <p className="text-body-color">
                  Discover serenity in motion with our transformative yoga
                  sessions. Led by dedicated and experimented instructors, our
                  classes fuse movement, breath, and mindfulness, offering a
                  sanctuary for self-discovery. From flexibility to inner peace,
                  our yoga program nurtures your body, mind and soul, helping
                  you find equilibrium in a fast-paced world.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="pb-4 mb-8 text-black bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white hover:shadow-lg">
              <div className="flex items-center justify-center w-full h-full mb-8 bg-primary rounded-2xl">
                <img
                  src={crossfitImage}
                  className="w-full h-full rounded-t-lg"
                  alt="crossfit image"
                />
              </div>
              <div className="px-4 infos">
                <h4 className="mb-3 text-xl font-semibold text-dark">
                  CrossFit: Forge Your Strength and Endurance
                </h4>
                <p className="text-body-color">
                  Elevate your performance with our dynamic CrossFit program.
                  Guided by a powerhouse trainer, our high-intensity workouts
                  challenge and strengthen you. From weights to cardio, we'll
                  push your limits and foster endurance, all within a supportive
                  community. Join us to forge resilience, define strength, and
                  conquer new heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesPage;
