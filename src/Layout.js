import { NavLink, Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            <Outlet />
            <nav>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="about">About</NavLink>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Layout;