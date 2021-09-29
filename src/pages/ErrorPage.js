import React from 'react'
import { NavLink } from 'react-router-dom'
import '../component/style.css'
function ErrorPage() {
    return (
        <div className="container-fluid">
           <div className="row justify-content-center error_page_section">
               <div className="col-12">
                   <img src="./media/404.png" alt="" className="img-fluid"/>
               </div>
               
               <div className="col-12">
                   <NavLink to="/">back to home</NavLink>
               </div>
           </div>
        </div>
    )
}

export default ErrorPage
