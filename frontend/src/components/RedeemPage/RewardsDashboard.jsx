import { Fragment, useState } from "react";
import gift from "./images/christmas-shopping-scene 2.png";
import avatar from "./images/person3.png";
import { GiWallet } from "react-icons/gi";
import Modal from "./Modal";

const RewardsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Earn");
  const [points, SetPoints] = useState("489");
  const [Rupees, setRupees] = useState(Number(points) / 1000);
  const [TotalPoints, setTotalPoints] = useState(2500);
  const [RupeesInWallet, setRupeesInWallet] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case "Earn":
        return (
          <div className="mt-8 space-y-4 bg-[#F5CF6B] p-8">
            {/* How to Earn title */}
            <div className=" w-fit p-1 rounded-r-xl">
              <div className="bg-[#17212e] w-fit py-2 pr-4 text-white rounded-r-xl">
                <h1 className="ml-2 text-2xl font-bold">
                  How to <span className="text-[#F5CF6B]">Earn</span>
                </h1>
              </div>
            </div>

            {/* task1 */}
            <div className=" text-white ">
              <div className=" bg-[#17212e]  p-6 my-6 rounded-lg md:w-3/4 w-[90%] mx-auto">
                <h3 className="md:text-2xl text-xl font-bold">1. Challenges</h3>
                <p className="md:text-lg text-sm mt-2">
                  Participate in various challenges to earn points that can be
                  redeemed for exciting rewards. From simple tasks to more
                  complex puzzles, each challenge is an opportunity to improve
                  skills and gain points. Keep participating to unlock more
                  exclusive perks and bonuses.
                </p>
                <div className="flex justify-center">
                  <button className="bg-[#F5CF6B] text-[#17212e] font-medium px-4 py-2 rounded-lg mt-2">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className=" bg-[#17212e] my-2 p-4 rounded-lg md:w-3/4 w-[90%] mx-auto">
                <h3 className="md:text-2xl text-xl font-bold">2. Refer</h3>
                <p className="md:text-lg text-md mt-2">
                  Share your unique referral link with friends and earn 100% of
                  the redeemable amount when they sign up and complete their
                  first challenge. The more friends you refer, the more rewards
                  you can earn!
                </p>
                <div className="flex justify-center">
                  <button className="bg-[#F5CF6B] text-[#17212e] font-medium px-4 py-2 rounded-lg mt-2">
                    Refer Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Redeem":
        return (
          <div className="mt-8 p-4 bg-[#17212e] rounded-lg">
            <div className="bg-[#F5CF6B] w-fit py-2 pr-4 rounded-r-xl">
              <div></div>
              <h1 className="ml-2 text-2xl font-bold text-[#17212e]">
                Conversion
              </h1>
            </div>
            <div className="flex justify-center flex-col py-5">
              <p className="mt-2 mb-4 text-white text-2xl font-bold flex justify-center">
                1000 Points = 1 Rupee
              </p>

              {/* inputBox */}
              <div className="flex items-center space-x-4 py-7">
                <div className=" flex flex-row justify-center items-center mx-auto">
                  <input
                    type="text"
                    placeholder="Points"
                    className="p-2 border rounded-lg flex-1 w-24"
                    value={points}
                    onChange={(e) => {
                      SetPoints(e.target.value);
                      setRupees(Number(e.target.value) / 1000);
                    }}
                  />
                  <h1 className="text-3xl font-bold ml-3 text-white">Points</h1>
                  <span className="text-3xl font-bold text-white mx-3">=</span>
                  <h1 className="text-3xl text-white  font-bold">
                    {Rupees} Rupees
                  </h1>
                </div>

                {/* <input
                  type="text"
                  placeholder="Rupees"
                  className="p-2 border rounded-lg flex-1"
                /> */}
              </div>
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-[#F5CF6B] text-xl text-[#17212e] font-bold w-fit px-4 py-2 rounded-lg mt-4 mx-auto"
              >
                Redeem
              </button>
            </div>
            <div className=""></div>
          </div>
        );
      case "History":
        return (
          <div className="mt-8 space-y-4 bg-[#17212e] p-10">
            {[
              {
                action: "Earned",
                points: "+72",
                date: "May 3, 2024 10:00 am",
                color: "green",
              },
              {
                action: "Redeemed",
                points: "-64",
                date: "May 1, 2024 11:00 pm",
                color: "red",
              },
              {
                action: "Earned",
                points: "+72",
                date: "May 3, 2024 10:00 am",
                color: "green",
              },
              {
                action: "Redeemed",
                points: "-64",
                date: "May 1, 2024 11:00 pm",
                color: "red",
              },
              {
                action: "Earned",
                points: "+72",
                date: "May 3, 2024 10:00 am",
                color: "green",
              },
              {
                action: "Redeemed",
                points: "-64",
                date: "May 1, 2024 11:00 pm",
                color: "red",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-center p-4 bg-[#F5CF6B] rounded-lg"
              >
                {/* Left Colored Strip */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-2 ${item.color === "green" ? "bg-green-600" : "bg-red-600"
                    } rounded-l-lg`}
                />
                <div className="flex-1 pl-8">
                  <p className="font-semibold text-xl">
                    You have {item.action}
                  </p>
                  <p className=" text-lg">{item.date}</p>
                </div>
                <span className={`font-bold text-xl`}>
                  <span
                    className={`${item.color === "green" ? "text-green-600" : "text-red-600"
                      } mx-2`}
                  >
                    {item.points}
                  </span>
                  Points
                </span>
              </div>
            ))}
          </div>
        );
      case "Wallet":
        return (
          <div className="mt-16 p-20 bg-[#F5CF6B] rounded-lg text-center relative h-[80%]">
            {/* Profile Image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 md:w-40 md:h-40 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <img
                src={avatar}
                alt="User"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Wallet Section Content */}
            <div className="mt-12 bg-gray-900 text-white p-6 rounded-3xl">
              <p className="text-2xl font-semibold">
                Hi Lorem, Purse Remaining
              </p>

              <div className="flex justify-center items-center mt-4">
                {/* Wallet Icon */}
                <GiWallet size={40} className="text-[#F5CF6B] mr-2" />

                <p className="text-3xl font-semibold">{RupeesInWallet}</p>
              </div>
            </div>

            {/* Add More Button */}
            {/* <button
              className="bg-[#17212e] text-white px-6 py-2 rounded-lg mt-6"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Enter Voucher
            </button> */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div className="max-w-screen overflow-x-hidden">
        {/* Blue gift header */}
        <div className="w-full bg-[#17212e] flex flex-row  h-fit">
          <div className="w-3/5 p-4 md:mx-8">
            <h1 className="md:text-6xl  font-bold md:my-7 text-white">
              Earn <span className="text-[#F5CF6B]">Rewards</span> To Use
            </h1>
            <h1 className=" md:text-4xl font-semibold text-white w-[90%] md:my-7 leading-normal md:leading-relaxed">
              Get Reward Points by competiting and redeem the points for several
              exciting coupons!
            </h1>
            <h1 className="md:text-4xl md:my-5 font-semibold text-[#F5CF6B] ">
              Compete globally or with you friends{" "}
            </h1>
          </div>
          <div className="w-2/5">
            <img
              src={gift}
              alt=""
              className=" md:m-0  scale-125 md:scale-100 mt-6"
            />
          </div>
        </div>
        <div className="flex justify-center  my-6">
          <h1 className="text-3xl font-bold ">YOUR BALANCE</h1>
        </div>
        <div className="flex justify-center items-center my-8">
          <div className="relative">
            <div className="w-52 h-52 border-4 text-lg border-green-400 rounded-full flex justify-center items-center m-3">
              <div className="w-48 h-48  border-8 border-green-400 rounded-full flex justify-center items-center">
                <span className="text-5xl font-bold text-green-600">
                  {TotalPoints}
                </span>
              </div>
              <p className="absolute inset-x-0 bottom-0 text-center text-white bg-green-400 py-2 rounded-xl  font-bold">
                POINTS
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center">
          <div className="mt-8 flex flex-row md:justify-center justify-around border-[1px] border-gray-700 md:w-fit rounded-3xl">
            {["Earn", "Redeem", "History", "Wallet"].map((tab) => (
              <button
                key={tab}
                className={`md:px-4 md:py-2 px-2 py-2 mx-4 font-bold rounded-lg ${activeTab === tab
                    ? "bg-[#F5CF6B] text-[#17212e]"
                    : "bg-white text-black"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {renderContent()}

        {/* Footer */}
        <div></div>
      </div>
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        TotalPoints={TotalPoints}
        RupeesInWallet={RupeesInWallet}
        setRupeesInWallet={setRupeesInWallet}
        setTotalPoints={setTotalPoints}
      ></Modal>
    </Fragment>
  );
};

export default RewardsDashboard;
