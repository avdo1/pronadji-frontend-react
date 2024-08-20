import { ServiceCard } from "../components/Client/ServiceCard/ServiceCard";

const ServicesPage = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-12 mt-10 mb-10">
      <div className="w-full max-w-screen-lg flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-5xl font-medium text-gray-600 underline underline-offset-4 decoration-2 decoration-orange-500 mb-4">
          Paketi usluga
        </h3>
        <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
          amet. dolor sit amet. dolor sit amet. dolor sit amet.
        </h3>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-8 mt-10">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServicesPage;
