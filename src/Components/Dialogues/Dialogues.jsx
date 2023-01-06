import React from "react";
import DialogueItem from "./DialogueItem/DialogueItem";
import s from './Dialogues.module.css'
import Message from "./Message/Message";

const Dialogues = (props) => {
  const dialoguesElements = props.state.dialoguesData.map((dialogue, index) => <DialogueItem name={dialogue.name} id={dialogue.id} key={`message-${index}`} />)
  const messageElements = props.state.messages.map((msg, index) => <Message message={msg.message} key={`message-${index}`} />)

  return (
    <div className={s.dialogues} >

      <div className={s.dialoguesItems}>
        {dialoguesElements}
      </div>

      <div className={s.messages}>
        {messageElements}
      </div>

      <div className={s.messageTextarea}>
        <div> <textarea></textarea> </div>
        <div>  <button></button></div>
      </div>

    </div >
  )
}

export default Dialogues 