import React from "react";
import { Button } from "react-bootstrap";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Landing from "../landing/landing";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import CreateIcon from '@mui/icons-material/Create';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import './home.css'


const ariaLabel = { 'aria-label': 'location' };

const Home = () => {


    return (
        <div className="home">
            <Form.Select aria-label="Default select example">
                <option>Filter: All</option>
                <option value="Article">Article</option>
                <option value="Event">Event</option>
                <option value="Article">Education</option>
                <option value="Event">Job</option>
            </Form.Select>
            <Landing />
            <div className="containers mx-auto">
                <div className="menu d-flex">
                    <div className="postcount">Posts(9)</div>
                    <div className="write"><ModeEditOutlineOutlinedIcon/></div>
                    <ul className="pageMenu d-flex ">
                        <li>All Posts</li>
                        <li>Article</li>
                        <li>Event</li>
                        <li>Education</li>
                        <li>Job</li>
                    </ul>
                    <div className="moreMenu">
                        <div className="arrow"><ArrowBackIcon style={{fontSize: "40px"}} /></div>
                        <Button className="post" variant="light">Write a Post</Button>
                        <Button className="group"><GroupAddIcon className="mx-1" /> Join Group</Button>
                    </div>
                </div>
                <div className="postsection d-flex my-4">
                    <div className="cards float-left">
                        <div className="f-card">
                            <div className="reference">
                                <img className="reference-thumb" src="https://source.unsplash.com/random/500×280" />
                            </div>

                            <div className="card-items">
                                <div className="content">
                                    <h6 className="my-2">✍️ Article</h6>
                                    <h4>What if famous brands has regular fonts? Meet RegulaBrands!</h4>
                                    <p>Height is optional, if no height is specified the image will be a square...</p>
                                </div>

                                <div className="header">
                                    <div className="options"><i className="fa fa-chevron-down"></i></div>
                                    <div className="co-logo" style={{ textTransform: 'capitalize', backgroundColor: "black", color: 'white', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: '50%', fontWeight: '600' }}>H</div>

                                    <div className="co-name d-flex">
                                        <div style={{ paddingTop: "8px" }}>Sarah West</div>
                                        <div style={{ paddingTop: "7px", flex: "1" }}>
                                            <div style={{ float: 'right', fontSize: "14px" }}>
                                                <RemoveRedEyeIcon />
                                                <span className="mx-3">1.4k views</span>
                                                <span style={{ backgroundColor: "#EDEEF0", padding: "8px" }}>< ShareIcon /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="f-card">
                            <div className="reference">
                                <img className="reference-thumb" src="https://source.unsplash.com/random/500×280" />
                            </div>

                            <div className="card-items">
                                <div className="content">
                                    <h6 className="my-2">✍️ Article</h6>
                                    <h4>What if famous brands has regular fonts? Meet RegulaBrands!</h4>
                                    <p>Height is optional, if no height is specified the image will be a square...</p>
                                </div>

                                <div className="header">
                                    <div className="options"><i className="fa fa-chevron-down"></i></div>
                                    <div className="co-logo" style={{ textTransform: 'capitalize', backgroundColor: "black", color: 'white', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: '50%', fontWeight: '600' }}>H</div>

                                    <div className="co-name d-flex">
                                        <div style={{ paddingTop: "8px" }}>Sarah West</div>
                                        <div style={{ paddingTop: "7px", flex: "1" }}>
                                            <div style={{ float: 'right', fontSize: "14px" }}>
                                                <RemoveRedEyeIcon />
                                                <span className="mx-3">1.4k views</span>
                                                <span style={{ backgroundColor: "#EDEEF0", padding: "8px" }}>< ShareIcon /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="f-card">
                            <div className="reference">
                                <img className="reference-thumb" src="https://source.unsplash.com/random/500×280" />
                            </div>

                            <div className="card-items">
                                <div className="content">
                                    <h6 className="my-2">✍️ Article</h6>
                                    <h4>What if famous brands has regular fonts? Meet RegulaBrands!</h4>
                                    <p>Height is optional, if no height is specified the image will be a square...</p>
                                </div>

                                <div className="header">
                                    <div className="options"><i className="fa fa-chevron-down"></i></div>
                                    <div className="co-logo" style={{ textTransform: 'capitalize', backgroundColor: "black", color: 'white', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: '50%', fontWeight: '600' }}>H</div>

                                    <div className="co-name d-flex">
                                        <div style={{ paddingTop: "8px" }}>Sarah West</div>
                                        <div style={{ paddingTop: "7px", flex: "1" }}>
                                            <div style={{ float: 'right', fontSize: "14px" }}>
                                                <RemoveRedEyeIcon />
                                                <span className="mx-3">1.4k views</span>
                                                <span style={{ backgroundColor: "#EDEEF0", padding: "8px" }}>< ShareIcon /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="f-card">
                            <div className="reference">
                                <img className="reference-thumb" src="https://source.unsplash.com/random/500×280" />
                            </div>

                            <div className="card-items">
                                <div className="content">
                                    <h6 className="my-2">✍️ Article</h6>
                                    <h4>What if famous brands has regular fonts? Meet RegulaBrands!</h4>
                                    <p>Height is optional, if no height is specified the image will be a square...</p>
                                </div>

                                <div className="header">
                                    <div className="options"><i className="fa fa-chevron-down"></i></div>
                                    <div className="co-logo" style={{ textTransform: 'capitalize', backgroundColor: "black", color: 'white', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: '50%', fontWeight: '600' }}>H</div>

                                    <div className="co-name d-flex">
                                        <div style={{ paddingTop: "8px" }}>Sarah West</div>
                                        <div style={{ paddingTop: "7px", flex: "1" }}>
                                            <div style={{ float: 'right', fontSize: "14px" }}>
                                                <RemoveRedEyeIcon />
                                                <span className="mx-3">1.4k views</span>
                                                <span style={{ backgroundColor: "#EDEEF0", padding: "8px" }}>< ShareIcon /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="f-card">
                            <div className="reference">
                                <img className="reference-thumb" src="https://source.unsplash.com/random/500×280" />
                            </div>

                            <div className="card-items">
                                <div className="content">
                                    <h6 className="my-2">✍️ Article</h6>
                                    <h4>What if famous brands has regular fonts? Meet RegulaBrands!</h4>
                                    <p>Height is optional, if no height is specified the image will be a square...</p>
                                </div>

                                <div className="header">
                                    <div className="options"><i className="fa fa-chevron-down"></i></div>
                                    <div className="co-logo" style={{ textTransform: 'capitalize', backgroundColor: "black", color: 'white', display: 'flex', justifyContent: 'center', alignItems: "center", borderRadius: '50%', fontWeight: '600' }}>H</div>

                                    <div className="co-name d-flex">
                                        <div style={{ paddingTop: "8px" }}>Sarah West</div>
                                        <div style={{ paddingTop: "7px", flex: "1" }}>
                                            <div style={{ float: 'right', fontSize: "14px" }}>
                                                <RemoveRedEyeIcon />
                                                <span className="mx-3">1.4k views</span>
                                                <span style={{ backgroundColor: "#EDEEF0", padding: "8px" }}>< ShareIcon /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <LocationOnIcon />
                            <Input placeholder="Enter your location" inputProps={ariaLabel} />
                            <CreateIcon />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;