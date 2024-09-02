export const ServiceCard = () => {
  const services = [{}, {}, {}, {}, {}, {}];

  return (
    <div className="flex flex-col max-w-xs min-w-[23%] min-h-[650px] shadow-lg">
      <div className="flex items-center justify-center h-[20%] bg-service-card-header">
        <p className="font-light text-4xl text-white">
          <span className="font-bold">2</span> Mjeseci
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center h-[23%] p-4">
        <p className="font-light text-4xl text-gray-700">
          <span className="font-bold">120</span>KM
        </p>
        <p className="font-light text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
        </p>
      </div>
      <div className="flex flex-col h-[43%]">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 px-4 py-2 ${
              idx % 2 === 0 ? "bg-gray-200" : "bg-white"
            }`}
          >
            <p className="text-lg text-gray-700">
              <span className="font-bold">✓X</span>
            </p>
            <p className="text-lg text-gray-700">Lorem ipsum dolor</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center h-[14%]">
        <button className="h-2/5 w-1/2 bg-orange-500 text-white font-light text-lg rounded-md outline-none">
          Pretplati se
        </button>
      </div>
    </div>
  );
};
