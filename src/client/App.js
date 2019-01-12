import React from "react";
import styled from "styled-components";

const StyledComponent = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <div>
      <StyledComponent>Hello from React!</StyledComponent>
    </div>
  );
};

export default App;
