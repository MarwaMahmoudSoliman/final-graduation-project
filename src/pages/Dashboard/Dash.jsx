import React from 'react'
import './dash.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Blog3Img from '../../utils/images/blog3-img.jpg';


const Dash = () => {
  return (
    <div className="containers">
       <div className="sidebar">
      <div className="sidebar-title">INSIGHT</div>
      <div className="sidebar-item active">
        <i className="fas fa-tachometer-alt"></i>
        Dashboard
      </div>
      <div className="sidebar-item">
        <i className="fas fa-layer-group"></i>
        Layouts
      </div>
      <div className="sidebar-item">
        <i className="fas fa-file-alt"></i>
        Pages
      </div>
      <div className="sidebar-subitem">
        <i className="fas fa-edit"></i>
        Posts
      </div>
      <div className="sidebar-subitem">
        <i className="fas fa-ellipsis-h"></i>
        Misc
      </div>
      <div className="sidebar-item">
        <i className="fas fa-cubes"></i>
        Components
      </div>
      <div className="sidebar-subitem">
        <i className="fas fa-users"></i>
        User interface
      </div>
      <div className="sidebar-subitem">
        <i className="fas fa-expand-arrows-alt"></i>
        Extended UI
      </div>
      <div className="sidebar-item">
        <i className="fas fa-info-circle"></i>
        Misc
      </div>
      <div className="sidebar-subitem">
        <i className="fas fa-life-ring"></i>
        Support
      </div>
      <div className="sidebar-subitem">
        <i className="fas fa-book"></i>
        Documentation
      </div>
    </div>
      <div className="main-content">
        <div className="top-bar">
          {/* <i class="fa fa-search" aria-hidden="true" ></i> */}

          <input type="text" className="search-bar" placeholder="Search..." />
            <i className="fas fa-search search-icon"></i>
          <div className="profile">
            <img src={Blog3Img} alt="Profile" className="profile-img" />
          </div>
        </div>
        <h2 className="main-title" style={{textAlign:"center"}}>ALL POSTS</h2>
        <div className="post-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Users</th>
                <th>Status</th>
                <th>Images</th>
                <th>Actions</th>
                <th>Post Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'title one updatess', user: 'admin', status: 'ACTIVE', image: 'https://via.placeholder.com/40', postStatus: 'Accept' },
                { title: 'ssssssssvvvvvvvv555', user: 'admin', status: 'ACTIVE', image: 'https://via.placeholder.com/40', postStatus: 'Accept' },
                { title: 'title one update', user: 'admin', status: 'ACTIVE', image: 'https://via.placeholder.com/40', postStatus: 'Accept' },
                { title: 'ssssssss update', user: 'user', status: 'ACTIVE', image: 'https://via.placeholder.com/40', postStatus: 'Accept' },
                { title: 'sssssssssssssss', user: 'admin', status: 'PENDING', image: 'https://via.placeholder.com/40', postStatus: 'Accept' },
                { title: 'cccccccccccc', user: 'admin', status: 'PENDING', image: 'https://via.placeholder.com/40', postStatus: 'Accept' }
              ].map((post, index) => (
                <tr key={index}>
                  <td>{post.title}</td>
                  <td>{post.user}</td>
                  <td><span className={`status ${post.status.toLowerCase()}`}>{post.status}</span></td>
                  <td><img src={post.image} alt="Post" className="post-img" /></td>
                  <td>
                    <button className="btn-edit">✏️</button>
                    <button className="btn-delete">🗑️</button>
                  </td>
                  <td>
                    <button className="btn-accept">Accept</button>
                    <button className="btn-reject">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dash