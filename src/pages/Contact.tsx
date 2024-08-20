export const ContactPage = () => {
  return (
    <div className="flex flex-col items-center px-5 py-10 mt-10 mb-10">
      <div className="text-center mb-10">
        <h3 className="text-5xl font-medium text-gray-700 underline decoration-orange-500 underline-offset-4">
          Kontaktirajte nas
        </h3>
        <h3 className="text-2xl font-medium text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
          amet. dolor sit amet. dolor sit amet. dolor sit amet.
        </h3>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex flex-col pr-8">
          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-4">
              <img
                src="https://www.hipsthetic.com/wp-content/uploads/2019/04/clean-email-icon.jpg?ezimgfmt=rs:372x200/rscb1/ngcb1/notWebP"
                alt="email"
                className="h-9 w-11 mr-4"
              />
              <p className="text-xl font-bold text-gray-700">
                info@pronadji.ba
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://www.hipsthetic.com/wp-content/uploads/2019/04/clean-email-icon.jpg?ezimgfmt=rs:372x200/rscb1/ngcb1/notWebP"
                alt="email"
                className="h-9 w-11 mr-4"
              />
              <p className="text-xl font-bold text-gray-700">
                info@pronadji.ba
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mb-8">
              <div className="flex gap-5 mb-6">
                <input
                  type="text"
                  placeholder="Ime"
                  className="flex-1 h-12 border-2 border-gray-600 rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Prezime"
                  className="flex-1 h-12 border-2 border-gray-600 rounded-md p-2"
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Broj telefona"
                  className="flex-1 h-12 border-2 border-gray-600 rounded-md p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 h-12 border-2 border-gray-600 rounded-md p-2"
                />
              </div>
            </div>
            <textarea
              placeholder="Poruka"
              className="w-full h-44 border-2 border-gray-600 rounded-md p-2 mb-8"
            />
            <div className="flex justify-end">
              <button className="h-14 w-32 bg-orange-500 text-white text-lg font-medium rounded-md">
                Pošalji poruku
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Sarajevo_trolleybus_-_Network_map.png"
            alt="location"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
