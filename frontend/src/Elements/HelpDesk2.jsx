import React from "react";


const HelpDesk = () => {
  return (
<div>
  <div className="container">
    <div className="row">
      <div className="col-md-5"><h6 className="small " style={{color:"grey"}}>HELPDESK</h6>
      <div className="orange-line mb-2"></div>
      <h3><span><b>ALWAYS </b></span><span style={{color:"#8B0000"}}>HERE TO SUPPORT YOU</span></h3>
      </div>
      <div className="row">
<div className="col-md-6">
  <img src="https://img.freepik.com/premium-vector/customer-support-concept-online-global-technical-support-vector-illustration-flat_186332-1008.jpg" alt="" style={{height:"300px",width:"450px"}} />
</div>
<div className="col-md-6"><div style={{alignContent:"justify",backgroundColor:"darkorange",color:"white",height:"90px",width:"450px"}}>
  <h6 className="small my-2 py-3 px-3">The help desk user assistance to navigate and understand the aspects of the portal.This also provide a simple interface for maintenance of student information and issues faced</h6>
</div>
        <div style={{width:"450px"}} className="border my-4 py-3"><i className="fa-solid fa-phone fa-beat fa-lg px-2" style={{color: "#ff9d2e"}}></i><b>+91 7080102007</b></div>
        <div style={{width:"450px"}} className="border my-4 py-3"><i className="fa-solid fa-envelope fa-shake fa-lg px-2" style={{color: "#ff9d2e"}}></i><b>nougyanhelp@gmail.com</b></div>
        </div>
        
      </div>

    </div>
  </div>
</div>
  );
};

export default HelpDesk;
