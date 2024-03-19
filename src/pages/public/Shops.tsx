import { Component, For, createEffect, createSignal } from 'solid-js'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Shops:Component = () => {
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
	return (
		<>
			<div class='w-11/12 m-auto pt-32 flex flex-wrap'>
				<For each={storeData()}>{
					(s) =>
						<div class='w-1/2 md:w-1/4 lg:w-1/5 h-56 p-2'>
							<a href={`/shop/${s.shop_id}`}>
								<img src={s?.image} alt={s?.name} />
							</a>
						</div>
				}</For>
			</div>
		</>
	)
}

export default Shops;
