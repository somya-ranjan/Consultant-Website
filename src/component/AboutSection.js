import React from 'react'
import './style.css'
function AboutSection() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-between align-items-center about_section">
                <h1>About <span>Us</span></h1>
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti earum dolorum tempora cum, maxime recusandae odio magnam reiciendis illo.</p>
                    <p className="d-none d-md-block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores perferendis deleniti, laboriosam ipsam doloribus pariatur delectus corrupti placeat minima quam? Quasi pariatur ducimus porro voluptas nihil ut deserunt obcaecati perspiciatis.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore voluptatibus, ullam eius rerum doloribus esse tempore itaque corporis vitae nostrum dignissimos pariatur suscipit exercitationem iste dolores eum amet incidunt unde dolor obcaecati aut minus provident cupiditate. Voluptas vel maxime nisi autem dolore esse ipsam qui. Molestiae rerum exercitationem quisquam dicta.</p>
                    <a href="">read more</a>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 d-none d-md-block">
                    <img src="./media/about.png" alt="about img" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}
export default AboutSection
