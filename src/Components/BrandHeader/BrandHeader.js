import NavBar from "../Navbars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
const BrandHeader = ({ children }) => {
  return (
    <header>
      <Brand title="Mi App con react."></Brand>
      <NavBar></NavBar>
    </header>
  );
}

export default BrandHeader;