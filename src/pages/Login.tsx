import { Component , createSignal} from "solid-js"
import Woman from '../assets/images/woman-6466907_1920.jpg'

const Login:Component = () => {
    const [data, setData] = createSignal({
        email: '',
        password: ''
    });
    const [dataError, setDataError] = createSignal({
        email: '',
        password: ''
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
        if(data().email === '' && data().password === ''){
            if(data().email === '') {
                setDataError((prv) => ({...prv,'email': 'Email is a required fiels!'}))
            }
            if(data().password === '') {
                setDataError((prv) => ({...prv,'password': 'Password is a required field!'}))
            }
            return
        }
        console.log(data());
    }

    return (
        <div class="w-full flex h-screen">
            <div class="w-1/2 h-full bg-green-100" style={{"background-image":`url(${Woman})`,"background-size":"cover"}}></div>
            <div class="w-full md:w-1/2 h-full flex">
                <div class="w-10/12 max-w-[450px] m-auto gap-3 flex-col">
                    <h1 class="text-2xl text-center">
                        Login
                    </h1>
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
                    <button onClick={onSubmit} class="w-full my-5 bg-blue-500 text-white h-10 rounded">Login</button>
                    <div class="flex justify-between">
                        <p>
                            Register 
                            <a href="/register">
                            <span class="text-sky-500">
                                Click here
                            </span>
                            </a>
                        </p>
                        <a href="/forgot">
                            <p class="text-sky-500">
                                Forgot Password
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;