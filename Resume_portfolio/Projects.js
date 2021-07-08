import React from 'react';
import ReactDOM from 'react-dom';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Navlink,
    Switch 
} from "react-router-dom";


class Projects extends React.Component{
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
                                <div class="col-sm-6">
                                    <h2 class="myskils">Add on skills </h2>
                                    <br/>
                                    <ul class="skills">
                                        <li>
                                            Data Analytics - Numpy,Scipy,Pandas,Matplotlib,Seaborn,Scikit-learn
                                            </li>
                                            <li>
                                            Machine Learning Algorithms - Linear Regression,Logistic regression,Polynomial regression,SVM,KNN...
                                            </li>
                                            <li>
                                            Deep Learning - Tensorflow,Keras
                                            </li>
                                        </ul>
                                    </div>
                                    <div clas="col-sm-6">
                                        <h2 class="Myskills">Add on Projects</h2>
                                        <br/>
                                        <ul class="skills">
                                        <li>
                                            Face Recognition System using Image processing techniques

                                            </li>
                                            <li>
                                            Diabetes Prediction using Machine Learning techniques
                                            </li>
                                            <li>
                                          
                                            M.L on Vehicle tracking and speed estimation system on traffic surveillance 
                                           
                                            </li>
                                        </ul>
                            </div>
                            <br/>
                            <div class="col-sm-12">
                                <h2 class="myprojects">My Projects </h2>
                                <br/>
                                <table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th> Project Domain </th>
                                            <th> Programming Languages </th>
                                            <th> Project Link </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> Full Stack Web Development </td>
                                                <td> Html,css,JavaScript,Node js </td>
                                                <td> <a href={"https://github.com/Shahid-Afridii/CRUD_API"}> CRUD API using Node Js </a> </td>
                                                </tr>
                                                <tr>
                                                <td> Full Stack Web Development </td>
                                                <td> Html,css,JavaScript,react js </td>
                                                <td> <a href={"https://github.com/Shahid-Afridii/CRUD_API"}> Resume Portfolio</a></td>
                                                </tr>
                                                <tr>
                                                <td> Data Science </td>
                                                <td> Python,NLP </td>
                                                <td> <a href={"https://github.com/Shahid-Afridii/Google-voice-assistance-using-NLP"}> Google voice assistance</a></td>
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

export default Projects;