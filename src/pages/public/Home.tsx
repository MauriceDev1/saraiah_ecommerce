import { Component } from 'solid-js'
import Hero from '../../components/general/Hero'
import HomeBanner from '../../components/pageComponents/homeComponents/HomeBanner';
import Carousel from '../../components/general/Carousel';

const Home:Component = () => {
	return (
		<>
			<Hero />
			<Carousel />
			<HomeBanner />
		</>
	)
}

export default Home;
