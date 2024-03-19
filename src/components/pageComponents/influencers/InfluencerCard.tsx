import { Component } from "solid-js";

const InfluencerCard:Component = (data: any) => {
    return (
        <div class="w-1/5 p-2">
            <div class="w-full">
                <div class="w-full h-72 bg-gray-100">
                    <img src={data?.image} alt=""/>
                </div>
                <div>
                    <h3>{data?.username}</h3>
                    <div>
                        Socila handles
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfluencerCard;
