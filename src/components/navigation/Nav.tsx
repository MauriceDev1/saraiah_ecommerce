import { Component, For, createSignal } from "solid-js";
import Data from '../../data/Data';
import { useNavigate } from "@solidjs/router";
import { IoCartOutline } from "solid-icons/io";
import { HiOutlineBell } from "solid-icons/hi";
import Logo from '../../assets/images/IMG_2282-removebg-preview.png'
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/userLogout"

const Nav: Component = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { logoutUser } = useLogout();
  const [profileMenu, setProfileMenu] = createSignal(false);

  const handleLogout = () => {
	  logoutUser();
  }

  const toggleProfileMenu = () => {
	setProfileMenu(!profileMenu());
  }

  return (
    <nav class="w-full md:pt-10 fixed z-50">
      <div class="w-full text-lg md:w-11/12 m-auto relative flex bg-opacity-90 rounded-sm justify-between bg-customColor h-16 items-center px-5 shadow">
        	 
			<ul class="lg:flex gap-10 hidden z-50">
          		<For each={Data}>{(l) => (
            		<a href={l.link}>
              			<li>{l.title}</li>
            		</a>
          		)}</For>
        	</ul>
	 		
			<div class="w-full absolute h-full flex justify-center left-0 top-0">
				<div class="h-20 w-20 bg-white flex rounded-full justify-center -mt-2">
					<a href="/">
						<img src={Logo} alt="Mez haul logo" class="h-14 mt-4"/>
					</a>
				</div>
        	</div>

        	<div class="flex gap-6 items-center z-50">
				<HiOutlineBell class="text-3xl" />
				<IoCartOutline class="text-3xl" />
				{isAuth() 
					?
						<>
							<div class="h-10 w-10 relative flex bg-black text-white rounded-full">
								<button 
									class="m-auto" 
									onClick={toggleProfileMenu}
								>
									M
								</button>
								<div class={`${profileMenu() ? "h-56" : "h-0" } overflow-hidden duration-200 ease-in-out -left-20 absolute w-[188px]  bg-customColor top-14`}>
									<ul class="text-black flex flex-col gap-3 pt-5 px-3">
										<a href="/profile">
											<li>Profile</li>
										</a>
										<a href="/orders">
											<li>Orders</li>
										</a>
										<a href="/favourite">
											<li>Favourite</li>
										</a>
										<a href="/notification">
											<li>Notification</li>
										</a>
										<a href="/account">
											<li>Account</li>
										</a>
									</ul>
								</div>
							</div>
							<button 
								onClick={handleLogout}
								class="bg-black text-white h-9 px-6 rounded-sm"
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
