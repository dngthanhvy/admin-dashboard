import './NewUser.css';

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUser__title">New User</h1>
            <form className="newUser__form">

                <div className="newUser__formItem">
                    <label>Username</label>
                    <input type="text" placeholder="john"/>
                </div>

                <div className="newUser__formItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith"/>
                </div>

                <div className="newUser__formItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com"/>
                </div>

                <div className="newUser__formItem">
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </div>

                <div className="newUser__formItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78"/>
                </div>

                <div className="newUser__formItem">
                    <label>Location</label>
                    <input type="text" placeholder="Iceland"/>
                </div>

                <button className="newUser__formSubmit">Create User</button>
            </form>
        </div>
    )
}
