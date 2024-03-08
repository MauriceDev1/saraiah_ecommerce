import { Component, For } from "solid-js";
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import Shops from "../../data/Shops";

const Carousel:Component = () => {
    const options = {
        loop: true,
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 5, spacing: 10 },
          },
        },
        slides: { perView: 1 },
    }
    return (
        <div class="w-full py-16">
            <div class="w-10/12 m-auto flex relative">
                <SliderProvider>
                    <Slider options={options}>
                        <For each={Shops}>{
                            (s) => <div class="w-full bg-gray-100 h-56">{s.title}</div>
                        }</For>
                    </Slider>
                    <div class="w-full h-full m-auto absolute">
                        <SliderButton prev class="float-left pt-24">Previous</SliderButton>
                        <SliderButton next class="float-right pt-24">Next</SliderButton>
                    </div>
                </SliderProvider>
            </div>
        </div>
    )
}

export default Carousel;