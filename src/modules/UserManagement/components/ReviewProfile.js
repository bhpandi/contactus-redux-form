import React, { Component } from "react";
import SignInForm from "./ManageProfile";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { load as loadAccount } from "../../../store/reducers";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { PROFILE_LABELS } from "../constants";

const Review = props => {
  const { data } = props;

  return (
    <React.Fragment>
      <Box width="100%">
        <header className="App-header">
          <h1 className="App-title">Review Profile</h1>
        </header>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        ml={3}
        mt={3}
      >
        {!isEmpty(data) &&
          Object.keys(data).map(user => (
            <Box
              display="flex"
              borderBottom={1}
              justifyContent="flex-start"
              mt={3}
              width="100%"
              borderColor="blue.500"
              
            >
              <Box fontWeight="fontWeightBold">{PROFILE_LABELS[user]}: </Box> {data[user]}
            </Box>
          ))}
      </Box>
      <Box
        width="100%"
        mt={2}
        ml={3}
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="column"
      >
        <Button
          variant="contained"
          onClick={props.handleClick}
          className="button is-link"
          color="primary"
        >
          Edit
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default connect(
  state => ({
    data: state.userDetails.user // pull initial values from account reducer
  }),
  { load: loadAccount }
)(Review);
