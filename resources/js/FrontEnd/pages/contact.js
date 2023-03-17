import React, { Component } from 'react';
import Api from '../services/api';
import Swal from 'sweetalert2';
import { red } from '@mui/material/colors';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.apiCtrl = new Api;

        this.state = {
            name: null,
            email: null,
            errors: {},
            validation: {
                name: { required: true, type: 'alpha' },
                email: { required: true, min: 6, type: 'email' },
                phone: { required: true, min: 10, max: 10, type: 'Numeric' },

            },
        }
        this.props.loader(false);
    }

    render() {


        const validation = (fieldName, fieldValue) => {

            let error = {}
            let isValid = true;
            let isMax = 1000;
            if (typeof this.state.validation[fieldName] !== "undefined") {
                Object.entries(this.state.validation[fieldName]).map(([key, value]) => {

                    let temp = fieldName.replace(/_/g, " ");
                    var name = temp
                        .toLowerCase()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                    if (key === 'required') {
                        if ((fieldValue.length < 0) || (fieldValue === '') || (fieldValue === null)) {
                            error[fieldName] = `${name} Field is required`
                            isValid = false;
                        }
                    } else if (key === 'min') {
                        if (fieldValue.length < value) {
                            error[fieldName] = `${name} must be more than ${value} characters`
                            isValid = false;
                        }
                    } else if (key === 'max') {
                        if (fieldValue.length > value) {
                            error[fieldName] = `${name} must be less than ${value} characters`
                            isMax = value;
                            isValid = false;
                        }
                    } else if (key === 'type') {
                        if (value === 'alpha') {
                            if (!fieldValue.match(/^[A-Za-z\s]*$/)) {
                                error[fieldName] = `${name} must be String characters`
                                isValid = false;
                            }
                        } else if (value === 'AlphaNumeric') {
                            if (!fieldValue.match(/^[A-Za-z0-9,-.\s]*$/)) {
                                error[fieldName] = `${name} must be String Alpha Numeric`
                                isValid = false;
                            }
                        } else if (value === 'Numeric') {
                            if (!fieldValue.match(/^[0-9]*$/)) {
                                error[fieldName] = `${name} must be String Numeric`
                                isValid = false;
                            }
                        } else if (value === 'email') {
                            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                            if (!fieldValue.match(reg)) {
                                error[fieldName] = `${name} must be in Email format`
                                isValid = false;
                            }
                        }

                    }
                    if (isValid == true) {

                        error[fieldName] = '';
                    }
                })
                this.setState(old => ({ ...old, errors: { ...old.errors, ...error } }))
            }
            if (isMax >= fieldValue.length) {
                this.setState((old) => ({ ...old, [fieldName]: fieldValue }))

            }
        }
        const handleChange = (e) => {

            validation(e.target.name, e.target.value)

        }

        const handleSubmit = (e) => {
            e.preventDefault();

            // Object.entries(this.state).map(([index, value])=>{
            //     if(value == null || (typeof value === 'undefined')){
            //         errors = {...errors,  [index]:'error'}
            //     }
            // })
            // this.setState({errors:errors})
            // console.log(this.state)
            // console.log(errors);
            let errors = {};
            let isValid = this.state.isValid;
            Object.entries(this.state.validation).map(([key, value]) => {


                if ((typeof this.state[key] === 'undefined') || (this.state[key] === null)) {
                    let temp = key.replace(/_/g, " ");
                    var name = temp
                        .toLowerCase()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                    if (value.required === true) {
                        errors[key] = `${name} Field is Required`;
                        isValid = false;
                    }
                } else {
                    errors[key] = '';
                    isValid = true;
                }
                this.setState(old => ({
                    ...old,
                    errors: errors
                }))
            })

            var count = 0;
            Object.entries(errors).map(([key, value]) => {
                if (value !== '') {
                    count += 1;
                }
            })

            if (count > 0) {
                return false;
            }
            var data = {
                enquiry_type: 'contact-us',
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                remark: this.state.description
            }
            this.apiCtrl.callAxios('/enquiry/create-update', data).then((res) => {
                if (res.success == true) {
                    Swal.fire({
                        title: 'Contact Us',
                        text: 'Request Submitted',
                        icon: 'success',
                        showConfirmButton: false
                    })
                    var data = {
                        name: '',
                        phone: '',
                        email: '',
                        remark: '',
                    }
                    setTimeout(() => { window.location.reload() }, 1500);
                } else {
                    Swal.fire({
                        title: 'Contact Us',
                        text: res.message,
                        icon: 'error',
                        showConfirmButton: false
                    })
                }
            })


        }

        return (
            <section id="contact">
                <div class="contact-box">
                    <div class="contact-links">
                        <h2>CONTACT</h2>
                        {/* <div class="links">
                            <div class="link">
                                <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                            </div>
                        </div> */}
                        <ul className='contactDetails'>
                            <li>
                                <span class="fa fa-map-marker"></span>
                                <div className='details'>
                                    <strong>Address: </strong>
                                    198 West 21th Street, Suite 721 New York NY 10016
                                </div>
                            </li>
                            <li>
                                <span class="fa fa-phone"></span>
                                <div className='details'>
                                    <strong>Phone: </strong>
                                    + 1235 2355 98
                                </div>
                            </li>
                            <li>
                                <span class="fa fa-paper-plane"></span>
                                <div className='details'>
                                    <strong>Email: </strong>
                                    info@yoursite.com
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-form-wrapper">
                        <form onSubmit={handleSubmit}  >
                            <div class="form-item">
                                <input type="text" name="name" onChange={(e) => { handleChange(e) }} />
                                <label>Name: <span style={{ color: 'red', }} >{this.state.errors.name}</span></label>
                            </div>
                            <div class="form-item">
                                <input type="number" name="phone" onChange={(e) => { handleChange(e) }} />
                                <label>Phone: <span style={{ color: 'red', }} >{this.state.errors.phone}</span></label>
                            </div>
                            <div class="form-item">
                                <input type="email" name="email" onChange={(e) => { handleChange(e) }} />
                                <label>Email: <span style={{ color: 'red', }} >{this.state.errors.email}</span></label>
                            </div>
                            <div class="form-item">
                                <textarea class="" name="description" onChange={(e) => { handleChange(e) }} ></textarea>
                                <label>Message:</label>
                            </div>
                            <button class="submit-btn" type={'submit'}  >Send</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
};


export default Contact;