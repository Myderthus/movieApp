import { useState } from "react";

export default function Preloader() {
    return (
        <div >
            <div id="preloader">
                <img className="logo" src="images/logo1.png" alt="" width="119" height="58" />
                <div id="status">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}