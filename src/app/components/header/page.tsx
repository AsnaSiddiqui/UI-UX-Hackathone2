import Image from "next/image";
import Search from "@/app/image/Search.png"
import Cart from "@/app/image/Shopping--cart.png"
import Id from "@/app/image/User--avatar.png"
import Link from "next/link";

export default function Header(){
    return(
        <div className="header text-[10px] ">
            <div className="flex justify-between  m-[1.5em]">
                <Image className="w-[2em] h-[2em]" src={Search} alt="image"/>
                <h2 className="text-[2.3em] font-clashdisplay font-thin">Avion</h2>
                <div className="flex gap-[1em]">
                <Link href="/addtocart"><Image  className="w-[2em] h-[2em]" src={Cart} alt="image"/></Link>
                <Image  className="w-[2em] h-[2em]" src={Id} alt="image"/>
                </div>
            </div>
            <hr />

            <div className="Categories mt-[1em] text-[#726E8D] ">
                <ul className="flex justify-center text-[2em] list-none gap-[2em] ">
                    <li>Plant pots</li>
                    <li>Ceramics</li>
                    <li>Tables</li>
                    <li>Chairs</li>
                    <li>Crockery</li>
                    <li>Tableware</li>
                    <li>Cutlery</li>
                </ul>
            </div>
        </div>
    )
}