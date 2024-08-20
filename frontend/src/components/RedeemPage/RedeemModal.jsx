const RedeemModal = ({ isOpen, setIsOpen }) => {
  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
        <div className="w-[600px] flex flex-col ">
          <div className="bg-[#F5CF6B] p-2 rounded-md">
            <button
              className="text-xl font-bold place-items-end "
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <div className="flex flex-col justify-center items-center p-6">
              <h1 className="text-3xl font-bold text-[#17212e] text-center mb-6">
                Enter the points to Redeem
              </h1>
              <input
                type="text"
                className="w-1/2 text-xl py-3 rounded-md focus:outline-none placeholder:text-lg placeholder:p-6 "
              />
              <button className="text-xl font-semibold bg-[#17212e] text-white px-4  py-2 rounded-lg my-6 hover:text-[#F5CF6B]">
                Redeem Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    null;
  }
};

export default RedeemModal;
