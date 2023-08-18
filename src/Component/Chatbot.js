import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { Button } from 'react-bootstrap';
import { analyze } from "./utils";


export default function Chatbot() {

    const [messages, setMessages] = useState([
        {
            message: 'Hi, goku i have your name?'
        }
    ]);

    const [text, setText] = useState("");

    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            const reply = analyze(text)
            list = [
                ...list, { message: reply }];
        }
        else {
            list = [
                ...list,
                {
                    message:`hi,${text}`
                },
                {
                    message: "How can i help you",
                },
            ]
        }
        setMessages(list)
        setText("")
        setTimeout(() => {
            document.querySelector('#copyright').scrollIntoView();
        }, 1);
    };
    return (
        <div>
            <div className="container">
                <img src="https://www.cio.com/wp-content/uploads/2023/08/chatbot_ai_machine-learning_emerging-tech-100778305-orig.jpg?quality=50&strip=all&w=1024"
                    alt="logo"
                    height={200}
                    width={200}
                />
                <h2 className="text-primary"> Chatbot </h2>
            </div>
            <div className="chat-message">

                {messages.length > 0 &&
                    messages.map((data) => <ChatMessage {...data} />)}

                <div className="d-flex mt-2">
                    <input type='text' className="form-control"
                     value={text} 
                     onChange={(e) => setText(e.target.value)} />
                    <Button type="primary" className="ms-3" onClick={onSend}>
                        Send
                    </Button>
                </div>
                <div className="mt-3" id='copyright'> copyright reserved goku</div>

            </div>
        </div>
    )
}