import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className="w-full h-fit bg-white h-[100px]">
      <img src={logo} alt="logo" className="h-20 w-30 "></img>
    </div>
  )
}

export default Navbar