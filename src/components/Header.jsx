import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-box">
        <Link to={'/'}>
          <h1>Header</h1>
        </Link>
      </div>
    </>
  )
}
