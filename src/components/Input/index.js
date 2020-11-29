import React from "react";

import { Form, SendButton, StyledInput } from "./style";

const Input = ({ message, setMessage, sendMessage }) => {
  return (

    <Form>
      <StyledInput
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(event => event.key === "Enter" ? sendMessage(event) : null)}
      />
      <SendButton onClick={(event) => sendMessage(event)}>
        Send
      </SendButton>
    </Form>
  );
};

export default Input;