import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../../App.css";
import { load as loadAccount } from "../../../store/reducers";
import { validate } from "../utility/utility";


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <Grid>
    <Grid item className="control">
      <Box mb={1} mt={1}><label className="field">{label}</label></Box>
      <Box width="500px"><input className="input" {...input} placeholder={label} type={type} /></Box>
      {touched &&
        ((error && <Typography color="error" variant="body2">{error}</Typography>) ||
          (warning && <Typography>{warning}</Typography>))}
    </Grid>
  </Grid>
);

let SignInForm = props => {
  const { handleSubmit, edit } = props;

  useEffect(() => {
    validate;
  }, []);
  
  if (edit && props.initialValues) {
    props.load(props.initialValues);
  }
  const title = edit ? 'Edit Profile' : 'Create Profile';
  return (
  <Box width="100%">
  <header className="App-header">
    <h1 className="App-title">{title}</h1>
  </header>
   <Box width="100%" mt={2} ml={3} display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column" className="App-continer">
    <form onSubmit={handleSubmit} className="form">
      <Grid container  className="field">
        <Grid item className="control">
          <Field
            name="firstName"
            component={renderField}
            type="text"
            label="First Name"
          />
        </Grid>
      </Grid>

      <Grid container className="field">
        <Grid item className="control">
          <Field
            name="lastName"
            component={renderField}
            type="text"
            label="Last Name"
          />
        </Grid>
      </Grid>

      <Grid container className="field">
        <Grid item className="control">
          <Field
            name="email"
            component={renderField}
            type="email"
            label="Email Address"
          />
        </Grid>
      </Grid>
      <Grid container className="field">
        <Grid item className="control">
          <Field
            name="phone"
            component={renderField}
            type="text"
            label="Phone Number"
          />
        </Grid>
      </Grid>
      <Grid container className="field">
        <Grid iem className="control">
        <Box mb={2} mt={1}><label className="label">Gender</label></Box>
          <label className="radio">
            <Field name="gender" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label className="radio">
            <Field
              name="gender"
              component="input"
              type="radio"
              value="female"
            />{" "}
            Female
          </label>
        </Grid>
      </Grid>

      <Grid container className="field">
        <Grid item className="control">
          <Button color="primary" variant="contained" className="button is-link" type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
    </Box> 
    </Box>
  );
};

SignInForm = reduxForm({
  form: "signIn",
  validate
})(SignInForm);

SignInForm = connect(
  state => ({
    initialValues: state.userDetails.user
  }),
  { load: loadAccount }
)(SignInForm);

export default SignInForm;
