import { Link, Outlet } from "react-router-dom";
import StyledLayout from "./Layout.style";
import ShoppingBasket from "./ShoppingBasket";

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
            <ShoppingBasket />
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
