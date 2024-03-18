import { Component, For } from "solid-js";
import Links from '../../data/Links'

const AdminNav:Component = () => {
    return (
        <ul>
            <For each={Links}>{
                (l) => <a href={l.link}>
                        <li class="py-2 border px-5">{l.title}</li>
                    </a>
            }</For>
        </ul>
    )
}

export default AdminNav;