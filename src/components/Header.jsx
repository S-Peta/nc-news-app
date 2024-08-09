import { Link } from "react-router-dom";
import logo from '../../public/images/logo-white.png';

export default function Header() {

  return (
    <>
      <div className="header-box">
        <Link to={'/'}>
        <img src={logo} alt="Logo" className="header-logo" />
        </Link>
      </div>
    </>
  )
}
