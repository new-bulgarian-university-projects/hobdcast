import React, { Component } from 'react'
import { Glyphicon, Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CrumbIconItem = ({to, glyph, children, ...props}) => {
  const style = {maringRight:"10px"};  

  return (<LinkContainer to={to}>
    <Breadcrumb.Item {...props}>
      {glyph ? <span><Glyphicon style={style} glyph={glyph} />{children}</span> : children}
    </Breadcrumb.Item>
  </LinkContainer>)
}

export default CrumbIconItem

