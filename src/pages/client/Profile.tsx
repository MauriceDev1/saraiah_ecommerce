import { Component } from "solid-js";

const Profile:Component = () => {
    return (
        <>
            <h1 class="text-xl">
                Profile
            </h1>
            <div class="py-2">
                <label>Name</label>
            </div>
            <input type="text" name="name" class="w-full max-w-[450px] border h-9 border-gray-300"/>
            <div class="py-2">
                <label>Surname</label>
            </div>
            <input type="text" name="surname" class="w-full max-w-[450px] border h-9 border-gray-300"/>
            <div class="py-2">
                <label>Email</label>
            </div>
            <input type="email" name="email" class="w-full max-w-[450px] border h-9 border-gray-300"/>
            <div class="py-2">
                <label>Cellphone</label>
            </div>
            <input type="text" name="cellphone" class="w-full max-w-[450px] border h-9 border-gray-300"/>
            <br></br>
            <button class="w-full max-w-[450px] bg-black h-9 mt-5 text-white">
                Update
            </button>
        </>
    )
}

export default Profile;