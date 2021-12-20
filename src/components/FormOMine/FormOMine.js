import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import './FormOMine.css'
import SectionHeader from "../SectionHeader/SectionHeader";

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
                <Form className={"form"} onSubmit={this.handleSubmit}>
                    <Form.Group className="row" >
                        <Form.Label className={"row-label"} htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control className={"row-input"} inputMode={'text'} id="full-name" name="name" type="text" value={this.state.name}
                                      onChange={this.handleChange}/>
                    </Form.Group>


                    <Form.Group className={"row"}>
                        <Form.Label className={"row-label"} htmlFor="email">You're Email</Form.Label>
                        <Form.Control className={"row-input"} id="email" name="email" type="email" value={this.state.email}
                                      onChange={this.handleChange}/>
                    </Form.Group>


                    <Form.Group className={"row"}>
                        <Form.Label className={"row-label"} htmlFor="message">Message</Form.Label>
                        <Form.Control className={"row-input"} id="message" name="message" as="textarea" rows="3" value={this.state.message}
                                      onChange={this.handleChange}/>
                    </Form.Group>


                    <div className={"row"}>
                        <div className={"row-label"}>

                        </div>
                        <div className={"row-input"}>
                            <Button  className="submit-btn" variant="primary"
                                     type="submit" disabled={this.state.disabled}>
                                Send an email
                            </Button>
                        </div>
                    </div>


                    {this.state.emailSent === true &&
                    <p style={{marginTop: 'auto', marginBottom: 'auto'}} className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false &&
                    <p style={{marginTop: 'auto', marginBottom: 'auto'}} className="d-inline err-msg">Email Not Sent</p>}
                </Form>
            </div>

        )
    }
}
