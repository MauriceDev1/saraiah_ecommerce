import { Component, For } from "solid-js";
import Data from '../../data/Data';

const Nav: Component = () => {
  return (
    <nav class="w-full pt-10 fixed z-50">
      <div class="w-11/12 m-auto flex rounded-sm justify-between bg-customColor h-14 items-center px-5 shadow">
        	 
			<ul class="md:flex gap-10 hidden">
          		<For each={Data}>{(l) => (
            		<a href={l.link}>
              			<li>{l.title}</li>
            		</a>
          		)}</For>
        	</ul>
	 		
			<div class="-ml-64">
          		<a href="/">
            	Logo
          		</a>
        	</div>

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
  );
};

export default Nav;
