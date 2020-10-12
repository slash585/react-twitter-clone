import React from 'react';
import './side-bar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SideBarOptions from './side-bar-options';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';

function SideBar() {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>


            <SideBarOptions Icon={HomeIcon} text="Home"/>
            <SideBarOptions Icon={SearchIcon} text="Explore"/>
            <SideBarOptions Icon={NotificationsNoneIcon} text="Notifications"/>
            <SideBarOptions Icon={MailOutlineIcon} text="Messages"/>
            <SideBarOptions Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SideBarOptions Icon={ListAltIcon} text="Lists"/>
            <SideBarOptions Icon={PermIdentityIcon} text="Profile"/>
            <SideBarOptions Icon={MoreHorizIcon} text="More"/>

            {/* Button -> Tweet */}  
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        
        </div>
    );
}

export default SideBar;