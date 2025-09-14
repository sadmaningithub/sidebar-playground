import { Outlet } from "react-router";
import SideBar from "../components/SideBar";


const Root = () => {
    return (
        <div className=" flex flex-row ">
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;