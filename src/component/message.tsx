import React, {memo} from "react";

const Message = (props) =>{
    console.log('Message component is rendering');
    return <p>{props.numberOfMessage} 0 Message sent</p>;

};

export default memo(Message);