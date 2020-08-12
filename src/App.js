import React from 'react';
import './styles/App.css';
import HowItWorks from "./components/HowItWorks"
import Benefits from "./components/Benefits";
import SignUp from "./components/SignUp";
import apiData from "./api-sample-data";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "black",
          borderWidth: 1
        }
      }
    }
  }
});

function App() {
  // const [data, setData] = useState(apiData);
  /*generally an api call will be here using useEffect hook and saving data in state,
   however,  here using sample data so directly importing it*/
   const {works_data, benefits_data, signup_data} = apiData || {};

  return (
    <ThemeProvider theme={theme}>
     <HowItWorks data={works_data} />
      <Benefits data={benefits_data} />
      <SignUp data={signup_data} />
    </ThemeProvider>
  );
}

export default App;
