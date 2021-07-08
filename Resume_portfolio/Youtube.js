import React from 'react';
import ReactDOM from 'react-dom';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Navlink,
    Switch 
} from "react-router-dom";


class Youtube extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 clas="myname">Shahid Afridi </h1>
                        <p class="myoccupation">Mern Stack Developer</p>
                        <ul class="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="./">
                                    Home
                                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="./projects">
                                    Projects
                                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="./youtube">
                                    Youtube
                                    </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="./contact">
                                    Contact
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="myskills" style={{textAlign:"justify"}}> It is one of my  Youtube class in Data Science  </h2>
                                <div>
                                    <div class="embed-responsive embed-responsive-16by9">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ed2Bjem0Ob8" title="YouTube video player" 
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



                                    </div>
                                    <p class="skills" style={{textAlign:"justify"}}>
                                       Google voice assistance using NLP
                                        </p>
                                        <h2 class="myskills"> Project domain and tools </h2>
                                        <p class="skills">This application is developed by using the following programming languages and tools </p>
                                   <ul>
                                        <li>
                                            Front End Languages - Python and NLP
                                            </li>
                                            <li>
                                            Tools - Anaconda and Pycharm
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <div clas="col-sm-6">
                                        <h2 class="Myskills">Certifications</h2>
                                        <br/>
                                        <ul class="skills">
                                        <li>
                                            I done Full stack development in Besant technologies

                                            </li>
                                            <li>
                                            I done Python DataScience in Troy Infotech
                                            </li>
                                            <li>
                                           I done Diploma in Java in CSC
                                            </li>
                                        </ul>
                            </div>
                            <br/>
                        

                            </div>
                            </div>
                            <div class="jumbotron text-center" id="footer">
                                <ul class="nav justify-content-center">
                                    <li class="nav-item">
                                        <a href="https://www.linkedin.com/in/shahid-afridi-648045203/" class="fa fa-linkedin nav-link"
                                        style={{color:"blue"}}/>
                                        </li>

                                        <li class="nav-item">
                                        <a href="https://www.youtube.com/watch?v=Ed2Bjem0Ob8" class="fa fa-youtube nav-link"
                                        style={{color:"blue"}}/>
                                        </li>

                                        <li class="nav-item">
                                        <a href="https://github.com/Shahid-Afridii/" class="fa fa-github nav-link"
                                        style={{color:"blue"}}/>
                                        </li>

                                        <li class="nav-item">
                                        <a href="https://www.instagram.com/shahid_afridi.js/" class="fa fa-instagram nav-link"
                                        style={{color:"blue"}}/>
                                        </li>

                                        <li class="nav-item">
                                        <a href="https://www.facebook.com/profile.php?id=100013747351550" class="fa fa-facebook nav-link"
                                        style={{color:"blue"}}/>
                                        </li>
                                    </ul>

                                </div>

                </div>
                
                </div>
                </body>
        );
    }

}

export default Youtube;