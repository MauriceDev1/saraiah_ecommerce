import { Component, createEffect, createSignal } from "solid-js";
import cookie from "cookiejs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Profile:Component = () => {
    const [ userData, setUserData ] = createSignal({
        name: '', 
        surname: '',
        email: '',
        cellphone: ''
    });
    const userId = cookie.get('userId');

    createEffect(() => {
        getUserData(userId);
    });

    const getUserData = async (e:any) => {
        const docRef = doc(db, "users", `${e}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserData({
                name: docSnap.data()?.name ? docSnap.data()?.name : '',
                surname: docSnap.data().surname ? docSnap.data()?.surname : '',
                email: docSnap.data().email ? docSnap.data()?.email : '',
                cellphone: docSnap.data().cellphone ? docSnap.data()?.cellphone : ''
            })
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    }

    return (
        <>
            <h1 class="text-xl">
                Profile
            </h1>
            <div class="py-2">
                <label>Name</label>
            </div>
            <input 
                type="text" 
                name="name"
                value={userData().name} 
                placeholder={userData().name === '' ? 'Enter name' : ''}
                class="w-full max-w-[450px] border h-9 border-gray-300 px-2"
            />
            <div class="py-2">
                <label>Surname</label>
            </div>
            <input 
                type="text" 
                name="surname" 
                value={userData().surname} 
                placeholder={userData().surname === '' ? 'Enter surname' : ''}
                class="w-full max-w-[450px] border h-9 border-gray-300 px-2"
            />
            <div class="py-2">
                <label>Email</label>
            </div>
            <input 
                type="email" 
                name="email" 
                value={userData().email} 
                placeholder={userData().email === '' ? 'Enter email' : ''}
                class="w-full max-w-[450px] border h-9 border-gray-300 px-2"
            />
            <div class="py-2">
                <label>Cellphone</label>
            </div>
            <input 
                type="text" 
                name="cellphone" 
                value={userData().cellphone}
                placeholder={userData().cellphone === '' ? 'Enter cellphone' : ''} 
                class="w-full max-w-[450px] border h-9 border-gray-300 px-2"
            />
            <br></br>
            <button class="w-full max-w-[450px] bg-black h-9 mt-5 text-white">
                Update
            </button>
        </>
    )
}

export default Profile;