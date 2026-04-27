import logo from '../../assets/logo.svg';
import user from '../../assets/user.svg';

function Navbar({ userInfo = { name: "GuiGuerreiro", agency: "0069", acnumber: "12345-6" } }) {
    return (
        <nav className="bg-[#0073E6] w-full">
            <div className="flex items-center justify-between  mx-auto h-20">
                <img className="w-auto h-12 px-2" src={logo} alt="Logo" />

                <div className="flex items-center space-x-4 ">
                    <div className="flex flex-col items-left text-xs md:text-sm bg-white p-1 rounded-xl">
                        <div className="text-[#0073E6]">
                            Nome: {userInfo.name}
                        </div>
                        <div className="text-[#0073E6]">
                            Agência: {userInfo.agency}
                        </div>
                        <div className="text-[#0073E6]">
                            Conta: {userInfo.acnumber}
                        </div>
                    </div>
                    <img className="h-18 w-18 rounded-full bg-white p-1" src={user} alt="User" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;