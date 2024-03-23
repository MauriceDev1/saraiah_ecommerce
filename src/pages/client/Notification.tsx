import { Component, createSignal } from "solid-js";

const Notification:Component = () => {
    const [loading,setLoading] = createSignal<boolean>(false);
    const [listOfNotifications,setListOfNotifications] = createSignal<any[]>([]);
    return (
        <>
            <h1 class="text-xl font-semibold">
                Notification
            </h1>
        </>
    )
}

export default Notification;