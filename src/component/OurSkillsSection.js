import React from 'react'

function OurSkillsSection() {
    return (
        <div className="container">
            <div className="our_skill_section">
            <h1>our <span>skills</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a quasi nobis. <br />Nam ipsa earum quis in quidem quasi laborum.</p>
                <div className="row justify-content-center">
                    <div class="col-md-3 our_skill_section_content">
                        <div class="progress">
                            <span class="progress_left">
                                <span class="progress_bar"></span>
                            </span>
                            <span class="progress_right">
                                <span class="progress_bar"></span>
                            </span>
                            <div class="progress_value">45%</div>
                        </div>
                        <h6>coding</h6>
                    </div>
                    <div class="col-md-3 our_skill_section_content">
                        <div class="progress">
                            <span class="progress_left">
                                <span class="progress_bar"></span>
                            </span>
                            <span class="progress_right">
                                <span class="progress_bar"></span>
                            </span>
                            <div class="progress_value">65%</div>
                        </div>
                        <h6>seo & ads</h6>
                    </div>
                    <div class="col-md-3 our_skill_section_content">
                        <div class="progress">
                            <span class="progress_left">
                                <span class="progress_bar"></span>
                            </span>
                            <span class="progress_right">
                                <span class="progress_bar"></span>
                            </span>
                            <div class="progress_value">80%</div>
                        </div>
                        <h6>branding</h6>
                    </div>
                    <div class="col-md-3 our_skill_section_content">
                        <div class="progress">
                            <span class="progress_left">
                                <span class="progress_bar"></span>
                            </span>
                            <span class="progress_right">
                                <span class="progress_bar"></span>
                            </span>
                            <div class="progress_value">90%</div>
                        </div>
                        <h6>web design</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSkillsSection
