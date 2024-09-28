import { Link, Outlet } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import StyledLayout from "./Layout.style";

function Layout() {
  return (
    <StyledLayout>
      <header>
        <div className="coursehub__header-container">
          <div className="coursehub__logo">
            <Link to={"/"}>
              <h1>CourseHub</h1>
            </Link>
          </div>
          <div className="coursehub__menu">
            <nav>
              <ul>
                <li>
                  <Link to={"/mycourses"}>My Courses</Link>
                </li>
              </ul>
            </nav>
            <FaBasketShopping />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
}

export default Layout;
