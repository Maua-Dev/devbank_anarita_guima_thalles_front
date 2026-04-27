import logo from '../../assets/logo.svg';
import user from '../../assets/user.svg';

function Navbar({ userInfo = { name: "GuiGuerreiro", agency: "0069", acnumber: "12345-6" } }) {
    return (
        <nav className="bg-[#0073E6] w-full h-24">
            <div className="flex items-center justify-between  mx-auto h-20">
                <img className="w-auto h-22 px-8 mt-4" src={logo} alt="Logo" />

                <div className="flex items-center space-x-4 mr-8">
                    <div className=" w-46 h-20flex-col mt-4 items-left space-y-2 text-md md:text-sm bg-white p-1 rounded-xl">
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
                    <img className="mt-4 h-20 w-20 rounded-full bg-white p-1" src={user} alt="User" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;