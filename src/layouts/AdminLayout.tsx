import { Component } from "solid-js";
import AdminNav from "../components/navigation/AdminNav";

const AdminLayout:Component = ({children}: any) => {
    return (
        <div class="w-11/12 m-auto pt-28 flex gap-5">
            <div class="w-[330px] border h-[80vh] bg-customColor">
                <AdminNav />
            </div>
            <div class="w-full border h-[80vh] bg-customColor p-5">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;