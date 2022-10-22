import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/GlobalStyles";
import { defaultTheme } from "./styles/theme/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
      
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

