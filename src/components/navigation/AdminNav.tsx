import { Component, For } from "solid-js";
import Links from '../../data/Links'

const AdminNav:Component = () => {
    return (
        <ul>
            <For each={Links}>{
                (l) => <a><li>{l.title}</li></a>
            }</For>
        </ul>
    )
}

export default AdminNav;