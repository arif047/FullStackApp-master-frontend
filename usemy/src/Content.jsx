import React, { useEffect, useState } from "react";

export const Content = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])
    return (
        <div className="content-form">
            <h2>Content of Database</h2>
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



