import React from 'react';
import ReactDOM from 'react-dom';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Navlink,
    Switch 
} from "react-router-dom";


class Home extends React.Component{
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
                                    youtube
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
                            <div class="col-sm-4">
                                <div class="rounded-circle">
                                    <img src="data:image/jpeg;base64,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 
                                "class="rounded-circle mx-auto d-block" 
                                alt="My photo"
                                 width="130px"
                                 height="150px">
                                        </img>
                                    </div>
                                    <br/>
                                         </div>
                            <div class="col-sm-8">
                                        <h2 class="myskills"> Career Objective </h2>
                                        <br/>
                                        <p class="skills">
                                        A self-motivated IT professional with huge knowledge and
proficiency in JavaScript, HTML , CSS, React js , node js ,express js
and mobile responsive web development, as well as strong skills
and ability in writing clean and efficient code, seeks the position of
Web Developer`
                                            </p>

                                         </div>
                    </div> 

                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2 class="myskils">Techniqal skills </h2>
                                    <br/>
                                    <ul class="skills">
                                        <li>
                                            Front End Languages - HTML,CSS,JAVASCRIPT,REACT JS
                                            </li>
                                            <li>
                                            Back End Languages - JAVA,PYTHON,NODE JS
                                            </li>
                                            <li>
                                            Database - MYSQL,SEQUELIZE
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
                           
                                <div class="col-sm-12">
                                <h2 class="qulaifications">Educational Qualifications</h2>
                                <br/>
                                <table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th> Degree </th>
                                            <th> School/college </th>
                                            <th> YOP</th>
                                            <th> Percentage</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> B.sc (cs) </td>
                                                <td> Annai collge of Arts and science </td>
                                                <td> 2018</td>
                                                <td> 78%</td>
                                                </tr>
                                                <tr>
                                                <td> HSC </td>
                                                <td> Vallalar Higheer Secondary School</td>
                                                <td> 2014</td>
                                                <td> 77%</td>
                                                </tr>
                                                
                                            </tbody>
                                    </table>
                                </div>











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
                
                </body>
        );
    }

}

export default Home;