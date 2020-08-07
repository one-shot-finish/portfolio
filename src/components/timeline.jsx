import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Engineer @ BrowserStack <span> Dec 2019-present</span></h2>
                        <ul>
                          <li>Worked on a new Logger giving appropriate instructions and more customer friendly experience for customers in BrowserStack local binary for its release 8.0</li>
                          <li>Worked on customerfacing documentation forIP whitelisting for BrowserStack local binary</li>
                          <li>Technology Stack: NodeJS, Ruby on Rails, ReactJS</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Engineer @ Cogoport <span> Nov 2018-Nov 2019</span></h2>
                        <ul>
                          <li> Integrated helpdesk from a third-party solution and developed agent data portal.</li>
                          <li> Automated schedules for 19 different shipping lines using techniques of parsing html and by scraping codes and making network calls by the observed patterns.</li>
                          <li> Screened fraud Individual/Entity names across various Global Sanctions by using Fuzzy and Phonetic techniques.</li>
                          <li> Developed COGO STORE a third party integration tool through which customers can purchase a wide variety of E-cards & transfer points to Paytm using OAuth http transfer.    </li>
                          <li> Technology Stack: Ruby on Rails, MongoDB, Postgres, ReactJS, Python Django, Redis, RabbitMQ, Jenkins, Docker, AWS, Nginx.</li>
                          <li> Rewards: Kickass Coder Backend, Jan-19. Outlier performer, 2019 First half.</li>
                          <li> SCM: Github. </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Engineer @ Zoho <span> Feb 2018-Nov 2018</span></h2>
                        <ul>
                          <li> Worked on backend for the product 'Zoho Tables'. First backend member of this product. </li>
                          <li>Used highly efficient data-structures to store requests, quick algorithms to process the same. Accountable for storing the requests, processing and generating responses.</li>
                          <li>Used SOLID principles and loosely coupled modules to make CRUD operations highly scalable.</li>
                          <li>Technology stack: XML, Java-8, Collections.</li>
                          <li>SCM: Gitlab, CMTools.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>UnderGrad <span>2014-2018</span></h2>
                          <ul>
                            <li>Finished my Undergrad with 9.3/10.0 G.P.A</li>
                            <li> Secured <a href='https://drive.google.com/file/d/1ktAFLM3KlRn68XcdQNUzYa7V8F-2FvZX/view?usp=sharing'>99.58 percentile</a> in National Graduate entrance test for Masters in Computer Science </li>
                            <li><a href="https://www.hackerrank.com/one_shot_finish">99.11 percentile</a> in Hackerrank rated contests with 1 Gold, 12 Silver and 5 bronze medals </li>

                          </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
