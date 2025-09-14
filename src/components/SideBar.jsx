import { NavLink } from "react-router";

const SideBar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: 'products' },
        { name: 'Contact', path: 'contact' }
    ]

    return (
        <div className="min-h-screen bg-black text-white text-3xl flex flex-col gap-5 p-5">
            
                {
                    navLinks.map(navLink => 
                    <NavLink 
                    className={({ isActive }) => isActive ? "text-white" : "text-gray-500"} 
                    to={navLink.path}
                    >
                    {navLink.name}
                    </NavLink>)
                }
            
        </div>
    );
};

export default SideBar;