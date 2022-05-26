import React from 'react';
import soyeb from '../images/soyeb.jpg'
import soyeb2 from '../images/soyeb2.jpg'

const Portfolio = () => {
    return (
        <div className='container mx-auto border-l-orange-100 '>





            <div>



                <div class="main container mx-auto">

                    <section class="home section" id="home">
                        <div class="home_container container grid">
                            <div class="home_content grid">
                                <div class="home_social">
                                    <a href="#" target="_blank" class="home_social-icon">
                                        <i class="uil uil-github-alt"></i>
                                    </a>
                                    <a href="#" target="_blank" class="home_social-icon">
                                        <i class="uil uil-linkedin-alt"></i>
                                    </a>
                                    <a href="#" target="_blank" class="home_social-icon">
                                        <i class="uil uil-twitter-alt"></i>
                                    </a>
                                </div>

                                <div class="home_img">
                                    <svg class="home_blob" >
                                        <mask id="mask0" mask-type="alpha">
                                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                        </mask>
                                        <g mask="url(#mask0)">
                                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                            <image class="home_blob-img"
                                                href={soyeb2} />
                                        </g>
                                    </svg>
                                </div>
                                <div class="home_data">
                                    <h1 class="home_title">Hi, I am Soyeb Mohammad</h1>
                                    <h3 class="home_subtitle">Developer</h3>
                                    <p class="home_description">High level experience in web design and development knowledge,
                                        producing quality work.</p>
                                    <a href="#contact" class="button button--flex">
                                        Hire Me <i class="uil uil-message button_icon"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="home_scroll">
                                <a href="#about" class="home_scroll-button button--flex">
                                    <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                                    <span class="home_scroll-name">
                                        Scroll down
                                    </span>
                                    <i class="uil uil-arrow-down home_scroll-arrow"></i>
                                </a>
                            </div>
                        </div>

                    </section>


                    <section class="about section" id="about">
                        <h2 class="section_title">About Me</h2>
                        <span class="section_subtitle">My Introduction</span>
                        <div class="about_container container grid">
                            <img src={soyeb} alt="yo" class="about_img" />
                            <div class="about_data">
                                <p class="about_description">As a web application developer with considerable training and enterprise experience able to build Web site design, layout and all stages of design, coding and testing of Web applications in any formation, planning, implementation of online business ventures.</p>
                                <div class="about_info">
                                    <div>
                                        <span class="about_info-title">+4</span>
                                        <span class="about_info-name">Years <br /> experience</span>
                                    </div>
                                    <div>
                                        <span class="about_info-title">+41</span>
                                        <span class="about_info-name">Completed <br /> project</span>
                                    </div>
                                    <div>
                                        <span class="about_info-title">+6</span>
                                        <span class="about_info-name">Companies <br /> worked</span>
                                    </div>

                                </div>

                                <div class="about_buttons">
                                    <a download="" href="https://drive.google.com/file/d/1n1hPXuvKDydjnbxicf4OvAcVNJ6YEeTJ/view"
                                        class="button button--flex">
                                        Expplore Resume<i class="uil uil-download-alt button_icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </section>


                    <section class="skills section" id="skills">
                        <h2 class="section_title">Skills</h2>
                        <span class="section_subtitle">My Technical Level</span>
                        <div class="skills_container container grid">
                            <div>

                                <div className="skills_content skills_close ">
                                    <div class="skills_header">
                                        <i class="uil uil-brackets-curly skills_icon"></i>
                                        <div>
                                            <h1 class="skills_title">Front End Development</h1>
                                            <span class="skills_subtitle">
                                                HTML, CSS, JAVASCRIPT, REACT JS
                                            </span>
                                        </div>
                                        <i class="uil uil-angle-down skills_arrow"></i>
                                    </div>
                                    <div class="skills_list grid">
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">HTML</h3>
                                                <span class="skills_number">95%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_html"></span>
                                            </div>
                                        </div>
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">CSS</h3>
                                                <span class="skills_number">90%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_css"></span>
                                            </div>
                                        </div>
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">JavaScript</h3>
                                                <span class="skills_number">85%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_js"></span>
                                            </div>
                                        </div>
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">React</h3>
                                                <span class="skills_number">90%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_react"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="skills_content skills_close">
                                    <div class="skills_header">
                                        <i class="uil uil-server-connection skills_icon"></i>
                                        <div>
                                            <h1 class="skills_title">Backend End Development</h1>
                                            <span class="skills_subtitle">
                                                NODE JS, EXPRESS JS, MONGODB
                                            </span>
                                        </div>
                                        <i class="uil uil-angle-down skills_arrow"></i>
                                    </div>
                                    <div class="skills_list grid">
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">PHP</h3>
                                                <span class="skills_number">85%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_php"></span>
                                            </div>
                                        </div>
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">Node JS</h3>
                                                <span class="skills_number">70%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_node"></span>
                                            </div>
                                        </div>
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">Python</h3>
                                                <span class="skills_number">80%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_python"></span>
                                            </div>
                                        </div>
                                        <div class="skills_data">
                                            <div class="skills_titles">
                                                <h3 class="skills_name">Firebase</h3>
                                                <span class="skills_number">80%</span>
                                            </div>
                                            <div class="skills_bar">
                                                <span class="skills_percentage skills_firebase"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>

                                <div class="skills_content skills_close">
                                    <div class="skills_header">
                                        <i class="uil uil-illustration skills_icon"  ></i>
                                        <div>
                                            <h1 class=" skills_title ">Design</h1>
                                            <span class=" skills_subtitle ">
                                                More than 5 years of experience.
                                            </span>
                                        </div>
                                        <i class=" uil uil-angle-down skills_arrow "></i>
                                    </div>
                                    <div class=" skills_list grid ">
                                        <div class=" skills_data ">
                                            <div class=" skills_titles ">
                                                <h3 class=" skills_names ">Photoshop</h3>
                                                <span class=" skills_number ">95%</span>
                                            </div>
                                            <div class=" skills_bar ">
                                                <span class=" skills_percentage skills_photoshop "></span>
                                            </div>
                                        </div>
                                        <div class=" skills_data ">
                                            <div class=" skills_titles ">
                                                <h3 class=" skills_name ">Illustrator</h3>
                                                <span class=" skills_number ">90%</span>
                                            </div>
                                            <div class=" skills_bar ">
                                                <span class=" skills_percentage skills_illustrator "></span>
                                            </div>
                                        </div>
                                        <div class=" skills_data ">
                                            <div class=" skills_titles ">
                                                <h3 class=" skills_name ">Figma</h3>
                                                <span class=" skills_number ">95%</span>
                                            </div>
                                            <div class=" skills_bar ">
                                                <span class=" skills_percentage skills_figma "></span>
                                            </div>
                                        </div>
                                        <div class=" skills_data ">
                                            <div class=" skills_titles ">
                                                <h3 class=" skills_name ">Sketch</h3>
                                                <span class=" skills_number ">80%</span>
                                            </div>
                                            <div class=" skills_bar ">
                                                <span class=" skills_percentage skills_sketch "></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>


                    <section class="qualification ">
                        <h2 class="section_title ">Qualification</h2>
                        <span class="section_subtitle ">My personal journey</span>

                        <div class="qualification_container container ">
                            <div class="qualification_tabs ">
                                <div class="qualification_button button--flex qualification_active"
                                    data-target='#education'>
                                    <i class="uil uil-graduation-cap qualification_icon "></i>
                                    Education
                                </div>
                                <div class="qualification_button button--flex" data-target='#work'>
                                    <i class="uil uil-suitcase qualification_icon "></i>
                                    Work
                                </div>
                            </div>
                            <div class="qualification_sections ">

                                <div class="qualification_content qualification_active" data-content
                                    id='education'>

                                    <div class="qualification_data ">
                                        <div>
                                            <h3 class="qualification_title ">Computer Engineering</h3>
                                            <span class="qualification_subtitle ">Daffodil International University</span>
                                            <div class="qualification_calendar ">
                                                <i class="uil uil-schedule "></i>
                                                2017 - 2021
                                            </div>
                                        </div>
                                        <div>
                                            <span class="qualification_rounder "></span>
                                            <span class="qualification_line "></span>
                                        </div>
                                    </div>

                                    <div class="qualification_data ">
                                        <div></div>
                                        <div>
                                            <span class="qualification_rounder "></span>
                                            <span class="qualification_line "></span>
                                        </div>
                                        <div>
                                            <h3 class="qualification_title ">Web Design</h3>
                                            <span class="qualification_subtitle ">Programming Hero Community</span>
                                            <div class="qualification_calendar ">
                                                <i class="uil uil-schedule "></i>
                                                2022 - 2023
                                            </div>
                                        </div>
                                    </div>

                                    <div class="qualification_data ">
                                        <div>
                                            <h3 class="qualification_title ">Web Development</h3>
                                            <span class="qualification_subtitle ">Programming Hero Community</span>
                                            <div class="qualification_calendar ">
                                                <i class="uil uil-schedule "></i>
                                                2022 - 2023
                                            </div>
                                        </div>
                                        <div>
                                            <span class="qualification_rounder "></span>
                                            <span class="qualification_line "></span>
                                        </div>
                                    </div>

                                    <div class="qualification_data ">
                                        <div></div>
                                        <div>
                                            <span class="qualification_rounder "></span>
                                            <span class="qualification_line "></span>
                                        </div>

                                    </div>
                                </div>

                                <div class="qualification_content" data-content id='work'>

                                    <div class="qualification_data ">
                                        <div>
                                            <h3 class="qualification_title ">Front-End Developer</h3>
                                            <span class="qualification_subtitle ">Programming Hero Community</span>
                                            <div class="qualification_calendar ">
                                                <i class="uil uil-schedule "></i>
                                                2022 - 2023
                                            </div>
                                        </div>
                                        <div>
                                            <span class="qualification_rounder "></span>
                                            <span class="qualification_line "></span>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>

                    </section>

                    <div class="portfolio section " id="portfolio">
                        <h2 class="section_title">Portfolio</h2>
                        <span class="section_subtitle">Most recent work</span>

                        <div class="">
                            <div class="swiper-wrapper">

                                <div class="">
                                    <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio1.jpg" alt=""
                                        class="portfolio_img" />

                                    <div class="portfolio_data">
                                        <h3 class="portfolio_title">Modern Web Design</h3>
                                        <p class="portfolio_description">
                                            Website adaptable to all devices, with ui components and animated interactions.
                                        </p>
                                        <a href="#" class="">
                                            View
                                            <i class=""></i>
                                        </a>
                                    </div>
                                </div>


                                <div class="">
                                    <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio2.jpg" alt=""
                                        class="portfolio_img" />

                                    <div class="portfolio_data">
                                        <h3 class="portfolio_title">Modern Web Design</h3>
                                        <p class="portfolio_description">
                                            Website adaptable to all devices, with ui components and animated interactions.
                                        </p>
                                        <a href="#" class="">
                                            View
                                            <i class="uil uil-eye button_icon"></i>
                                        </a>
                                    </div>
                                </div>


                                <div class="">
                                    <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio5.jpg" alt=""
                                        class="portfolio_img" />

                                    <div class="portfolio_data">
                                        <h3 class="portfolio_title">Modern Web Design</h3>
                                        <p class="portfolio_description">
                                            Website adaptable to all devices, with ui components and animated interactions.
                                        </p>
                                        <a href="#" class="">
                                            View
                                            <i class="uil uil-eye button_icon"></i>
                                        </a>
                                    </div>
                                </div>


                                <div class="">
                                    <img src="https://dev.dakidarts.com/wixa/assets/img/portfolio3.jpg" alt=""
                                        class="portfolio_img" />

                                    <div class="portfolio_data">
                                        <h3 class="portfolio_title">Modern Web Design</h3>
                                        <p class="portfolio_description">
                                            Website adaptable to all devices, with ui components and animated interactions.
                                        </p>
                                        <a href="#" class="">
                                            View
                                            <i class="uil uil-eye button_icon"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="">
                                <i class=""></i>
                            </div>
                            <div class=" ">
                                <i class=""></i>
                            </div>

                        </div>
                    </div>

                </div>


                <a href="#" class="scrollup" id="scroll-up">
                    <i class="uil uil-arrow-up scrollup_icon"></i>
                </a>



                <script src="https://dev.dakidarts.com/wixa/assets/js/swiper-bundle.min.js"></script>
                <script src="https://dev.dakidarts.com/wixa/assets/js/main.js"></script>


            </div>

        </div>
    );
};

export default Portfolio;