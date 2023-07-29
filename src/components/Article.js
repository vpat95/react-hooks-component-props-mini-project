import React from "react";

function Article({
    title, 
    date="January 1, 1970", 
    preview,
    minutes
}){
    function ReadTime({time}){
        
        if(time < 30){
            let emoji = ''
            let multiplier = Math.ceil(time/5)
            for (let i = 1; i<=multiplier; i++){
                emoji = emoji+'☕️'
            }
        return (
             <span> • {emoji} {time}min read</span>
        )
        } else {
            let emoji = ''
            let multiplier = Math.ceil(time/10)
            for (let i = 1; i<=multiplier; i++){
                emoji = emoji+'🍱'
            }
            return (
            <span> • {emoji} {time} min read</span>
                )
        }
    
    }
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}<ReadTime time={minutes}/></small>
            <p>{preview}</p>
        </article>
    )
}
export default Article