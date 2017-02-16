import React from 'react'
import SpheremapUpload from '../components/SpheremapUpload'
import MenuUpload from '../components/MenuUpload'

export default React.createClass({
  render() {
    return (
      <div>
        <SpheremapUpload />
        <MenuUpload />
        <div id='foot' />
      </div>
    )
  }
})
