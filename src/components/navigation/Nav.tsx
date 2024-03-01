import {Component, For } from "solid-js"

const Nav:Component = () => {
	const Links = [
		{
			id:1,
			title: 'Home',
			link: '/',
		},
		{
			id:2,
			title: 'Shops',
			link: '/shops',
		}
	];

	return (
		<nav class="w-full py-2">
			<div class="w-10/12 m-auto">
				Navigation

				<ul>
					<For each={Links}>{(l) => (
						<a href={l.link}>
							<li>{l.title}</li>
						</a>
					)}</For>
				</ul>
			</div>
		</nav>
	)
}

export default Nav;
