import React, { useState } from 'react'
import './Emoji.css'
const emojiData=[
    {
       id:1,
       symbol:"😂",
       name:"smile"

    },
    {
        id:2,
        symbol:"🥳",
        name:"celebration"   
    },
    {
        id:3,
        symbol:"😡",
        name:"angry"
    },
    {
         id:4,
         symbol:"😴",
         name:"sleep"

    },
    {
        id:5,
        symbol:"😭",
        name:"crying"
    },
    {
        id:6,
        symbol:"😘",
        name:"kiss"
    },
    {
        id:7,
        symbol:"😱",
        name:"shocked"
    },
    {
        id:8,
        symbol:"🥶",
        name:"freezing"

    },
    {
        id:9,
        symbol:"🥱",
        name:"yawning"
    },
    {
        id:10,
        symbol:"♥️",
        name:"heart"
    }
];


function EmojiSearch() {
    const [searchemoji,setSearchEmoji]=useState("");
    const handlechange=(e)=>
    {
        setSearchEmoji(e.target.value);
    }

    const showEmoji=emojiData.filter((emoji)=>
    {
       const emojiName=emoji.name.toLowerCase();
       return emojiName.includes(searchemoji.toLowerCase())
    });
  return (
    <div id="center">
        <h1>React Emoji App!!!</h1>
        <input type="text" placeholder='Search for the emoji...' value={searchemoji}onChange={handlechange}/>
        <div>{
       showEmoji.map((emoji)=>emoji.symbol)
       }</div>
    </div>
  )
}

export default EmojiSearch