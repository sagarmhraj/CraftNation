import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../css/home.css";

const Home = () => {
  return (
    <div className="container">

      <aside className="sidebar">
        <div className="box">
          <ul>
            <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#"><i className="fas fa-list"></i> All Content</a></li>
            <li><a href="#"><i className="fas fa-calendar-alt"></i> Live Events</a></li>
            <li><a href="#"><i className="fas fa-question-circle"></i> Ask Amplitude</a></li>
          </ul>
        </div>

        <div className="box">
          <ul className="sidebar-menu">
            <li>
              <a href="#">
                <i className="fas fa-chart-line"></i>
                <span className="menu-text">Product Analytics</span>
                <span className="dropdown-icon">▼</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chart-pie"></i>
                <span className="menu-text">Web Analytics</span>
                <span className="dropdown-icon">▼</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-users"></i>
                <span className="menu-text">Users</span>
                <span className="dropdown-icon">▼</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-play-circle"></i>
                <span className="menu-text">Session Replay</span>

              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-flask"></i>
                <span className="menu-text">Experiment</span>
                <span className="dropdown-icon">▼</span>
              </a>
            </li>
          </ul>

        </div>

        <div className="box">
          <h2>Data</h2>
          <ul>
            <li><a href="#"><i className="fas fa-database"></i> Data</a></li>
            <li><a href="#"><i className="fas fa-flag"></i> Releases</a></li>
          </ul>
        </div>
      </aside>



      <main className="main-content">
        <h1>All Content</h1>
        <p>27 items</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last modified</th>
                <th>Views</th>
                <th>Editors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i className="fas fa-sticky-note"></i> SLMobbin Notes</td>
                <td>17 minutes ago</td>
                <td>0 views</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-file-alt"></i> Project Report</td>
                <td>2 hours ago</td>
                <td>5 views</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-file-alt"></i> SLMobbin Notes</td>
                <td>1 hours ago</td>
                <td>0 views</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-file-alt"></i>SLMobbin Notes</td>
                <td>20 minutes ago</td>
                <td>-</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-sticky-note"></i> Page View</td>
                <td>17 minutes ago</td>
                <td>0 views</td>
                <td>
                  <div className="status-wrapper">
                    <span className="status">SL</span>
                    <span className="status secondary-status">AS</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td><i className="fas fa-sticky-note"></i> Page View</td>
                <td>17 minutes ago</td>
                <td>-</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-sticky-note"></i> Page View</td>
                <td>17 minutes ago</td>
                <td>0 views</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-sticky-note"></i> Page View</td>
                <td>17 minutes ago</td>
                <td>0 views</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-sticky-note"></i> Page View</td>
                <td>17 minutes ago</td>
                <td>0 views</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-sticky-note"></i> Page View</td>
                <td>17 minutes ago</td>
                <td>0 views</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-sticky-note"></i> Page View</td>
                <td>17 minutes ago</td>
                <td>-</td>
                <td><span className="status">SL</span></td>
              </tr>

              <tr>
                <td><i className="fas fa-sticky-note"></i> Page Signup</td>
                <td>17 minutes ago</td>
                <td>-</td>
                <td><span className="status">SL</span></td>
              </tr>
              <tr>
                <td><i className="fas fa-sticky-note"></i> Page visits</td>
                <td>17 minutes ago</td>
                <td>0 views</td>
                <td><span className="status">SL</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* Filter Sidebar */}
      <aside className="filters">
        <div className="filter-container">
          <h2>Filter</h2>

          <div className="filter-group">
            <label htmlFor="editors">Editors</label>
            <select id="project">
              <option>All editors</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="space">Space</label>
            <input type="text" id="project" placeholder="In any space" />
          </div>

          <div className="filter-group">
            <label>Type</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input type="checkbox" id="chart" />
                <label htmlFor="chart"><span className="icon">📊</span> Chart</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="cohort" />
                <label htmlFor="cohort"><span className="icon">👥</span> Cohort</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="dashboard" />
                <label htmlFor="dashboard"><span className="icon">📈</span> Dashboard</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="experiment" />
                <label htmlFor="experiment"><span className="icon">⚗️</span> Experiment</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="flag" />
                <label htmlFor="flag"><span className="icon">🚩</span> Flag</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="notebook" />
                <label htmlFor="notebook"><span className="icon">📓</span> Notebook</label>
              </div>
            </div>
          </div>


          <div className="filter-group">
            <label>Content is...</label>
            <div className='archi'>
              <input type="checkbox" id="archived" />
              <label htmlFor="archived">Archived</label>
            </div>
          </div>


          <div className="filter-group">
            <label htmlFor="project">Project</label>
            <input type="text" id="project" placeholder="Filter by project" />
          </div>

          <div className="filter-group">
            <label htmlFor="last-modified">Last modified</label>
            <select id="project">
              <option>Any time</option>
            </select>
          </div>


        </div>

      </aside>
    </div>
  );
};

export default Home;
