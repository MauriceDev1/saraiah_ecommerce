import { Component } from 'solid-js'
import Hero from '../components/general/Hero'
import HomeBanner from '../components/pageComponents/homeComponents/HomeBanner';

const Home:Component = () => {
	return (
		<>
			<Hero />
			<div class='w-full py-16'>
				<div class='w-10/12 flex h-56 gap-3 m-auto'>
					<div class='w-1/5 h-56 bg-gray-100 shadow'>

					</div>
					<div class='w-1/5 h-56 bg-gray-100 shadow'>

					</div>
					<div class='w-1/5 h-56 bg-gray-100 shadow'>

					</div>
					<div class='w-1/5 h-56 bg-gray-100 shadow'>

					</div>
					<div class='w-1/5 h-56 bg-gray-100 shadow'>

					</div>
				</div>
			</div>
			<HomeBanner />
		</>
	)
}

export default Home;
