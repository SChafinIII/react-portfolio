import React from "react";



class Home extends React.Component {
    render() {
        return <main>
        <section id="my-work" className="work">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>My Work</h2>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card border-primary mb-4" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">KU - Radlibs Project</h5>
                          <p className="card-text">Fullstack application utilising responsive front end and express backend to
                            create silly stories from common rhymes.</p>
                          <a href="https://rad-libs.herokuapp.com/" className="btn btn-primary">View</a>
                          <a href="https://github.com/SChafinIII/Rad-Libs" className="btn btn-primary"><i className="bi bi-github" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-primary mb-4" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">KU - The Vacation Planner</h5>
                          <p className="card-text">The Vacation Planner searches for a destination and queries weather data for
                            a given week. This allows users to plan a trip.</p>
                          <a href="https://github.com/Scorch87/The-Vacation-Planner" className="btn btn-primary"><i className="bi bi-github" /> View</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-primary mb-4" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">KU - Employee Tracker</h5>
                          <p className="card-text">A tracker for an employee database in SQL utilising Javascript. This allows a
                            user designate employees, department, salaries, and roles.</p>
                          <a href="https://github.com/SChafinIII/employee-tracker" className="btn btn-primary"><i className="bi bi-github" /> View</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-primary mb-4" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">KU - Workday Scheduler</h5>
                          <p className="card-text">Allows a user to track their 8-5 workday in a designated web application and
                            store their information locally for planning and future use.</p>
                          <a href="https://schafiniii.github.io/workday-scheduler/" className="btn btn-primary">View</a>
                          <a href="https://github.com/SChafinIII/workday-scheduler" className="btn btn-primary"><i className="bi bi-github" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-primary mb-4" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">KU - Javascript Quiz</h5>
                          <p className="card-text">A short and simple Javascript quiz to test your knowledge over the language
                            built with javascript, css, and html.</p>
                          <a href="https://schafiniii.github.io/javascript-quiz/" className="btn btn-primary">View</a>
                          <a href="https://github.com/SChafinIII/javascript-quiz" className="btn btn-primary"><i className="bi bi-github" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-primary mb-4" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">KU - 5 Day Forecast</h5>
                          <p className="card-text">Displays a 5 day weather forecast calling a variety of additional data such as humidity, windspeed, and temperature. Saves previous searches using local storage.</p>
                          <a href="https://schafiniii.github.io/5-day-forecast/" className="btn btn-primary">View</a>
                          <a href="https://github.com/SChafinIII/5-day-forecast" className="btn btn-primary"><i className="bi bi-github" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-primary mb-4" style={{width: '18rem'}}>
                        <div className="card-body">
                          <h5 className="card-title">KU - Professional README Generator</h5>
                          <p className="card-text">This is a command-line application utilising Inquirer and Node.js that allows users to generate a professional README file based on their input.</p>
                          <a href="https://github.com/SChafinIII/professional-readme-generator" className="btn btn-primary"><i className="bi bi-github" /> View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div></section>
      </main>
    }
}

export default Home;