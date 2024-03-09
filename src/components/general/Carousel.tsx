import { Component, For, createEffect, createSignal } from "solid-js";
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import Shops from "../../data/Shops";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { RiArrowsArrowLeftDoubleFill, RiArrowsArrowLeftSLine, RiArrowsArrowRightDoubleFill, RiArrowsArrowRightSLine } from "solid-icons/ri";

const Carousel:Component = () => {
    const [storeData, setStoreData] = createSignal<any[]>([])
    createEffect(() => {
        getShopsData();
    });
    
    const getShopsData = async () => {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const data:any = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        setStoreData(data);
    }
    

    const options = {
        loop: true,
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 5, spacing: 30 },
          },
        },
        slides: { perView: 1 },
    }
    return (
        <div class="w-full py-16">
            <div class="w-10/12 m-auto flex relative">
                {storeData().length > 0 
                ?
                <SliderProvider>
                    <Slider options={options}>
                        <For each={storeData()}>{
                            (s) =>  <a href={`/shop/${s.shop_id}`}>
                                        <img src={s.image} alt={s.name} />
                                    </a>
                        }</For>
                    </Slider>
                    <SliderButton prev class="absolute -left-14 h-full">
                        <RiArrowsArrowLeftSLine class="text-7xl"/>
                    </SliderButton>
                    <SliderButton next class="absolute -right-14 h-full">
                        <RiArrowsArrowRightSLine class="text-7xl"/>
                    </SliderButton>
                </SliderProvider>
                :
                null
                }
            </div>
        </div>
    )
}

export default Carousel;