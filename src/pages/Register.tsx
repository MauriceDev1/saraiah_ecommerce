import { Component } from "solid-js";

const Register:Component = () => {
    return (
        <div class="w-full flex h-screen">
            <div class="w-1/2 h-full bg-green-100"></div>
            <div class="w-full md:w-1/2 h-full flex">
                <div class="w-10/12 max-w-[450px] m-auto gap-3 flex-col">
                    <h1 class="text-xl text-center">
                        Register
                    </h1>
                    <label>
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        class="w-full border h-10 rounded border-gray-300" 
                    />
                    <label>
                        Password
                    </label>
                    <input 
                        type="password" 
                        name="password"
                        class="w-full border h-10 rounded border-gray-300" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Register;