import "./Header.css";
import Menu from "../../assets/menu.svg";
import Search from "../../assets/search.svg";
import User from '../../components/User/User';

function Header() {
    return (
        <div className="header-container">
            <img className="menu_img" src={Menu} alt="" />
            <div className="right-group">
                <img className="right-group_search-img" src={Search} alt="" />
                <User surname="Ilya Nohach"></User>
            </div>
        </div>
    );
}

export default Header;