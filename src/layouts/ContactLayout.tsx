import { Component } from "solid-js";

const ContactLayout:Component = () => {
    return (
        <div class="w-11/12 m-auto pt-20 flex gap-5 py-10">
            <div class="w-1/2 m-auto">
                <h1 class="text-3xl pb-5">Contact Form</h1>
                <div class="text-md flex flex-col gap-3">
                    <div class="flex gap-3">
                        <div class="w-1/2">
                            <label>
                                Name
                            </label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Name"
                                class="w-full h-10 border mt-2 border-gray-400 px-2"
                            />
                        </div>
                        <div class="w-1/2">
                            <label>
                                Surname
                            </label>
                            <input 
                                type="text" 
                                name="surname"
                                placeholder="Surname"
                                class="w-full h-10 border mt-2 border-gray-400 px-2"
                            />
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <div class="w-1/2">
                            <label>
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email"
                                class="w-full h-10 border mt-2 border-gray-400 px-2"
                            />
                        </div>
                        <div class="w-1/2">
                            <label>
                                Mobile
                            </label>
                            <input 
                                type="tel" 
                                name="mobile"
                                placeholder="Mobile"
                                class="w-full h-10 border mt-2 border-gray-400 px-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label>
                            Subject
                        </label>
                        <select
                            class="w-full border mt-2 border-gray-400 bg-white h-10 px-2"
                        >
                            <option value="select">Select</option>
                        </select>
                    </div>
                    <div>
                        <label>
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            cols="30" 
                            rows="6"
                            class="w-full border mt-2 border-gray-400 resize-none p-2"
                        >
                        </textarea>
                    </div>
                    <button class="bg-black text-white w-full h-10">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactLayout;