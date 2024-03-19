import { Component, For, createEffect, createSignal } from "solid-js";
import InfluencerCard from "../components/pageComponents/influencers/InfluencerCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const InfluencerLayout:Component = () => {
    const [influencerData,setInfluencerDatga] = createSignal<any[]>([]);

    createEffect(() => {
        getInfluencerData();
    });

    const getInfluencerData = async () => {
        const querySnapshot = await getDocs(collection(db, "influencers"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let doc_id = {"id":doc.id}
          let doc_data = doc.data();
          let new_data = Object.assign(doc_id,doc_data);
          setInfluencerDatga((prv) => [...prv,new_data]);
        });
    }

    return (
        <div class="w-11/12 m-auto pt-32 flex gap-5 py-10">
            <For each={influencerData()}>{
                (i) => <div class="w-1/5">
                        <div class="w-full h-72 overflow-hidden">
                            <img src={i.image} alt={i.username} class="w-full"/>
                        </div>
                        <p>{i.username}</p>
                    </div>
            }</For>
        </div>
    )
}

export default InfluencerLayout;