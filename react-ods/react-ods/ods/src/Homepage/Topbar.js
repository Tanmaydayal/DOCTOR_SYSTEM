import React from 'react'
import { Helmet } from 'react-helmet'

export const Topbar = () => {
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
            <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                  
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-end">
                        <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                          
                            <div className="py-2">
                                <p className="m-0"><i className="align-item-center"></i>ONLINE DOCTOR SYSTEM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
