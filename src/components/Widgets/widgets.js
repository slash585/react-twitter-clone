import React from 'react'
import './widgets.css'
import {TwitterTimelineEmbed,  TwitterShareButton,
    TwitterTweetEmbed,} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1309780052989677569"}/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="zeydturkyilmaz"
                    options={{ height:400}}
                />        

                <TwitterShareButton
                    url="https://twitter.com/zeydturkyilmaz"
                    options={{text:"#kpss2020", via:"zeydturkyilmaz"}}
                />        
            </div>
        </div>
    )
}

export default Widgets
