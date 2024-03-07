import { Component, For } from "solid-js";
import Data from '../../data/Data';
import { useNavigate } from "@solidjs/router";
import { IoCartOutline } from "solid-icons/io";
import { HiOutlineBell } from "solid-icons/hi";
import Logo from '../../assets/images/IMG_2282-removebg-preview.png'

const Nav: Component = () => {
  const navigate = useNavigate();
  return (
    <nav class="w-full md:pt-10 fixed z-50">
      <div class="w-full md:w-11/12 m-auto flex bg-opacity-80 rounded-sm justify-between bg-customColor h-14 items-center px-5 shadow">
        	 
			<ul class="lg:flex gap-10 hidden">
          		<For each={Data}>{(l) => (
            		<a href={l.link}>
              			<li>{l.title}</li>
            		</a>
          		)}</For>
        	</ul>
	 		
			<div class="lg:-ml-52">
          		<a href="/">
					<img src={Logo} alt="Mez haul logo" class="h-14"/>
          		</a>
        	</div>

        	<div class="flex gap-5 items-center">
				<HiOutlineBell class="text-xl" />
				<IoCartOutline class="text-xl" />
          		<button onClick={() => navigate('/login')}>
					Login
          		</button>
          		<button onClick={() => navigate('/register')}>
            		Register
          		</button>
        	</div>

		</div>
    </nav>
  );
};

export default Nav;
