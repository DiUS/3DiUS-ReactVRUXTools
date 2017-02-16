import React from 'react'
import SpheremapUpload from '../components/ui/SpheremapUpload'
import MenuUpload from '../components/ui/MenuUpload'
import MenuTransform from '../components/ui/MenuTransform'

export default React.createClass({
  render() {
    return (
      <div>
        <SpheremapUpload />
        <div className="leftDiv">
          <MenuUpload />
        </div>
        <div className="rightDiv">
          <MenuTransform />
        </div>
        <div id='foot' />
      </div>
    )
  }
})
