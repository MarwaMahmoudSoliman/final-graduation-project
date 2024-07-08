import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

import { CiBoxList } from "react-icons/ci";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav style={{marginLeft:"20px"}} >
      <div className="nav-container " style={{ float:"left" }} >
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search course "
          style={{ textAlign:"start" }}
        />
      </div>
      
    </nav>
  );
};

export default Nav;
