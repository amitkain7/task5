
const Logout = () => {
    const handleLogout = () => {
        console.log('logout');
    };
    return (
        <div
            onClick={handleLogout}
            className="cursor-pointer hover:bg-[#facbcb] transition-colors duration-300 ease-in-out bg-[#ffecec] p-2.5 mb-1 border-[#c94444] border text-center text-[#AE3C3C] rounded "
        >
            Logout
        </div>
    );
};

export default Logout;