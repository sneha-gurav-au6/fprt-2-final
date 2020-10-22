import React from "react";
import "./style/spinner.css";

export default function Spinner() {
    return (
        <div className="code">
            <div className="scene">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-md-12 py-3">
                            <div className="row justify-content-center">
                                <div className="clock">
                                    <div className="hand hour"></div>
                                    <div className="hand minute"> </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-3">
                            <div className="row justify-content-center"> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desc">
                {/* <h2>Ooops No data Found!</h2> */}
                {/* redirecting to home page */}
                <button
                // onClick={() => {
                //   props.history.push("/");
                // }}
                >
                    BACK TO HOME PAGE
                </button>
            </div>
        </div>
    );
}
