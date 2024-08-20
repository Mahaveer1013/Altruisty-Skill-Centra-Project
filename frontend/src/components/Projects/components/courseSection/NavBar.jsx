const NavBar = ({ selectedPlan, setSelectedPlan }) => (
    <div className="flex justify-center space-x-8 py-4 bg-white shadow-md">
      <a
        className={`font-bold cursor-pointer text-3xl ${selectedPlan === 'BASIC' ? 'text-black' : 'text-gray-400'}`}
        onClick={() => setSelectedPlan('BASIC')}
      >
        BASIC
      </a>
      <a
        className={`font-bold cursor-pointer text-3xl ${selectedPlan === 'ADVANCED' ? 'text-black' : 'text-gray-400'}`}
        onClick={() => setSelectedPlan('ADVANCED')}
      >
        ADVANCED
      </a>
      <a
        className={`font-bold text-3xl cursor-pointer ${selectedPlan === 'PREMIUM' ? 'text-black' : 'text-gray-400'}`}
        onClick={() => setSelectedPlan('PREMIUM')}
      >
        PREMIUM
      </a>
    </div>
  );

export default NavBar