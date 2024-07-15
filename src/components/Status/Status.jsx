/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

const Status = ({ handleStatusOpen, currentStatus }) => {
    const statuses = [
        { name: "Unassigned", bgColor: "bg-red-300", size: "size-3" },
        { name: "In Progress", bgColor: "bg-yellow-300", size: "size-3" },
        { name: "In Pipeline", bgColor: "bg-blue-300", size: "size-3" },
        { name: "For Review", bgColor: "bg-green-300", size: "size-3" },
    ];

    const [isOpen, setIsOpen] = useState(true); // Set to true to open the dropdown by default
    const [selectedStatus, setSelectedStatus] = useState(''); // Default to the first status
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        setIsOpen(false);
        handleStatusOpen(); // If you want to perform any action when the status changes
    };

    return (
        <div ref={dropdownRef} className="cursor-pointer active:bg-[#B5DAC5] relative">
            <div className={`flex items-center justify-center whitespace-nowrap rounded-full`} onClick={() => setIsOpen((prev) => !prev)}>
                {/* <div className="mr-2"></div> */}
                <h5>{selectedStatus.name ? selectedStatus.name : currentStatus}</h5>
            </div>
            {isOpen && (
                <div className="z-20 w-48 bg-transparent shadow-lg absolute left-20">
                    {statuses.map((status) => (
                        <button
                            key={status.name}
                            className={`flex first:rounded-t-md last:rounded-b-md justify-between items-center px-4 py-2 text-sm bg-[#B5DAC5] text-gray-800 hover:bg-[#CEE7D9] hover:font-semibold w-full`}
                            onClick={() => handleStatusChange(status)}
                        >
                            <div className={`mr-3 ${status.bgColor} ${status.size} rounded-full`}></div>
                            <h5>{status.name}</h5>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Status;
