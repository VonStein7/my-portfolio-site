import React, { Component } from 'react'
// import Gameboy from './Gameboy'

export default class ProjectsContainer extends Component {
  render() {
    return (
      <div className="section" id="projects">
        <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">

            <div className="columns is-multiline is-centered">
              
              {/* column 1 */}
              <div className="column is-one-third">
                <div className="box">
                <div className="card fix-card">
                <div className="card-image">
                  <figure className="image img-fix">
                    <img src="https://i.ibb.co/m5d6DnZ/Screen-Shot-2019-07-16-at-3-04-57-PM.png" alt="Helping Hands Thumbnail" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-4">Helping Hands</p>
                    <p className="subtitle is-6">Non-Profit Donation Marketplace</p>
                  </div>
              </div>
              <div className="content has-text-centered">
                <p>Some text my guys</p>
                <br />
                <a className="button is-link is-outlined fix-buttons" href="https://github.com/VonStein7/helping-hands-client">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

              {/* column2 */}
              <div className="column is-one-third">
                <div className="box">
                <div className="card fix-card">
                <div className="card-image">
                  <figure className="image img-fix">
                    <img src="https://i.ibb.co/8gScLh1/Screen-Shot-2019-07-16-at-4-11-07-PM.png" alt="Mangatopia Thumbnail" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-4">Mangatopia</p>
                    <p className="subtitle is-6">Manga Reader and Downloader</p>
                  </div>
              </div>
              <div className="content has-text-centered">
                <p>Some text my guys</p>
                <br />
                <a className="button is-link is-outlined fix-buttons" href="https://github.com/VonStein7/mangatopia-rails-client">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

              {/* column3 */}
              <div className="column is-one-third">
                <div className="box">
                <div className="card fix-card">
                <div className="card-image">
                  <figure className="image img-fix">
                    <img src="https://i.ibb.co/8NQbpPb/Screen-Shot-2019-07-16-at-4-01-32-PM.png" alt="Wembie Thumbnail" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-4">Wembie</p>
                    <p className="subtitle is-6">Cultural Desserts Client Page</p>
                  </div>
              </div>
              <div className="content has-text-centered">
                <p>Some text my guys</p>
                <br />
                <a className="button is-link is-outlined fix-buttons" href="https://github.com/VonStein7/wembie-client">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
                <a className="button is-link is-outlined fix-buttons" href="https://salty-mesa-92366.herokuapp.com/">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
            
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
