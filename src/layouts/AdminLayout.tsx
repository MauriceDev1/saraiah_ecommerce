import { Component } from "solid-js";

const AdminLayout:Component = ({children}: any) => {
    return (
        <div class="w-11/12 m-auto pt-32 flex gap-5">
            <div class="w-[330px] border h-[80vh] rounded-md bg-customColor shadow">

            </div>
            <div class="w-full border h-[80vh] rounded-md bg-customColor shadow">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;