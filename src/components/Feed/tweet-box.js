import { Button,Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import './tweet-box.css'
import db from '../firebase'

function TweetBox() {
    const [tweetMessage,setTweetMessage] = useState('')
    const [tweetImage,setTweetImage] = useState('')


    const sendTweet = e =>{
        e.preventDefault()

        db.collection('posts').add({
            displayName: 'Mehmet Ali Özdemir',
            username:'slash585',
            verified:'true',
            text: tweetMessage,
            image: tweetImage,
            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBj1wk7gWqOcoAS0vSxJx8IW0Mum7MlijqzQ&usqp=CAU'
        });

        setTweetImage('');
        setTweetImage('');
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBj1wk7gWqOcoAS0vSxJx8IW0Mum7MlijqzQ&usqp=CAU"/>
                    <input
                    onChange={(e)=>setTweetMessage(e.target.value)} 
                    value={tweetMessage} 
                    placeholder="What's happening ?" 
                    type="text"/>                    
                </div>
                <input
                value={tweetImage}
                onChange={(e)=>setTweetImage(e.target.value)}
                className="tweetBox_inputImage" 
                placeholder="Enter image URL " 
                type="text"/> 

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox