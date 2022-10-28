// Write your code here
import React from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="leftbar">
              <h1 className="body-header-text">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="center-text">
              <h4>Content</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="rightBar">
              <h4>Right NavBar</h4>
              <div className="ad1">
                <p className="ad-1">Ad 1</p>
                <p className="ad-1">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
