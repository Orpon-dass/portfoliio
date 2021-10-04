import React from 'react'

export default function ServiceSubcom({description,icon,title}) {
    return (
        <div className="col">
            <div className="service-col-wraper  ms-1 mt-1 mb-5 me-1 ms-md-2 mt-md-2 mb-md-5 me-md-2 pb-5 ">
            <div className="service-image mt-4 ms-3">
                <i class={icon}></i>
            </div>
            <h5 className="mt-4 ms-3" >{title}</h5>
            <p className="ms-3 mt-4 me-2 lh-base fs-6">{description}</p>
            </div>
        </div>
    )
}
