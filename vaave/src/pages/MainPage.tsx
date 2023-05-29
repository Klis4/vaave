import { Container, styled } from "@mui/material";
import MainSection from "../components/sections/MainSection";

const Page = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.custom.lightGray,
})) as typeof Container;

function MainPage() {
  return (
    <>
      <Page>
        <MainSection></MainSection>;
      </Page>
    </>
  );
}

export default MainPage;
