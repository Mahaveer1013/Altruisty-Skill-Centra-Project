import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({
  isVisible,
  setIsVisible,
  TotalPoints,
  setTotalPoints,
  setRupeesInWallet,
  RupeesInWallet,
}) => {
  const [pointsToRedeem, setPointsToRedeem] = useState(0);

  const handleRedeem = () => {
    if (pointsToRedeem > TotalPoints) {
      toast.error("Not enough points", {
        duration: 4000,
        style: {
          padding: "20px",
          fontSize: "18px",
          borderRadius: "8px",
        },
      });
    } else {
      const perm = confirm("Do You Want to Redeem the points");
      if (perm == true) {
        setTotalPoints(TotalPoints - pointsToRedeem);
        const RstoAdd = Number(Number(pointsToRedeem) / 1000);
        setTotalPoints(TotalPoints - pointsToRedeem);
        setRupeesInWallet(RupeesInWallet + RstoAdd);
        toast.success("Successfully Added to Your Wallet!", {
          duration: 4000,
          style: {
            padding: "20px",
            fontSize: "18px",
            borderRadius: "8px",
          },
        });
        setPointsToRedeem(0);
      }
    }
  };
  if (isVisible) {
    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
          <div className="w-[600px] flex flex-col ">
            <div className="bg-[#F5CF6B] p-2 rounded-md">
              <button
                className="text-xl font-bold place-items-end "
                onClick={() => setIsVisible(false)}
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
                  value={pointsToRedeem}
                  onChange={(e) => setPointsToRedeem(e.target.value)}
                />
                {pointsToRedeem > TotalPoints ? (
                  <h1 className="text-xl font-semibold text-red-700">
                    You Don't have That much
                  </h1>
                ) : null}
                <button
                  className="text-xl font-semibold bg-[#17212e] text-white px-4  py-2 rounded-lg my-6 hover:text-[#F5CF6B]"
                  onClick={handleRedeem}
                >
                  Redeem Now!
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{
            className: "  ",
          }}
        />
      </>
    );
  } else {
    null;
  }
};

export default Modal;
