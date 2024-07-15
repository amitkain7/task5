import { FaRegFileAlt, FaRegFile } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="pl-2 pr-4 py-4 md:py-0 md:px-8 bg-[#91c4a7] flex justify-between items-center h-[60px]">
            <div className="flex items-center">
                <FaRegFileAlt size='24' />
                <div className="bg-[#567C65] ml-6 flex items-center gap-2 hover:bg-[#2F4829] rounded-sm h-8 px-4 py-0.5 active:bg-[#2F4839]">
                    <FaRegFile size='20' color="white" />
                    <span className="text-white">My Tasks</span>
                </div>
                <div className="bg-[#567C65] ml-6 flex items-center gap-2 hover:bg-[#2F4829] rounded-sm h-8 px-4 py-0.5 active:bg-[#2F4839]">
                    <CiCirclePlus size='20' color="white" fontWeight={600} />
                    <span className="text-white">New Tasks</span>
                </div>
            </div>
            <h2 className="block tracking-normal ml-44 md:ml-0 text-md md:text-xl font-medium leading-[29px] flex-none text-center -translate-x-20">
                Work Sage
            </h2>
            <div className="space-x-4 flex">
                <div className="hidden md:block hover:bg-[#2F4839] bg-[#537C63] rounded-sm h-8 px-4 py-0.5 text-white">FlowChart</div>
                <div className="flex justify-center items-center">
                    <FaRegCircleUser size='30' color="white" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;