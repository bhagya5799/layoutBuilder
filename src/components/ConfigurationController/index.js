// Write your code here
import React from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeRight = () => {
        onToggleShowRightNavbar()
      }
      const onChangeLeft = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeContent = () => {
        onToggleShowContent()
      }

      return (
        <div className="ConfigurationController-container">
          <h2 className="layout">Layout</h2>
          <ul>
            <li>
              <input
                checked={showContent}
                type="checkbox"
                id="content"
                onChange={onChangeContent}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="LeftNavBar"
                onChange={onChangeLeft}
              />
              <label htmlFor="LeftNavBar">Left Navbar</label>
            </li>
            <li>
              <input
                checked={showRightNavbar}
                type="checkbox"
                id="RightNavBar"
                onChange={onChangeRight}
              />
              <label htmlFor="RightNavBar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
