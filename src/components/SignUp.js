import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
const initialData = {
  firstName: "",
  lastName: "",
  aadom: "",
  email: "",
  address: "",
  address2: "",
  state: "",
  city: "",
  zip: "",
  password: "",
  confirm_password: "",
};

function SignUp({ data: compData }) {
  const { heading_title, us_states = [] } = compData || {};

  const createAccount = (values) => {
    /* const {firstName,
            lastName, 
            email, 
            address, 
            state, 
            city, 
            zip, 
            password, 
            confirm_password}  = values;*/
    //here values can be destructures and send to server via api call.
  };
  return (
    <section className="sign-up-parent" aria-label="a sign up form to make an account on burst oral care">
      <section className="heading">{heading_title ?? "-"}</section>
      <section className="sign-up-content">
        <section className="circle-num">1</section>
        <h3 className="sign-up-title">Create your personal BAM account</h3>
      </section>
      <section className="sign-up-description">
        Let’s create your BAM account. If you already have a BURST account,
        &nbsp;<a href="/login">log in</a> &nbsp; to upgrade it to a BAM account.
      </section>

      <Formik
        initialValues={initialData}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .max(50, "First Name must be 50 characters or less.")
            .required("First Name is Required."),
          lastName: Yup.string()
            .max(50, "Last Name must be 50 characters or less.")
            .required("Last Name is Required."),
          aadom: Yup.string()
            .max(50, "AADOM member number must be 50 characters or less.")
            .required("AADOM member number is Required."),
          email: Yup.string()
            .email("Must be a valid email.")
            .max(255)
            .required("Email is required."),
          address: Yup.string().max(255).required("Address is Required."),
          state: Yup.string().max(255).required("State is Required."),
          city: Yup.string().max(255).required("City is Required."),
          zip: Yup.number()
            .typeError("zip must be a number")
            .min(5, "Please enter at least 5 characters.")
            .required("Zip Code is Required."),
          password: Yup.string()
            .min(8, "Please enter at least 8 characters.")
            .required("Password is required"),
          confirm_password: Yup.string()
            .min(8, "Please enter at least 8 characters.")
            .oneOf(
              [Yup.ref("password"), null],
              "Please enter the same password again."
            )
            .required("Confirm Password is required."),
        })}
        onSubmit={(values) => {
          createAccount(values);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item className="grid-item">
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="First Name*"
                      name="firstName"
                      required
                      value={values.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      helperText={touched.lastName && errors.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Last Name*"
                      name="lastName"
                      required
                      value={values.lastName}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} className="grid-item">
                <TextField
                  error={Boolean(touched.aadom && errors.aadom)}
                  fullWidth
                  helperText={touched.aadom && errors.aadom}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="AADOM member number*"
                  name="aadom"
                  required
                  value={values.aadom}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="grid-item">
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your email address*"
                  name="email"
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="grid-item">
                <TextField
                  error={Boolean(touched.address && errors.address)}
                  fullWidth
                  helperText={touched.address && errors.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your Address Line 1 *"
                  name="address"
                  required
                  value={values.address}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="grid-item">
                <TextField
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your Address Line 2"
                  name="address2"
                  required
                  value={values.address2}
                  variant="outlined"
                />
              </Grid>

              <Grid item className="grid-item">
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  {us_states?.length > 0 ? (
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        error={Boolean(touched.state && errors.state)}
                        helperText={touched.state && errors.state}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="State *"
                        name="state"
                        select
                        SelectProps={{
                          native: true,
                          IconComponent: ExpandMoreTwoToneIcon,
                        }}
                        value={values.state}
                        variant="outlined"
                      >
                        <option value="" disabled>
                          State*
                        </option>
                        {us_states.map((option, index) => (
                          <option
                            key={`${option.name}-${index}`}
                            value={option.name}
                          >
                            {option?.name ?? "-"}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  ) : null}
                  <Grid item xs={12} md={3}>
                    <TextField
                      error={Boolean(touched.city && errors.city)}
                      fullWidth
                      helperText={touched.city && errors.city}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="City *"
                      name="city"
                      required
                      value={values.city}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      error={Boolean(touched.zip && errors.zip)}
                      fullWidth
                      helperText={touched.zip && errors.zip}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Zip *"
                      name="zip"
                      required
                      inputProps={{ maxLength: 5 }}
                      value={values.zip}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} className="grid-item">
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password *"
                  name="password"
                  type="password"
                  required
                  value={values.password}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="grid-item">
                <TextField
                  error={Boolean(
                    touched.confirm_password && errors.confirm_password
                  )}
                  fullWidth
                  helperText={
                    touched.confirm_password && errors.confirm_password
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Confirm Password *"
                  name="confirm_password"
                  required
                  type="password"
                  value={values.confirm_password}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="grid-item">
                <Button
                  type="submit"
                  className="submit-btn"
                  style={{ marginTop: "1rem", width: "inherit" }}
                >
                  CREATE YOUR BAM ACCOUNT NOW
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <section className="sign-up-description">
        Already have an account? &nbsp;<a href="/login">Login</a>&nbsp;
      </section>
    </section>
  );
}

export default SignUp;
