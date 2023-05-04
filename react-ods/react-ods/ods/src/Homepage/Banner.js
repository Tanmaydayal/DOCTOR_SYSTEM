import React from 'react'
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet'

export const Banner = () => {
    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />


                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />


                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="lib/animate/animate.min.css" rel="stylesheet" />
                <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
                <link href="lib/twentytwenty/twentytwenty.css" rel="stylesheet" />


                <link href="css/bootstrap.min.css" rel="stylesheet" />


                <link href="css/style.css" rel="stylesheet" />

            </Helmet>
            <div className="container-fluid banner mb-5">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-primary d-flex flex-column p-5">
                                <h3 className="text-white mb-3">ONLINE DOCTOR SYSTEM</h3>
                                
                               
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-dark d-flex flex-column p-5">
                                <h3 className="text-white mb-3">Search A Doctor</h3>
                               
                               
                                <a className="btn btn-light" href="/">Search Doctor</a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-secondary d-flex flex-column p-5">
                                <h3 className="text-white mb-3">Make Appointment</h3>
                                
                                <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">
                                    Appointment
                                </Link>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
