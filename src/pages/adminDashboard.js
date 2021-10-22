import React from 'react'
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";

export default function adminDashboard() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row d-flex justify-content-center">
                        <div className="admin-dashboard-bg">
                        <div className="col-sm-12 admin-dashboard-page">
                            <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                <span><small>MsDoge APY (%)</small></span>
                                <input type="text" placeholder="2" className="admin-dashboard-input" />
                            </div>

                            <button type="button" className="table-btn-dashborad active" data-bs-toggle="modal" data-bs-target="#amendPopup">Amend</button>
                        </div>
                        
                        <div className="col-sm-12 admin-dashboard-page">
                            <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                <span><small>Cryptoloria APY (%)</small></span>
                                <input type="text" placeholder="2" className="admin-dashboard-input" />
                            </div>

                            <button type="button" className="table-btn-dashborad">Amend</button>
                        </div>

                        <div className="col-sm-12 admin-dashboard-page">
                            <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                <span><small>MSDOGE Staking Eligibility (Days)</small></span>
                                <input type="text" placeholder="15" className="admin-dashboard-input" />
                            </div>

                            <button type="button" className="table-btn-dashborad">Amend</button>
                        </div>

                        <div className="col-sm-12 admin-dashboard-page">
                            <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                <span><small>LORIA Staking Eligibility (Days)</small></span>
                                <input type="text" placeholder="15" className="admin-dashboard-input" />
                            </div>

                            <button type="button" className="table-btn-dashborad">Amend</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}

         <div class="modal fade" id="amendPopup" tabindex="-1" aria-labelledby="amendPopup" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">MsDoge Staking Amendment</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row pl-4 pr-4">
                                 <div className="mt-3 col-sm-12 d-flex justify-content-between">
                                       <div className="p-2"><b>MsDoge APY% </b></div>
                                       <div className="p-2"><small>2</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                    <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Amend</button>
                                       <div className="claim-btn-failed color5 py-2 px-4 w-100 text-center">Cancel</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
        </React.Fragment>
    )
}
