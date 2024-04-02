import { Helmet } from "react-helmet-async";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoList from "./ToDoList";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  body {
    background-color: ${(props) => props.theme.bgColor};
  }
`;

export default function App() {
  return (
    <>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300;700&display=swap')
        </style>
      </Helmet>
      <TodoList />
      <GlobalStyle />
    </>
  );
}
