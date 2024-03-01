import {Component, For } from "solid-js"
import Data from '../../data/Data'

const Nav:Component = () => {

	return (
		<nav class="w-full py-2 sticky top-0">
			<div class="w-10/12 m-auto flex justify-between">
				<div>
					<a href="/">
						Logo
					</a>
				</div>

				<ul class="hidden md:flex gap-10">
					<For each={Data}>{(l) => (
						<a href={l.link}>
							<li>{l.title}</li>
						</a>
					)}</For>
				</ul>

				<div class="flex gap-5">
					<button>
						Login
					</button>
					<button>
						Register
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Nav;
