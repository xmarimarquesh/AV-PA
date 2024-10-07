import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const Menu = () => {
    return (
        <div className="text-branco bold bg-amarelinho gap-3 p-3 font-robFont text-medium flex flex-row justify-center align-center gap-8">
            <Link className="bg-amarelo text-preto font-semibold p-2 w-[25%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out" href={ROUTES.home} >Home</Link>
            <Link className="bg-amarelo text-preto font-semibold p-2 w-[25%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out" href={ROUTES.imc} >IMC</Link>
            <Link className="bg-amarelo text-preto font-semibold p-2 w-[25%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out" href={ROUTES.media} >Media</Link>
        </div>
    )
}

export default Menu;