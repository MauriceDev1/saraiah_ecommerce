import { Component, For, createSignal } from "solid-js";
import Data from '../../data/Data';
import { IoCartOutline } from "solid-icons/io";
import { HiOutlineBell, HiOutlineHeart } from "solid-icons/hi";
import Logo from '../../assets/images/IMG_2282-removebg-preview.png'
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/userLogout"
import { useNavigate } from "@solidjs/router";
import ShopLinks from "../../data/ShopLinks";
import Links from "../../data/Links";

const Nav: Component = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { logoutUser } = useLogout();
  const [profileMenu, setProfileMenu] = createSignal(false);
  const [shopMenu,setShopMenu] = createSignal(false);

  const handleLogout = () => {
	  logoutUser();
  }

  const toggleShopMenu = () => {
	setShopMenu(!shopMenu());
  }

  const toggleProfileMenu = () => {
	setProfileMenu(!profileMenu());
  }

  return (
    <nav class="w-full md:pt-10 fixed z-50">
      <div class="w-full text-md md:w-11/12 m-auto relative border border-slate-300 flex bg-opacity-90 rounded-sm justify-between bg-customColor h-14 items-center px-5">

			<ul class="lg:flex gap-10 hidden z-50">
          		<For each={Data}>{(l) => (
					<>
						{l.link === '/shops'
							?
								<li class="relative cursor-pointer" onClick={toggleShopMenu}>
									{l.title}
									<div class={`${shopMenu() ? 'flex' : 'hidden'} w-56 bg-customColor z-10 mt-4 -left-20 absolute`}>
										<ul>
											<For each={ShopLinks}>{
												(s) => <button class="p-2 border-b border-gray-300 w-full" onclick={() => navigate(s.link)}>
													{s.title}
												</button>
											}</For>
										</ul>
									</div>
								</li>
							:
								<a href={l.link}>
									<li>{l.title}</li>
								</a>
						}
					</>
          		)}</For>
        	</ul>

			<div class="w-full absolute h-full flex justify-center left-0 top-0">
				<div class="flex rounded-full justify-center -mt-3">
					<a href="/">
						<img src={Logo} alt="Mez haul logo" class="h-14 mt-4"/>
					</a>
				</div>
        	</div>

        	<div class="flex gap-6 items-center z-50">
				<button onClick={() => navigate('/whishlist')}>
					<HiOutlineHeart class="text-2xl" />
				</button>
				<button onClick={() => navigate('/notification')}>
					<HiOutlineBell class="text-2xl" />
				</button>
				<button onClick={() => navigate('/cart')}>
					<IoCartOutline class="text-2xl" />
				</button>
				{isAuth()
					?
						<>
							<div class="h-8 w-8 relative flex bg-black text-white rounded-full">
								<button
									class="m-auto"
									onClick={toggleProfileMenu}
								>
									M
								</button>
								<div class={`${profileMenu() ? "flex" : "hidden" }  -left-20 absolute w-[188px]  bg-customColor top-10`}>
									<ul class="text-black w-full">
										<For each={Links}>{
											(l) => <a href={l.link}>
													<li class="p-2 hover:bg-gray-300 px-5">{l.title}</li>
												</a>
										}</For>
									</ul>
								</div>
							</div>
							<button
								onClick={handleLogout}
								class="bg-black text-white h-8 px-6 rounded-sm text-sm"
							>
								Logout
							</button>
						</>
					:
						<>
							<button onClick={() => navigate('/login')}>
								Login
							</button>
							<button onClick={() => navigate('/register')}>
								Register
							</button>
						</>
				}
        	</div>

		</div>
    </nav>
  );
};

export default Nav;
