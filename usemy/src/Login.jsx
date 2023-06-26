import React, { useState } from "react";
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSalt(10);
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('Aridur Rahman');
    const [departmentname, setDepartmentname] = useState('');
    const [phone, setPhone] = useState('');
    const [advisor_id, setAdvisor_name] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault();
        const student = {departmentname, password, email, name, phone, advisor_id}
        console.log(student);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)

        }).then(() => {
            console.log("New Student added")
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="departmentname">Department Name</label>
                <input value={departmentname} name="departmentname" onChange={(e) => setDepartmentname(e.target.value)} id="departmentname" placeholder="Department Name" />

                <label htmlFor="phone">Phone Number</label>
                <input value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Phone Number" />

                <label htmlFor="advisor_name">Advisor Name</label>
                <input value={advisor_id} name="advisor_name" onChange={(e) => setAdvisor_name(e.target.value)} id="advisor_name" placeholder="Advisor Name" />

                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already have an account? Login here.</button> 
        </div>
    )
}