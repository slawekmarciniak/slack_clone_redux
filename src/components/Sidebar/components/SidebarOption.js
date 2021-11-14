import styled from "styled-components";
import { db, app } from "../../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const SidebarOption = ({ Icon, text, addChannelOption }) => {
  const addChannel = () => {
    const channelName = prompt("Plase enter the channel name");
    if (channelName) {
      const fc = async () => {
        const x = await addDoc(collection(db, "rooms"), {
          name: channelName,
        });
        return x;
      };
      fc();
    }
  };
  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon ? (
        <>
          <Icon /> {text}
        </>
      ) : (
        <>
          <span>#</span> {text}
        </>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 5px;
  opacity: 0.7;
  cursor: pointer;

  :hover {
    background-color: #340e36;
  }

  > .MuiSvgIcon-root {
    margin-right: 10px;
    margin-left: 20px;
    /* font-size: small; */
  }

  > span {
    margin-left: 35px;
    margin-right: 10px;
  }
`;

const SidebarOptionChannel = styled.div``;
