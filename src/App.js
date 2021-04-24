import "./App.css";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import store from "./app/store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./containers/Home/Home";
import { muiTheme } from "./helper/theme";
import Count from "./components/Counter/Counter";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <Grid direction="column" container>
          <Router>
            <Header />
            {/* <Count /> */}
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
