import { Avatar, TextField } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import { Link } from 'react-router-dom';

import './User.css';

export default function User() {
    return (
        <div className="user">
            <div className="user__titleContainer">
                <h1 className="user__title">Edit User</h1>
                <Link to="/newUser">
                    <button className="user__createBtn">Create</button>
                </Link>
            </div>

            <div className="user__container">
                <div className="user__show">

                    <div className="user__showTop">
                        <div className="user__showAvatar">
                            <Avatar />
                        </div>
                        <div className="user__showTitle">
                            <span className="user__showTitleName">Anna Becker</span>
                            <span className="user__showTitleJob">Software Engineer</span>
                        </div>
                    </div>

                    <div className="user__showBottom">
                        <span className="user__showBottomTitle">Account Details</span>
                        <div className="user__showInfo">
                            <AccountCircleOutlinedIcon className="user__showInfoIcon" />
                            <span className="user__showInfoTitle">annabeck99</span>
                        </div>
                        <div className="user__showInfo">
                            <CakeOutlinedIcon className="user__showInfoIcon" />
                            <span className="user__showInfoTitle">10.12.1999</span>
                        </div>

                        <span className="user__showBottomTitle">Contact Details</span>
                        <div className="user__showInfo">
                            <PhoneAndroidOutlinedIcon className="user__showInfoIcon" />
                            <span className="user__showInfoTitle">+1 123 456 78</span>
                        </div>
                        <div className="user__showInfo">
                            <EmailOutlinedIcon className="user__showInfoIcon" />
                            <span className="user__showInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="user__showInfo">
                            <RoomOutlinedIcon className="user__showInfoIcon" />
                            <span className="user__showInfoTitle">New York | USA</span>
                        </div>
                    </div>

                </div>
                <div className="user__update">
                    <span className="user__updateTitle">Edit</span>

                    <form className="user__updateForm">
                        <div className="user__updateFormLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="user__updateInput" placeholder="annabeck99"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" className="user__updateInput" placeholder="Anna Becker"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" className="user__updateInput" placeholder="annabeck99@gmail.com"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" className="user__updateInput" placeholder="+1 123 456 78"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Location</label>
                                <input type="text" className="user__updateInput" placeholder="New York | USA"/>
                            </div>
                        </div>
                        <div className="user__updateFormRight">
                            <div className="user__updateFormUpload">
                                <Avatar className="user__updateImage"/>
                                <input type="file" />
                            </div>
                            <button className="user__updateButton">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
