import React from 'react';
import {Navbar,Nav,Button, ButtonGroup} from 'react-bootstrap';


const NavComponent = props =>{
    const {onAction,onTabChange} = props;
    return (
        <Navbar id="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React.ICU</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={onAction.bind(this,'new')}>New</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
           <ButtonGroup aria-label="View mode">
              <Button onClick={onTabChange.bind(this,'design')} variant="outline-light">Design</Button>
              <Button onClick={onTabChange.bind(this,'code')}  variant="outline-light">Code</Button>
              <Button onClick={onTabChange.bind(this,'test')}  variant="outline-light"><span style={{marginLeft:8,marginRight:8}}>Test</span></Button>
            </ButtonGroup>
          </Nav> 
          <Nav style={{float:'right'}}>
            <Button onClick={onAction.bind(this,'export')} variant="outline-light">Export</Button>
          </Nav>
        </Navbar>
    )
}

export default NavComponent;