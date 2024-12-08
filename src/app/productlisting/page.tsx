import Image from "next/image";
import Header2 from "../components/header2/page"
import leftimage from "@/app/image/Image Left.png"
import rightside from "@/app/image/Right Image.png"
import photo from "@/app/image/Photo.png"
import photo1 from "@/app/image/Photo (1).png"
import photo2 from "@/app/image/Photo (2).png"
import Delivery from "@/app/image/Delivery.png"
import Checkmark from "@/app/image/Checkmark--outline.png"
import Sprout from "@/app/image/Sprout.png"
import Purchase from "@/app/image/Purchase.png"
import Footer2 from "../components/footer2/page";

export default function Prouductlisting(){
    return(
        <div>
            <Header2/>
            <div className="productlisting text-[10px] ">
                <div className="section1 flex">
                    <div className="leftside">
                        <Image className="w-[70em] h-[80em] " src={leftimage} alt="image"/>
                    </div>
                    <div className="rightside flex flex-col gap-[2em] justify-center m-[6em]">
                        <h2 className="text-[3em] text-[#2A254B]">The Dandy Chair</h2>
                        <h3 className="text-[2em] text-[#12131A]">&pound;250</h3>
                        <div className="gap-[5em]  ">
                            <h3 className="text-[1.7em] text-[#2A254B] pt-[2em]">Description</h3>
                            <p className="text-[#505977] text-[1.5em] w-[33em] pt-[1em] pb-[1em]">A timeless design, with premium material features as one of our most popular and iconic pieces. The dandy 
                                chair is perfect for any stylish living space with beech leg and lambskin leather upholstery.</p> 
                            <ul className="text-[#505977] text-[1.5em] list-disc ml-[1em]">
                                <li>Premuim material</li>
                                <li>Handmade upholstery</li>
                                 <li>Quality timeless classic</li>
                            </ul>
                        </div>

                        <div >
                            <h3 className="text-[1.7em] text-[#2A254B] pt-[2em] pb-[2em]" >Dimensions</h3>
                            <div className="flex gap-[4em]">
                                <div className="flex flex-col gap-[2em]">
                                    <h5 className="text-[1.5em] text-[#2A254B]" >Height</h5>
                                    <h5 className="text-[#505977] text-[1.5em]">110cm</h5>
                                </div>
                                <div className="flex flex-col  gap-[2em]">
                                    <h5  className="text-[1.5em] text-[#2A254B]">Width</h5>
                                    <h5 className="text-[#505977] text-[1.5em]">75cm</h5>
                                </div>
                                <div className="flex flex-col  gap-[2em]">
                                    <h5  className="text-[1.5em] text-[#2A254B]">Depth</h5>
                                    <h5 className="text-[#505977] text-[1.5em]">50cm</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between text-[#2A254B] gap-[1em] mt-[3em]">
                            <div className="flex gap-[1em]">
                                <h3 className="text-[2em]">Amount:</h3>
                                <div className=" bg-[#CAC6DA] text-[1.5em] w-[8em] h-[2.5em] flex justify-center items-center gap-[1em]">
                                    <h3>-</h3>
                                    <h3 className=""> 1 </h3>
                                    <h3>+</h3>
                                </div>
                            </div>
                             <div className="bg-[#2A254B] text-white flex justify-center items-center text-[2em] w-[7em] h-[3em]">
                                <button>Add to cart</button>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="section2 text-[#2A254B] mt-[8em] mb-[3em]  ">
                <h2 className="text-[3em] ml-[3em]">You might also like</h2>
                <div className="flex justify-center mt-[3em] gap-[3em] ">
                    <div>
                       <Image className="w-[25em] h-[31em]"src={rightside} alt="image"/>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Dandy chair</h4>
                        <h5 className="text-[1.8em]">&pound;250</h5>
                    </div> 

                    <div>
                        <Image className="w-[25em]"src={photo} alt="image"/>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">Rustic Vase Set</h4>
                        <h5 className="text-[1.8em]">&pound;155</h5>
                    </div> 

                    <div>
                        <Image className="w-[25em]"src={photo1} alt="image"/>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Silky Vase</h4>
                        <h5 className="text-[1.8em]">&pound;125</h5>
                    </div> 

                    <div>
                        <Image className="w-[25em]"src={photo2} alt="image"/>
                        <h4 className="text-[2em] mt-[1em] mb-[0.5em]">The Lucy Lamp</h4>
                        <h5 className="text-[1.8em]">&pound;399</h5>
                    </div> 
                    
                </div>
                <div className=" flex justify-center mt-[3em]">
                <button className="bg-[#F9F9F9] w-[12em] h-[3.5em] text-[1.5em]">View collection</button>
                </div>
                </div>

                <div className="section3 text-[#2A254B] mt-[8em] mb-[5em]">
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

                 <div className="section4 bg-[#ebe9e9] w-[100%] h-[50em] p-[5em]">
                <div className="bg-white h-[40em] text-[#2A254B] flex flex-col justify-center items-center gap-[2em]">
                    <h1 className="text-[3.5em]">Join the club and get the benefits</h1>
                    <p className="text-[2em] w-[29em] text-center">Sign up for our newsletter and receive exculsive offers on new ranges, sales, pop up stores and more </p>
                    <form className="signup-form mt-[3em]" action="#" method="POST">
                    <input className="bg-[#ebe9e9] w-[15em] h-[3em] text-[1.5em] p-[1.5em]" type="email" name="email" placeholder="your@email.com" required/>
                     <button className="bg-[#2A254B] text-white w-[5em] h-[3em] text-[1.5em]"type="submit">Sign up</button>
                      </form>
                
                </div>

            </div>
               
            </div>
            <Footer2/>
        </div>

    )
}
