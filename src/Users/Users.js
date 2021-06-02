import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";
import '../CSS/styles.css';

function Users() {
    
    // state to hold list of users. 
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsersList() {
            let data = await axios.get('http://localhost:3001/users');
            debugger;
            setUsers(data.data);
        }
        getUsersList();
    }, [])

    return (
        <div className="Cards-Container">
            {users.map(u => <User firstName={u.firstName} lastName={u.lastName} email={u.email} state={u.state}/>)}
        </div>
    )
}

export default Users;