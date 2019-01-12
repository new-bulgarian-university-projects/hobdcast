import React, { Component } from 'react'
import {Image} from 'react-bootstrap'

const NotFound = ({children}) => (
  <div>
       <Image alt='error' 
              src='/images/error-404.png' 
              responsive />
  </div>
)

export default NotFound

