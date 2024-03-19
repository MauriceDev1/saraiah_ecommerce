import { Component } from "solid-js";
import InfluencerCard from "../components/pageComponents/influencers/InfluencerCard";

const InfluencerLayout:Component = () => {
    return (
        <div class="w-11/12 m-auto pt-32 flex gap-5 py-10">
            <InfluencerCard />
        </div>
    )
}

export default InfluencerLayout;
