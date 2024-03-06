import { Component } from "solid-js";
import Woman from '../../../assets/images/man-7506912_1280.jpg'


const HomeBanner: Component = () => {
    return (
        <div class='w-full flex flex-wrap'>
            <div class='w-1/2 '>
                <img src={Woman} alt="" />
            </div>
            <div class='w-1/2 bg-customColor2 flex'>
                <div class='w-64 h-64 bg-red-100 m-auto'>

                </div>
            </div>
        </div>
    )
}

export default HomeBanner;