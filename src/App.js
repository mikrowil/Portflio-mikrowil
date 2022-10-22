import './App.css';
import SinglePage from "./layout/single_page/SinglePage";
import 'uikit/dist/js/uikit.min'
import 'uikit/dist/css/uikit.min.css'
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SinglePage/>
    </ThemeProvider>
  );
}

export default App;
