import React from "react";
import "./detailMaghale.css"
import Loading from "../common/loading/loading";



const DetailMaghale = (props) => {

    return (
        <>
            <div className="card mb-3 main">
                {props.loading ?                 <img src={props.newsById.image} className="card-img-top" alt="..."/> :
                <Loading />
                }

                <div className="card-body">
                    <h5 className="card-title">{props.newsById.title}</h5>
                    <p className="card-text">{props.newsById.text} </p>
                    <div className={"row"}>
                        <p className="card-text"><small className="text-muted">نوشته شده در تاریخ 1400/07/19</small></p>
                        <div className={"d-flex justify-content-end"}>
                            <span className="badge bg-primary ">{props.newsById.category}</span>
                        </div>
                    </div>

                </div>
            </div>
        </>


    );

}

export default DetailMaghale;
