
export default function Header() {
    return(
        <>
        <div className="flex justify-between w-screen p-7 pl-24 pr-24 ">
            <div className="text-lg font-bold">
                <span className="text-red-500">Note</span><span>Pad</span>
            </div>
            <div className=" justify-between w-1/2 hidden sm:flex font-semibold lg:w-1/3 cursor-pointer">
                <div className="flex" >
                    About
                </div>
                <div>
                    Contact
                </div>
                <div>   
                    Services
                </div>
            </div>
        </div>
        </>
    )
}
