import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { blue, grey } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    type: "light",

    primary: {
      main: blue[800],
      light: blue[100],
    },
    secondary: {
      main: grey[300],
    },
  },
});
