import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SyncIcon from "@mui/icons-material/Sync";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./components/SidebarOption";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(collection(db, "rooms"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>YOUR BEST GROUP</h2>
          <h3>
            <FiberManualRecordIcon />
            Slawek Marciniak
          </h3>
        </SidebarInfo>
        <EditIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} text="Threads" />
      <SidebarOption Icon={AlternateEmailIcon} text="Mentions reactions" />
      <SidebarOption Icon={SyncIcon} text="Slack Connect" />
      <SidebarOption Icon={MoreVertIcon} text="More" />
      <SidebarOption Icon={ArrowRightIcon} text="Direct messages" />
      <SidebarOption Icon={ArrowDropDownIcon} text="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption text="Add Channel" />
      <hr />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} text={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400px;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    color: greenyellow;
    margin-top: 1px;
    margin-right: 2px;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;
