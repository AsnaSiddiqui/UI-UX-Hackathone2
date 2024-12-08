import Image from "next/image";
import Delivery from "@/app/image/Delivery.png"
import cross from "@/app/image/cross.png"
import Search from "@/app/image/Search.png"
import Cart from "@/app/image/Shopping--cart.png"
import Id from "@/app/image/User--avatar.png"
import Link from "next/link";

export default function Header3(){
    return(
        <div className="header3 text-[10px]" >
             <div className="top flex w-[100] h-[4em] text-[1.5em]  bg-[#2A254B] text-white justify-center items-center">
                
                <div className="flex justify-center  relative w-full gap-[1em]">
                        <Image src={Delivery} alt="logo"/>
                        <h4>Free delivery on all orders over &pound;50 with code easter checkout</h4>
                        <div className="absolute right-[2em]">
                            <Image className=" w-[2em] h-[2em] " src={ cross} alt="cross"/>
                        </div>
                </div >
                
            </div>

            <div className="middle">
                
            <div className="middle flex justify-between m-[2em] ">
                <h2 className="text-[2.3em] font-clashdisplay font-medium tracking-wide">Avion</h2>
                <div className="flex gap-[1em]">
                    <ul className="flex gap-[2em] text-[1.5em] pr-[1em] text-[#726E8D]">
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <Image className="w-[2em] h-[2em]" src={Search} alt="image"/>
                    <Link href="/addtocart"><Image  className="w-[2em] h-[2em]" src={Cart} alt="image"/></Link>
                    <Image  className="w-[2em] h-[2em]" src={Id} alt="image"/>
                </div>

            </div>

            <div className="last bg-[#e2e0e0] h-[6em] p-[2em]">
                <ul className="flex justify-center  text-[#726E8D] text-[2em] list-none gap-[2em] ">
                    <li>All products</li>
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
        </div>
    )
}