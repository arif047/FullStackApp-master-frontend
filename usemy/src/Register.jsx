import React, { useEffect,useState } from "react";

export const Register = (props) => {
    const [email1, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [students, setStudents] = useState([]);
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email1);
    }
    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])
    return (
        <div className="auth-form-container">
            <h2>Sign In</h2>
            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="email">email</label>
                <input value={email1} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
           <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Don't have an account? Register here.</button>
            {students.map(student => (
                <div elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
                    Id:{student.id}<br />
                    Name:{student.name}<br />
                    Email:{student.email}

                </div>
            ))
            }
        </div>
    )
}



