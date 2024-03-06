import { Component } from "solid-js";

const Footer:Component = () => {
	return (
		<footer class="w-full bg-customColor py-16">
			<div class="w-9/12 m-auto flex flex-wrap">
				<div class="w-1/4">
					<ul>
						<li>
							Home
						</li>
						<li>
							Shop
						</li>
						<li>
							Blog
						</li>
					</ul>
				</div>
				<div class="w-1/4">
					<ul>
						<li>
							Lookbook
						</li>
						<li>
							Contact
						</li>
					</ul>
				</div>
				<div class="w-1/4">
					<ul>
						<li>
							Store Policy
						</li>
						<li>
							Shipping & Returns
						</li>
						<li>
							FAQ
						</li>
					</ul>
				</div>
				<div class="w-1/4">
					<ul>
						<li>
							Facebook
						</li>
						<li>
							Instagram
						</li>
						<li>
							Pintrest
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
