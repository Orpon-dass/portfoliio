import React from 'react'

export default function HappyClient({title,total,icon}) {
    return (
            <div className="col-lg-6 d-flex justify-content-center mb-5 mb-lg-2 pb-3">
                <div className="client-wraper">
                    <div className="client-icon-wraper ms-2 d-flex justify-content-start align-items-center">
                        <div className="client-icon d-flex justify-content-center align-items-center">
                        <div> <i class={icon}></i></div>
                        </div>
                        <div className="number ms-3">
                        {total}<sup>+</sup>
                        </div>
                    </div>
                    <div className=" ms-2 mt-2 client-title">
                    <h4>{title}</h4>
                    </div>
                </div>
            </div>
    )
}
