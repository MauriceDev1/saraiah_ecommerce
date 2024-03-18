import { Component } from "solid-js";
import Woman from '../../../assets/images/front-view-black-family-posing-studio (2).jpg'


const HomeBanner: Component = () => {
    return (
        <div class='w-full flex flex-wrap'>
            <div class='w-full'>
                <img src={Woman} alt="" />
            </div>
        </div>
    )
}

export default HomeBanner;