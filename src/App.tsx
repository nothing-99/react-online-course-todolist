import { Helmet } from "react-helmet-async";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
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
      <GlobalStyle />
    </>
  );
}
