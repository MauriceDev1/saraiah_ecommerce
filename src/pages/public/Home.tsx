import { Component, createEffect, createSignal } from 'solid-js'
import Hero from '../../components/general/Hero'
import HomeBanner from '../../components/pageComponents/homeComponents/HomeBanner';
import Carousel from '../../components/general/Carousel';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import LoadingScreen from '../../components/general/LoadingScreen';

const Home:Component = () => {
	const [loading, setLoading] = createSignal(false);
	const [shopList,setShopList] = createSignal<any[]>([]);

	createEffect(() => {
		getListOfShops();
	});

	const getListOfShops = async () => {
        const querySnapshot = await getDocs(collection(db, "stores"));
        querySnapshot.forEach((doc) => {
            let doc_id = {"id":doc.id}
            let doc_data = doc.data();
            let new_data = Object.assign(doc_id,doc_data);
            setShopList((prv) => [...prv,new_data]);
			setLoading(true);
        });
	}

	return (
		<>
			{loading()
				?
					<>
						<Hero />
						{shopList().length > 4 && <Carousel shopLinks={shopList()} />}
						<HomeBanner />
					</>
				:
					<LoadingScreen />
			}
		</>
	)
}

export default Home;
