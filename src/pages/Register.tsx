import { Component, createSignal } from "solid-js";
import Woman from '../assets/images/man-7428290_1280.jpg'

const Register:Component = () => {
    const [data, setData] = createSignal({
        name: '',
        email: '',
        password: '',
        repassword: ''
    });
    const [dataError, setDataError] = createSignal({
        name: '',
        email: '',
        password: '',
        repassword: ''
    });
    
    const enterData = (e:any) => {
        const {name, value} = e.target;
        setData((prv) => ({...prv,[name]:value}));
    }

    const errorHandling = (e:any) => {
        const {name} = e.target;
        setDataError((prv) => ({...prv,[name]:''}));
    }

    const onSubmit = () => {
        if(data().name === '' || data().email === '' || data().password === '' || data().repassword === '' || dataError().password !== dataError().repassword){
            if(data().name === '') {
                setDataError((prv) => ({...prv,'name': 'Name is a required fiels!'}))
            }
            if(data().email === '') {
                setDataError((prv) => ({...prv,'email': 'Email is a required fiels!'}))
            }
            if(data().password === '') {
                setDataError((prv) => ({...prv,'password': 'Password is a required field!'}))
            }
            if(data().repassword === '') {
                setDataError((prv) => ({...prv,'repassword': 'Confirm password is a required field!'}))
            }
            if(data().repassword !== data().password){
                setDataError((prv) => ({...prv,'repassword': 'Passwords do not match'}))
            }
            return
        }
        console.log(data());
    }

    return (
        <div class="w-full flex h-screen">
            <div class="hidden md:flex w-1/2 h-full bg-green-100" style={{"background-image":`url(${Woman})`,"background-size":"cover"}}></div>
            <div class="w-full md:w-1/2 h-full flex">
                <div class="w-10/12 max-w-[450px] m-auto gap-3 flex-col">
                    <h1 class="text-2xl text-center">
                        Register
                    </h1>
                    <div class="py-3">
                        <label>
                            Name
                        </label>
                    </div>
                    <input 
                        type="email" 
                        name="name"
                        placeholder={dataError().name ? dataError().name : 'Name'}
                        onInput={enterData}
                        onChange={errorHandling}
                        class="w-full border h-10 rounded border-gray-300 px-2" 
                    />
                    <div class="py-3">
                        <label>
                            Email
                        </label>
                    </div>
                    <input 
                        type="email" 
                        name="email"
                        placeholder={dataError().email ? dataError().email : 'Email'}
                        onInput={enterData}
                        onChange={errorHandling}
                        class="w-full border h-10 rounded border-gray-300 px-2" 
                    />
                    <div class="py-3">
                        <label>
                            Password
                        </label>
                    </div>
                    <input 
                        type="password" 
                        name="password"
                        placeholder={dataError().password ? dataError().password : 'Password'}
                        onInput={enterData}
                        onChange={errorHandling}
                        class="w-full border h-10 rounded border-gray-300 px-2" 
                    />
                    <div class="py-3">
                        <label>
                            Confirm Password
                        </label>
                    </div>
                    <input 
                        type="password" 
                        name="repassword"
                        placeholder={dataError().repassword ? dataError().repassword : 'Confirm password'}
                        onInput={enterData}
                        onChange={errorHandling}
                        class="w-full border h-10 rounded border-gray-300 px-2" 
                    />
                    <button onClick={onSubmit} class="w-full my-5 bg-blue-500 text-white h-10 rounded">Register</button>
                    <div class="flex justify-between">
                        <p>
                            Already register 
                            <a href="/login">
                            <span class="text-sky-500">
                                Click here
                            </span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Register;