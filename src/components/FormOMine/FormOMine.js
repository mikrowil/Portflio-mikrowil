import React from 'react'
import { Form, Formik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import Axios from "axios";
import './FormOMine.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import * as yup from "yup";
import styled from "@emotion/styled";

const InnerContainer = styled.div((props)=>({
  maxWidth:420,
  width:'100%',
  alignSelf:"center",
}))

const yupValidators = yup.object().shape({
  name: yup.string().required("Name is required"),
  email : yup.string().required("Email is required"),
  message: yup.string().required("Message is required")
})

const initialValues = {
  name: "",
  email: "",
  message: "",
}

export default class formOMine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true
    });

    Axios.post('https://portfolio-backend-e.herokuapp.com/api/email', this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false
        });
      })

  }

  render() {
    return (
      <div className={"form-container"}>
        <SectionHeader title={"contact"}/>
        <InnerContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={yupValidators}
            className={"form"}
            onSubmit={this.handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            render={(
              {
                values,
                errors,
                handleChange
              }
            ) => {
              return (
                <Form style={{padding:'1rem'}}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name={"name"}
                        label={"Name"}
                        helperText={errors.name}
                        value={values.name}
                        error={errors.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={"Email"}
                        name={"email"}
                        value={values.email}
                        error={errors.email}
                        onChange={handleChange}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label={"Message"}
                        fullWidth
                        multiline={true}
                        name={"message"}
                        value={values.message}
                        error={errors.message}
                        onChange={handleChange}
                        helperText={errors.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type={"submit"}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )
            }}/>
        </InnerContainer>
      </div>

    )
  }
}
