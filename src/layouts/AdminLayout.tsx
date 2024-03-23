import { Component } from "solid-js";
import AdminNav from "../components/navigation/AdminNav";

const AdminLayout:Component = ({children}: any) => {
    return (
        <div class="w-11/12 m-auto pt-20 flex gap-3">
            <div class="w-[330px] border border-slate-300 bg-customColor">
                <AdminNav />
            </div>
            <div class="w-full h-[87vh] bg-customColor p-5 border border-slate-300">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;