import {
  ButtonContainer,
  StyledButton,
  Button,
  TomatoButton,
  StyledH1,
  LinkTag,
} from "../styleComponents/Style";
export default function Index() {
  const handleLink = () => {
    // alert("goto link");
  };
  return (
    <ButtonContainer>
      <StyledButton>Click Here!</StyledButton>
      <StyledButton $bgColor="bgColorVariant" $textColor="textColorVariant">
        Do not Click!
      </StyledButton>
      {/* extending styles */}
      <Button>Normal Button</Button>
      <TomatoButton as="a">Tomato Btn</TomatoButton>
      <StyledH1 as="a" href="#">
        Test
      </StyledH1>
      <LinkTag as="a" href="google" onClick={handleLink}>
        Google
      </LinkTag>
    </ButtonContainer>
  );
}
