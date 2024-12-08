import Image from "next/image";
import rightside from "@/app/image/Right Image.png"
import Delivery from "@/app/image/Delivery.png"
import Checkmark from "@/app/image/Checkmark--outline.png"
import Sprout from "@/app/image/Sprout.png"
import Purchase from "@/app/image/Purchase.png"
import photo from "@/app/image/Photo.png"
import photo1 from "@/app/image/Photo (1).png"
import photo2 from "@/app/image/Photo (2).png"
import sofa from "@/app/image/Large.png"
import photo3 from "@/app/image/Photo (3).png"
import Image1 from "@/app/image/Image.png"
import Link from "next/link";

export default function Home1(){
    return(
        <div className="text-[10px] mt-[6em]">
            <div className="section1 flex m-[3em]">
                
               <div className="rightside p-[5em] text-white bg-[#2A254B] w-[75em] h-[58.5em]">
               <h2 className=" text-[4em] w-[15em]">The furniture brand for the future,with timeless designs</h2>
               <button className="bg-[#48455c] w-[15em] h-[4em] text-[1.3em] mt-[3em]">View collection</button>
               <p className="w-[34em] pt-[11em] text-[1.7em]">A new era in eco friendly furniture with Avion, the French luxury retail brand with nice fonts,
                 tastefull colors and a beautiful way to display things digitally using modern web technologies.
               </p>
               </div>

               <div className="leftside">
                <Image src={rightside} alt="image"/>

               </div>

            </div>

            <div className="section2 text-[#2A254B] mt-[8em]">
                <h3 className=" flex justify-center text-[2.7em]">What makes our brand different</h3>
                <div className=" flex gap-[2em] ml-[6em] mt-[6em]">
                    <div>
                    <Image src={Delivery} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Next day as standard</h4>
                    <p className="text-[1.8em] w-[17em]">Order before 3pm and get your order the next day as standard</p>
                    </div>

                    <div>
                    <Image src={Checkmark} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Made by true artisans</h4>
                    <p className="text-[1.8em] w-[17em]">Handmade crafted goods made with real passion and craftmanship</p>
                    </div>

                    <div>
                    <Image src={Purchase} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Unbeatable prices</h4>
                    <p className="text-[1.8em] w-[17em]">For our materials and quality you won&apos;t find better prices anywhere</p>
                    </div>

                    <div>
                    <Image src={Sprout} alt="delivery"/>
                    <h4 className="text-[2em] pt-[0.5em] pb-[0.5em]">Recycled packaging</h4>
                    <p className="text-[1.8em] w-[17em]">We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>

                </div>
            </div>

            <div className="section3 text-[#2A254B] mt-[8em] mb-[3em]  ">
                <h2 className="text-[3em] ml-[3em]">New ceramics</h2>
                <div className="flex justify-center mt-[3em] gap-[3em] ">
                    <div>
                        <Link href="/productlisting"><Image className="w-[25em] h-[31em]"src={rightside} alt="image"/></Link>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Dandy chair</h4>
                        <h5 className="text-[1.8em]">&pound;250</h5>
                    </div> 

                    <div>
                        <Link href="/productlisting"><Image className="w-[25em]"src={photo} alt="image"/></Link>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">Rustic Vase Set</h4>
                        <h5 className="text-[1.8em]">&pound;155</h5>
                    </div> 

                    <div>
                        <Link href="/productlisting"><Image className="w-[25em]"src={photo1} alt="image"/></Link>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Silky Vase</h4>
                        <h5 className="text-[1.8em]">&pound;125</h5>
                    </div> 

                    <div>
                        <Link href="/productlisting"><Image className="w-[25em]"src={photo2} alt="image"/></Link>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Lucy Lamp</h4>
                        <h5 className="text-[1.8em]">&pound;399</h5>
                    </div> 
                    
                </div>
                <div className=" flex justify-center mt-[3em]">
                     <button className="bg-[#F9F9F9] w-[12em] h-[3.5em] text-[1.5em]">View collection</button>
                </div>
            </div>

            <div className="section4  text-[#2A254B] mt-[8em] mb-[3em]">
                <h2 className="text-[3em] ml-[3em]">Our popular products</h2>
                <div className="flex justify-center mt-[3em] gap-[3em] ">
                    <div>
                        <Image className="w-[em] h-[31em]"src={sofa} alt="image"/>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Popular suede sofa</h4>
                        <h5 className="text-[1.8em]">&pound;980</h5>
                    </div> 

                    <div>
                        <Image className="w-[25em] h-[30.5em]"src={rightside} alt="image"/>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Dandy chair</h4>
                        <h5 className="text-[1.8em]">&pound;250</h5>
                    </div> 

                    <div>
                        <Image className="w-[25em]"src={photo3} alt="image"/>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Dandy chair</h4>
                        <h5 className="text-[1.8em]">&pound;250</h5>
                    </div> 
                    
                </div>
                <div className=" flex justify-center mt-[3em]">
                <button className="bg-[#F9F9F9] w-[12em] h-[3.5em] text-[1.5em]">View collection</button>
                </div>
            </div>

            <div className="section5 bg-[#ebe9e9] w-[100%] h-[50em] p-[5em]">
                <div className="bg-white h-[40em] text-[#2A254B] flex flex-col justify-center items-center gap-[2em]">
                    <h1 className="text-[3.5em]">Join the club and get the benefits</h1>
                    <p className="text-[2em] w-[29em] text-center">Sign up for our newsletter and receive exculsive offers on new ranges, sales, pop up stores and more </p>
                    <form className="signup-form mt-[3em]" action="#" method="POST">
                    <input className="bg-[#ebe9e9] w-[15em] h-[3em] text-[1.5em] p-[1.5em]" type="email" name="email" placeholder="your@email.com" required/>
                     <button className="bg-[#2A254B] text-white w-[5em] h-[3em] text-[1.5em]"type="submit">Sign up</button>
                      </form>
                
                </div>

            </div>

            <div className="section6 flex">
                <div className="rightside flex flex-col  w-[70em] h-[18.4em] gap-[3em] mt-[8em] ml-[3em]">
                    <h4 className="text-[#2A254B] text-[2.5em] w-[22em]  ">From a studio in london to a global brand with our 400 outlets</h4>
                    <p className="text-[#505977] text-[1.8em] w-[33em]  ">When we started Avion, the idea was simple . Make high quality furniture affordable and available for the mess market.</p>
                    <p className="text-[#505977] text-[1.8em] w-[33em]  ">Handmade,and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique
                         become the hotbed for the London interior design community.</p>
                    <div className="">
                    <button className="bg-[#ebe9e9] w-[9em] h-[3.5em] text-[2em] mt-[4em]">Get in touch</button>
                    </div>
                </div>
                <div className="leftside">
                    <Image src={Image1} alt="image"/>
                </div>

            </div>
        </div>

    )
}
