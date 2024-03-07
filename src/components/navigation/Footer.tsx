import { RiLogosFacebookCircleLine, RiLogosInstagramLine, RiLogosPinterestLine } from "solid-icons/ri";
import { Component } from "solid-js";

const Footer:Component = () => {
	return (
		<footer class="w-full bg-customColor py-16">
			<div class="w-9/12 m-auto flex flex-wrap">
				<div class="w-1/4">
					<ul>
						<li>
							<a href="/">
								Home
							</a>
						</li>
						<li>
							<a href="/shops">
								Shops
							</a>
						</li>
						<li>
							<a href="/blog">
								Blog
							</a>
						</li>
					</ul>
				</div>
				<div class="w-1/4">
					<ul>
						<li>
							<a href="/lookbook">
								Lookbook
							</a>
						</li>
						<li>
							<a href="/contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div class="w-1/4">
					<ul>
						<li>
							<a href="/store_policy">
								Store Policy
							</a>
						</li>
						<li>
							<a href="/shipping_returns">
								Shipping & Returns
							</a>
						</li>
						<li>
							<a href="/faq">
								FAQ
							</a>
						</li>
					</ul>
				</div>
				<div class="w-1/4">
					<ul class="flex gap-5">
						<li>
							<RiLogosFacebookCircleLine class="text-2xl"/>
						</li>
						<li>
							<RiLogosInstagramLine class="text-2xl"/>
						</li>
						<li>
							<RiLogosPinterestLine class="text-2xl"/>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
