import { Link, useLocation } from "react-router-dom";
import { Logout } from '../../index';
const Sidebar = () => {
    const location = useLocation();

    // Function to check if a path is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <div className="bg-[#effdf3] w-52 min-w-52 max-w-52 flex flex-col h-full">
                <h3 className="mt-4 text-center text-md capitalize font-semibold">{`Welcome Amit Kaintura`}</h3>
                <div className="flex-grow mt-8">
                    {/* Assigned Tasks */}
                    <div className="mb-12 flex flex-col">
                        <h4 className="text-center">Assigned Tasks</h4>
                        <Link
                            to="/"
                            className={`cursor-pointer hover:bg-[#99c9af] transition-colors duration-300 ease-in-out p-2 text-[15px] ${isActive("/") ? "bg-[#99c9af]" : "bg-[#d7f5e4]"}`}
                        >
                            Dashboard
                        </Link>
                        <div className={`cursor-pointer hover:bg-[#b8f8d6] transition-colors duration-300 ease-in-out p-2 text-[15px] ${isActive("/employees") ? "bg-[#99c9af]" : "bg-[#d7f5e4]"}`}>
                            Employees
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-center">Unassigned Tasks</h4>
                        <div className={`cursor-pointer hover:bg-[#99c9af] transition-colors duration-300 ease-in-out p-2 text-[15px] ${isActive("/assign-department") ? "bg-[#99c9af]" : "bg-[#d7f5e4]"}`}>
                            Assign Department
                        </div>
                        <div className={`cursor-pointer hover:bg-[#99c9af] transition-colors duration-300 ease-in-out p-2 text-[15px] ${isActive("/assign-employee") ? "bg-[#99c9af]" : "bg-[#d7f5e4]"}`}>
                            Assign Employee
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className={`cursor-pointer hover:bg-[#99c9af] transition-colors duration-300 ease-in-out p-2 text-[15px] ${isActive("/add-emp-dept") ? "bg-[#99c9af]" : "bg-[#d7f5e4]"}`}>
                        Add Emp/Dept
                    </div>
                    <div className={`cursor-pointer hover:bg-[#99c9af] transition-colors duration-300 ease-in-out p-2 text-[15px] ${isActive("/add-emp-details") ? "bg-[#99c9af]" : "bg-[#d7f5e4]"}`}>
                        Add Emp Details
                    </div>
                    <div className={`cursor-pointer hover:bg-[#99c9af] transition-colors duration-300 ease-in-out p-2 text-[15px] ${isActive("/completed-tasks") ? "bg-[#99c9af]" : "bg-[#d7f5e4]"}`}>
                        Completed Tasks
                    </div>
                    <Logout />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
