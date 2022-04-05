/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState }  from 'react'
import {Attachment} from './svg/Attachment';
import Picker from 'emoji-picker-react';

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {

  return (
    <>
    <form className="message_form picker-container" onSubmit={handleSubmit}>
      <label htmlFor="img">
        <Attachment />
      </label>
      <input
        onChange={(e) => 
          setImg(e.target.files[0])
          }

        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button className="btn">Send</button>
      </div>
    </form>
    </>
  )
}

export {MessageForm}