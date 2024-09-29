import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className="flex w-full h-fit bg-white h-[100px]">
      <img src={logo} alt="logo" className="flex h-20 w-30 "></img>
      <h2 className="flex items-center mx-auto font-TimesNewRoman font-bold text-xl">Welcome to Admin Panel</h2>
    </div>
  )
}

export default Navbar