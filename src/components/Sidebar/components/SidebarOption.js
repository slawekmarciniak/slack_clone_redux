import styled from "styled-components";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../../features/appSlice";

const SidebarOption = ({ Icon, text, addChannelOption, id }) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Plase enter the channel name");
    if (channelName) {
      addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

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

// const SidebarOptionChannel = styled.div``;
