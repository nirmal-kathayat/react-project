import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 10px;
  padding-top: 50px;
`;

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$bgColor === "bgColorVariant" ? "purple" : "black"};
  color: ${(props) => (props.$textColor === "black" ? "white" : "white")};
  padding: 10px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;

// Extending Styles
export const Button = styled.button`
  background-color: orange;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
`;

export const TomatoButton = styled(Button)`
  background-color: tomato;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
`;

export const StyledH1 = styled.h1`
  font-size: 18px;
  text-decoration: none;
`;

export const LinkTag = styled(StyledH1)`
  font-size: 20px;
  color: red;
  text-decoration: underline;
`;
