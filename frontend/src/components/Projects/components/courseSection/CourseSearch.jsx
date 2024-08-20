import { FaSearch } from "react-icons/fa";

const CourseSearch = () => (
    <div className="flex justify-center mt-2 font-bold text-xl">
      <input
        type="text"
        placeholder="What do you want to learn?"
        className="w-1/4 px-3 py-5 border rounded-full border-gray-300 focus:outline-none"
      />
      <div className="bg-[#F5CF6B] p-6 cursor-pointer rounded-full flex justify-center align-middle items-center ml-[-3.5rem] ">
        <FaSearch />
      </div>
    </div>
  );

  export default CourseSearch