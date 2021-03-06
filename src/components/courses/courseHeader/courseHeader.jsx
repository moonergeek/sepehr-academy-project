import React from 'react';
import "./courseHeader.css"
import lineImage from "../../../assets/img/lines/header-line.png"
import SeeAllBtn from "./seeAllBtn";
import {Link} from "react-router-dom";

const CourseHeader = (props) => {
    return (
        <>
            <div className="course-header">
                <div className="row">
                    <div className="col-sm-12">
                <span className="header-title">
                    {props.coursesTitle}
                </span>
                        <div className="d-flex justify-content-end">
                            <form className="d-flex">
                                <Link to={"/courses"}>
                                    <SeeAllBtn coursesBtnTitle={props.coursesBtnTitle}/>
                                </Link>
                            </form>
                        </div>

                    </div>
                    <div className="row">
                        <img className="col-sm-2 line-image" src={lineImage} alt=""/>
                    </div>
                </div>
            </div>

        </>
);
};

export default CourseHeader;
