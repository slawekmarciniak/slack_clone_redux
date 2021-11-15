import styled from "styled-components";
import Button from "@mui/material/Button";
const ChatInput = () => {
  const sendMessage = () => console.log("message");

  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #${"room"}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div``;
