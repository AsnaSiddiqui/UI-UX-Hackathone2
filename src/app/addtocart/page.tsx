import Header from "../components/header/page"
import Image from "next/image"; 
import Image2 from"../image/Product Image.png"
import Image3 from"../image/Product Image (1).png"
import Footer from "../components/footer/page";

export default function Addtocart(){
    return(
        <div>
            <Header/>
            <div className="section1 text-[10px] bg-[#F9F9F9] h-[70em] pl-[11em] pt-[8em] mt-[2em] mb-[10em]">
                <h1 className="text-[3em] text-[#2A254B] pb-[3em]">Your shopping cart </h1>
                <div className="flex gap-[25em] mb-[3em]">
                    <div className="flex flex-col gap-[2em] text-[#2A254B]">
                        <div className="flex flex-col  gap-[3em]">
                        <h4 className="text-[2em]">Product</h4>
                        <div className="flex gap-[1.5em]">
                            <Image src={Image2} alt="image"/>
                            <div className="flex flex-col gap-[1em]">
                                <h5 className="text-[1.8em]">Greystone vase</h5>
                                <p className="text-[1.8em] w-[13em]">A timeless ceramic vase with a tri color grey glaze</p>
                                <h6 className="text-[1.8em]">&pound;85</h6>
                            </div>

                        </div>
                        </div>

                    
                        <div className="flex gap-[1.5em]">
                            <Image src={Image3} alt="image"/>
                            <div className="flex flex-col gap-[1em]">
                                <h5 className="text-[1.8em]">Basic white vase</h5>
                                <p className="text-[1.8em] w-[13em]">Beautiful and simple this is one for the classic</p>
                                <h6 className="text-[1.8em]">&pound;85</h6>
                            </div>

                        </div>
                    </div>

                    <div className="text-[#2A254B]">
                        <h4 className="text-[2em]">Quantity</h4>
                        <div className="flex flex-col text-[2em] gap-[7em] pt-[3em]">
                            <h5 >1</h5>
                            <h5>1</h5>
                        </div>
                    </div>

                    <div className="text-[#2A254B]">
                        <h4 className="text-[2em] ">Total</h4>
                        <div className="flex flex-col text-[2em] gap-[7em] pt-[3em]">
                            <h5>&pound;85</h5>
                            <h5>&pound;125</h5>
                        </div>
                    </div>
                    
               
                </div>
                <hr />

                <div className="section2 flex flex-col justify-end items-end mr-[8em] gap-[2em]">
                    <div className="flex gap-[1.5em] text-[2em]">
                        <h4 className="text-[#4E4D93]">Subtotal</h4>
                        <h4 className="text-[#2A254B]">&pound;210</h4>
                    </div>
                    <p  className="text-[#4E4D93] text-[1.5em] ">Texas and shipping are calculated at checkout</p>
                    <div className="bg-[#2A254B] text-[1.5em] w-[10em] h-[3.5em] flex justify-center text-white">
                        <button>Go to checkout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}