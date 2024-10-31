interface CardProp {
  subCategoryName: string;
  card: {
    name: string;
    location: string;
  };
}

export const Card = ({ subCategoryName, card }: CardProp) => {
  return (
    <div className="w-full md:w-[45%] lg:w-[23.5%] min-h-[360px] h-auto flex flex-col shadow-lg shadow-gray-400">
      <div className="w-full h-[60%]">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1254748148/photo/caffe-latte-and-a-bunch-of-coffee-beans.jpg?s=612x612&w=0&k=20&c=YgUs-EbIrDWL4TLfRZN3CL_TCo2I4CK-u9OZ7-sf_X0="
          alt="Caffe Latte"
        />
      </div>
      <div className="w-full h-[50%] p-4 flex flex-col gap-2 font-sans">
        <h1 className="font-extrabold text-2xl">{card?.name}</h1>
        <p className="font-light text-xl">{card?.location}</p>
        <h4 className="font-semibold text-xl">{subCategoryName}</h4>
      </div>
    </div>
  );
};
