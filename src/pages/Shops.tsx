import { Component, For } from 'solid-js'
import ShopHero from '../components/general/ShopHero';
import Woman from '../assets/images/woman-2564660_1920.jpg'
import ShopsData from '../data/Shops';

const Shops:Component = () => {
	return (
		<>
			<ShopHero image={Woman}/>
			<div class='w-10/12 m-auto py-16 flex flex-wrap'>
				<For each={ShopsData}>{
					(s) =>
						<div class='w-1/2 md:w-1/4 lg:w-1/5 h-56 p-2'>
							<div class='w-full bg-gray-200 h-full'>
								{s.title}
							</div>
						</div>
				}</For>
			</div>
		</>
	)
}

export default Shops;
