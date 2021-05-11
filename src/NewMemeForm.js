import React, { useState } from 'react';
import {
    Button,
    Form, FormGroup, Label, Input, Container, Row, Col
  } from "reactstrap";
// import './Companies.css';



const NewMemeForm = ({newMeme}) => {

    const initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(initialState);

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formdata => ({
        ...formdata,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    const {topText, meme, bottomText} = formData;
    newMeme(topText, meme, bottomText);
    setFormData(initialState);
}

return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <Form method="get" onSubmit={handleSubmit} className="mt-5">
        <h2>Enter a new meme</h2>
            <FormGroup>
            <Label htmlFor="topText" className="float-left">Top text</Label>
            <Input type="text" name="topText" id="topText" value={formData.topText} onChange={handleChange} placeholder="Enter text..." />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="meme" className="float-left">Image</Label>
            <Input type="text" name="meme" id="meme" value={formData.meme} onChange={handleChange} placeholder="Enter image..." />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="bottomText" className="float-left">First name</Label>
            <Input type="text" name="bottomText" id="bottomText" value={formData.bottomText} onChange={handleChange} placeholder="Enter text..." />
            </FormGroup>
            <Button color="primary" size="sm" className="float-right">Submit</Button>
        </Form>
       
        </div>
    )
  
};


export default NewMemeForm;