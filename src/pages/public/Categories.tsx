import { Component } from 'solid-js'
import ShopHero from '../../components/general/ShopHero';
import Woman from '../../assets/images/girl-1744349_1920.jpg'

const Categories:Component = () => {
	return (
		<>
			<ShopHero image={Woman} />
			Categories
		</>
	)
}

export default Categories;
