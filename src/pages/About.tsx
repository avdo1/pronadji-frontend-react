export const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-12 mt-10 mb-10">
      <div className="w-full max-w-screen-lg flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-5xl font-medium text-gray-600 underline underline-offset-4 decoration-2 decoration-orange-500 mb-4">
          O nama
        </h3>
        <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
          amet. dolor sit amet. dolor sit amet. dolor sit amet.
        </h3>
      </div>
      <div className="w-full flex flex-col md:flex-row mt-10 gap-8">
        <div className="w-full md:w-1/2 text-left">
          <p className="text-lg md:text-xl font-medium text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
            amet. dolor sit amet. dolor sit amet. dolor sit amet.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
            amet. dolor sit amet. dolor sit amet. dolor sit amet.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
            amet. dolor sit amet. dolor sit amet. dolor sit amet.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
            amet. dolor sit amet. dolor sit amet. dolor sit amet.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
            amet. dolor sit amet. dolor sit amet. dolor sit amet.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
            amet. dolor sit amet. dolor sit amet. dolor sit amet.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <img
            src="https://static.klix.ba/media/images/vijesti/200921033.19_xxl.jpg?v=2"
            alt="about"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
