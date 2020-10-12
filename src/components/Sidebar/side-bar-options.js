import React from 'react'
import './side-bar-options.css'

function SideBarOptions({active,text, Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SideBarOptions
