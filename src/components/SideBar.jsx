import { ArrowLeftToLine, ArrowRightToLine, Contact, House, Mail, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const SideBar = () => {

    const [show, setShow] = useState(true)

    const navLinks = [
        { name: 'Home', path: '/' , icon: <House size={30}/> },
        { name: 'Products', path: 'products', icon: <ShoppingBag size={30}/>},
        { name: 'Contact', path: 'contact', icon: <Mail size={30}/>}
    ]

    return (
        <div className={`min-h-screen ${show? "" : "min-w-fit" } bg-black text-white text-xl flex flex-col gap-5 p-5`}>
                <div>
                    <button onClick={()=> setShow(!show)} className="px-4 py-2 border rounded-lg">
                        {
                           show? <ArrowLeftToLine /> : <ArrowRightToLine />
                        }
                    </button>
                </div>
            
                {
                    navLinks.map(navLink => 
                    <NavLink 
                    key={navLink.name}
                    className={`${({ isActive }) => isActive ? "text-white" : "text-gray-500"} flex flex-row items-center gap-2 px-4 py-2`} 
                    to={navLink.path}
                    >
                    <span> {navLink.icon} </span>
                    {
                        show && <span>{navLink.name}</span>
                    }
                    </NavLink>)
                }
            
        </div>
    );
};

export default SideBar;