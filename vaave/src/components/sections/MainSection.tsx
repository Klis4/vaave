import Container from "@mui/material/Container";
import { styled } from "@mui/material";

const MainContainer = styled(Container)(({ theme }) => ({
  width: "200px",
  height: "200px",
  backgroundColor: theme.palette.custom.lightGray,
})) as typeof Container;

function MainSection () {
    return <MainContainer>

    </MainContainer>
}

export default MainSection;