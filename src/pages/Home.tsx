import { Component } from 'solid-js'
import Hero from '../components/general/Hero'
import LocationComponent from '../components/LocationComponent';

const Home:Component = () => {
	return (
		<>
			<Hero />
			<LocationComponent />
			Home
		</>
	)
}

export default Home;
