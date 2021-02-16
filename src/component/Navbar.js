import NavbarTop from "./Navbar/NavbarTop";
import NavbarMiddle from "./Navbar/NavbarMiddle";
import NavbarBottom from "./Navbar/NavbarBottom";

const Navbar = () => {
  return (
     <header className="header header-10 header-intro-clearance">
        <NavbarTop></NavbarTop>
        <NavbarMiddle></NavbarMiddle>
        <NavbarBottom></NavbarBottom>
     </header>
  );
}
 
export default Navbar;