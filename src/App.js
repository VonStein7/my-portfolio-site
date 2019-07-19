import React from 'react';
import './App.sass';
import AboutMe from './AboutMe'
import ProjectsContainer from './ProjectsContainer'
// import Gameboy from './Gameboy'

class App extends React.Component {
  state = {
    active: false
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {

    const iframeFix = {
      height: "1000px",
      width: "800px"
    }
    return (
      <div className="section">

        <div className="columns is-vcentered">

          <div className="column is-half ">
            <div className="hero is-medium has-text-centered">
              <div className="hero-body ">
                <div className="container name-con">
                  <p className="title is-1 text-pop-up-top ">Brenden Williams</p>
                  <p className="subtitle is-3"><span className="text-flicker-in-glow">Software</span> Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-half">
            <div className="hero is-medium">
              <div className="hero-body has-text-centered">
                <div className="container">
                <AboutMe />
                <a className="button is-link is-outlined fix-buttons" href="https://github.com/VonStein7">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
                <a className="button is-link is-outlined fix-buttons" href="https://www.linkedin.com/in/brenden-williams-055769a2/">
                  <span className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                  <span>linkedin</span>
                </a>
                <button className="button is-link is-outlined fix-buttons" onClick={this.handleClick}><span className="
                icon"><i className="fas fa-scroll"></i>
                </span><span>Resume</span></button>

                {/* modal */}
                <div className={`modal ${this.state.active ? "is-active" : ""}`} onClick={this.handleClick}>
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <p>
                    <iframe style={iframeFix} src="https://www.docdroid.net/08styoe/brendenwilliamsresume.pdf" frameborder="0" 
                     title="resume"></iframe>
                    </p>
                  </div>
                  <button className="modal-close is-large" aria-label="close" onClick={this.handleClick}></button>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <nav className="level">
          <p className="level-item"><a data-scroll href="#projects">Projects</a></p>
        </nav>
        <nav className="level">
          <a className="level-item" href="#projects"><i className="fas fa-angle-double-down"></i></a>
        </nav>
        <br></br>
        <br></br>
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
