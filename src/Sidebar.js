import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />

            <SidebarOption title="Home" Icon = {HomeIcon}/>
            <SidebarOption title="Search" Icon = {SearchIcon}/>
            <SidebarOption title="Library" Icon = {LibraryMusicIcon}/>
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
        </div>
    )
}

export default Sidebar
