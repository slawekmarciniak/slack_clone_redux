import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import * as Styled from "./styles";

const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLeft>
        <Styled.HeaderAvatar src="profil2.jpg" alt="picture" />
        <AccessTimeIcon />
      </Styled.HeaderLeft>

      <Styled.HeaderSearch>
        <SearchIcon />
        <input placeholder="search slack" />
      </Styled.HeaderSearch>

      <Styled.HeaderRight>
        <HelpOutlineIcon />
      </Styled.HeaderRight>
    </Styled.HeaderContainer>
  );
};

export default Header;
