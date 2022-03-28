import reactLogo from "../../assets/react.svg";
import "./Header.css"
const Header = () => {
    return (
        <div className="logo-container">
            <img className="react-logo" src={reactLogo} alt="" />
        </div>
    )
};


export default Header;