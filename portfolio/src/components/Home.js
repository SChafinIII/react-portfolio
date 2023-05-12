import React from 'react';

// Homepage
const Home = (props) => {
    const handleClick = (e) => {
      console.log(e.target.textContent);
      props.setPage(e.target.textContent);
  
    } 
      return (
        <> 
         {/* Bootstrap 5 CSS */}
  <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossOrigin="anonymous"
/>
<link rel="stylesheet" href="./css/style.css" />
{/* Bootstrap Icons */}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"

/>

{/* Bootstrap 5 responsive navbar */}
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand">Steven Chafin</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about-me">
            About Me
          </a>
          <p> </p>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#my-work">
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* Hero section for "About Me" */}
<section id="about-me" className="bg-light p-5">
  <div className="container">
    <h1 className="display-4">Hello.</h1>
    <p className="lead">
      I'm a computer programmer and fullstack developer who is about to
      graduate from the University of Kansas. I've been fortunate to have
      gained a deep understanding of various technologies, including
      Javascript, HTML, CSS, Bootstrap, SQL, Node, Express, React, MERN,
      Server-Side, Web, and Third Party APIs.
      <br />
      <br />I believe in staying up-to-date with the latest trends and
      advancements in the industry to ensure my projects are always
      cutting-edge and innovative. I'm excited to bring my skills to the table
      and create amazing web experiences for my clients.
    </p>
  </div>
</section>
{/* Main content */}
<main>
  <section id="my-work" className="work">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>My Work</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card border-primary mb-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">KU - Radlibs Project</h5>
                    <p className="card-text">
                      Fullstack application utilising responsive front end and
                      express backend to create silly stories from common
                      rhymes.
                    </p>
                    <a
                      href="https://rad-libs.herokuapp.com/"
                      className="btn btn-primary"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/SChafinIII/Rad-Libs"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card border-primary mb-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">KU - The Vacation Planner</h5>
                    <p className="card-text">
                      The Vacation Planner searches for a destination and
                      queries weather data for a given week. This allows users
                      to plan a trip.
                    </p>
                    <a
                      href="https://github.com/Scorch87/The-Vacation-Planner"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-github" /> View
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card border-primary mb-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">KU - Employee Tracker</h5>
                    <p className="card-text">
                      A tracker for an employee database in SQL utilising
                      Javascript. This allows a user designate employees,
                      department, salaries, and roles.
                    </p>
                    <a
                      href="https://github.com/SChafinIII/employee-tracker"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-github" /> View
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card border-primary mb-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">KU - Workday Scheduler</h5>
                    <p className="card-text">
                      Allows a user to track their 8-5 workday in a designated
                      web application and store their information locally for
                      planning and future use.
                    </p>
                    <a
                      href="https://schafiniii.github.io/workday-scheduler/"
                      className="btn btn-primary"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/SChafinIII/workday-scheduler"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card border-primary mb-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">KU - Javascript Quiz</h5>
                    <p className="card-text">
                      A short and simple Javascript quiz to test your
                      knowledge over the language built with javascript, css,
                      and html.
                    </p>
                    <a
                      href="https://schafiniii.github.io/javascript-quiz/"
                      className="btn btn-primary"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/SChafinIII/javascript-quiz"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card border-primary mb-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">KU - 5 Day Forecast</h5>
                    <p className="card-text">
                      Displays a 5 day weather forecast calling a variety of
                      additional data such as humidity, windspeed, and
                      temperature. Saves previous searches using local
                      storage.
                    </p>
                    <a
                      href="https://schafiniii.github.io/5-day-forecast/"
                      className="btn btn-primary"
                    >
                      View
                    </a>
                    <a
                      href="https://github.com/SChafinIII/5-day-forecast"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card border-primary mb-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      KU - Professional README Generator
                    </h5>
                    <p className="card-text">
                      This is a command-line application utilising Inquirer
                      and Node.js that allows users to generate a professional
                      README file based on their input.
                    </p>
                    <a
                      href="https://github.com/SChafinIII/professional-readme-generator"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-github" /> View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<section id="contact" className="contact">
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>Contact Me</h2>
        <p>Email - chafin.steven@gmail.com</p>
      </div>
    </div>
  </div>
</section>
{/* Footer with Icon links to other social media */}
<footer className="bg-light py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          {/* <li class="me-3">
      <a href="https://www.linkedin.com/in/your-account">
        <i class="bi bi-linkedin fs-5"></i>
      </a>
    </li> */}
          <li className="me-3">
            <a href="https://github.com/SChafinIII">
              <i className="bi bi-github fs-2" />
            </a>
          </li>
          {/* <li class="me-3">
      <a href="https://www.twitter.com/your-account">
        <i class="bi bi-twitter fs-5"></i>
      </a>
    </li> */}
          {/* <li class="me-3">
      <a href="https://www.instagram.com/your-account">
        <i class="bi bi-instagram fs-5"></i>
      </a>
    </li> */}
        </ul>
      </div>
    </div>
  </div>
</footer>
{/* Bootstrap 5 JS */}
</>


      )
}

export default Home; 

