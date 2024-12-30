import "./Header.css"
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="container_h">

            <header className="header">
                <p className="header_logo">JSON</p>

                <div className="header_linklar">
                    <Link to="/">User</Link>
                    <Link to="/Animals">Animals</Link>
                    <Link to="/Fruits">Fruits</Link>
                    <Link to="/Cars">Cars</Link>

                </div>
                <FaDownload className="header_icon"/>
            </header>



        </div>
    )
}

export default Header