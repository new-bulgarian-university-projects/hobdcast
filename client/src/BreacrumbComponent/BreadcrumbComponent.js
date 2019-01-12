import React, { Component } from 'react';
import {Breadcrumb} from 'react-bootstrap';

class BreadcrumbComponent extends Component{
    render(){
        let flow = this.props.bcFlow;
        
        if(!Array.isArray(flow)){
            flow = [flow];
        }
        return (
            <Breadcrumb>
               {flow.map((data,i) => <Breadcrumb.Item key={i} href={data.url}>{data.name}</Breadcrumb.Item>)}
            </Breadcrumb>
        )
    }
}

export default BreadcrumbComponent