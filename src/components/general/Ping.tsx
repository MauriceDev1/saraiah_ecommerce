import { Component } from "solid-js"

const Ping:Component = () => {
    return (
        <span class="absolute right-0 bottom-0 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
    )
}

export default Ping;