import React from 'react'

export default function Service() {
    return (
        <div className="container-fluid service-wraper">
            <div className="row">
              <div className="col d-flex justify-content-center">
                  <div className="service-title-wraper mt-5">
                     <h1 className="mb-3">Services</h1>
                      <div className="line mx-auto"></div>
                     <h6 className="text-center mt-4 mb-5">THINGS I LOVE DOING</h6>
                  </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <div className="service-col-wraper  m-2 border border-1 boder-info">
                       <div className="service-image"></div>
                       <h5>Development</h5>
                       <p>Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra.</p>
                    </div>
                </div>
                <div className="col">2</div>
                <div className="col">3</div>
                <div className="col">4</div>
                <div className="col">5</div>
                <div className="col">6</div>
            </div> 
        </div>
    )
}
