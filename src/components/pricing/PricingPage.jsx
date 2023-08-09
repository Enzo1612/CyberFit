import React from "react";

const PricingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 py-7 min-w-screen dark:bg-gray-900">
      <div className="w-full px-5 py-10 mx-auto mb-10 text-gray-600">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="mb-5 text-4xl font-bold dark:text-white md:text-5xl">
            Pricing
          </h1>
          <h3 className="mb-6 text-xl font-medium dark:text-white">
            Unlock your potential with affordable pricing tailored to your
            goals. Choose a plan that suits you best and embark on your fitness
            journey today.
          </h3>
        </div>
        <div className="max-w-4xl gap-12 mx-auto md:flex">
          <div className="w-full px-8 py-8 mx-auto mb-3 bg-white rounded-md  md:w-1/3 md:max-w-none dark:bg-gray-800 dark:text-white md:px-10 md:py-10 md:my-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex md:flex-col">
            <div className="flex-grow w-full">
              <h2 className="mb-4 font-bold text-center text-red-600 uppercase">
                Classic
              </h2>
              <h3 className="mb-5 text-4xl font-bold text-center">
                $30<span className="text-red-400">/mo</span>
              </h3>
              <ul className="px-5 mb-8 text-sm">
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Unlimited
                  access to all clubs
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Videos courses
                  with free access
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Home Training
                  with Home Park
                </li>
              </ul>
            </div>
            <div className="w-full">
              <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-700 hover:text-red-200">
                Buy Now
              </button>
            </div>
          </div>
          <div className="w-full px-8 py-8 mx-auto mb-3 bg-white rounded-md  md:w-1/3 md:max-w-none dark:bg-gray-800 dark:text-white md:px-10 md:py-10 md:-mx-3 md:mb-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:relative md:z-50 md:flex md:flex-col">
            <div className="flex-grow w-full">
              <h2 className="mb-4 font-bold text-center text-red-600 uppercase">
                ACCESS+
              </h2>
              <h3 className="mb-5 text-4xl font-bold text-center md:text-5xl">
                $45<span className="text-red-400">/mo</span>
              </h3>
              <ul className="px-5 mb-8 text-sm">
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Sports water
                  fountain
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Toning and
                  slimming platform
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Hydromassage
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Body
                  composition scale
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Coached group
                  classNameaes
                </li>
              </ul>
            </div>
            <div className="w-full">
              <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-700 hover:text-red-200">
                Buy Now
              </button>
            </div>
          </div>
          <div className="w-full px-8 py-8 mx-auto mb-3 bg-white rounded-md  md:w-1/3 md:max-w-none dark:bg-gray-800 dark:text-white md:px-10 md:py-10 md:my-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex md:flex-col">
            <div className="flex-grow w-full">
              <h2 className="mb-4 font-bold text-center text-red-600 uppercase">
                ULTIMATE
              </h2>
              <h3 className="mb-5 text-4xl font-bold text-center">
                $50<span className="text-red-400">/mo</span>
              </h3>
              <ul className="px-5 mb-8 text-sm">
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Fight park
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Fit'boxing and
                  martial arts
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Burning park
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> High-intensity
                  cardio and strength training classNameaes
                </li>
                <li className="leading-tight">
                  <i className="text-lg mdi mdi-check-bold"></i> Much more...
                </li>
              </ul>
            </div>
            <div className="w-full">
              <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-700 hover:text-red-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
