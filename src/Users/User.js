import '../CSS/styles.css';

function User({ firstName, lastName, email, state }) {
    return (
        <div className="User-Card">
            <div className="User-Content">
                <div className="User-Header">
                    <h3>{firstName} {lastName}</h3>
                    <p>{email}</p>
                </div>
                <h5 className="User-Footer">{state}</h5>
            </div>
        </div>
    )
}

export default User;