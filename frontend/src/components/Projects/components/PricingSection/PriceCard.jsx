const PriceCard = ({ title, description, features, buttonLabel, openForm }) => {
  return (
    <div className="w-3/4 max-h-fit md:max-w-sm pt-4 bg-white shadow-md rounded-lg overflow-hidden border-[#F5CF6B] hover:scale-105 duration-300 border-[4px] hover:border-t-[15px] text-black">
      <div className="p-6">
        <h3 className="md:text-3xl text-2xl font-bold poppins-bold mb-4 text-center text-black">
          {title}
        </h3>
        <p className="text-black mb-6 md:text-xl text-sm font-medium">
          {description}
        </p>
        <h1 className="font-bold text-2xl">Features:</h1>
        <ul className="mb-6 list-disc">
          {features.map((feature, index) => (
            <li key={index} className="text-black mb-2 text-xl ml-9">
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={openForm}
            className="bg-yellow-500 text-2xl hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded "
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
