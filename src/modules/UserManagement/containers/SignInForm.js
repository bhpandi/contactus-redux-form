import React, { useEffect } from "react";
import SignInForm from "../components/ManageProfile";
import { connect } from "react-redux";
import { useHistory, Switch, Route } from "react-router-dom";
import logo from "../../../logo.svg";
import "../../../App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Review from "../components/ReviewProfile";
import { load as loadAccount } from "../../../store/reducers";

const App = props => {
  const history = useHistory();
  const handleSignIn = values => {
    history.push("/review");
    props.load(values);
  };
  const handleClick = () => {
    history.push("/edit");
  };
  useEffect(() =>{
    if (window.performance) {
      if (performance.navigation.type == 1) {
        history.push("/");
      }
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="App" >
       <Grid container direction="row" justify="center" alignItems="center" xs="12">
          <Switch>
            <Route exact path="/">
              <SignInForm onSubmit={handleSignIn} />
            </Route>
            <Route path="/review">
              <Review handleClick={handleClick} />
            </Route>
            <Route path="/edit">
              <SignInForm onSubmit={handleSignIn} edit />
            </Route>
          </Switch>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default connect(null, { load: loadAccount })(App);
