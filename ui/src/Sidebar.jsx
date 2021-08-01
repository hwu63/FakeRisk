

import React from 'react';
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import 'react-bootstrap-drawer/src/style.css';
import SideBarSub from './SideBarSub.jsx';

const Sidebar = props => {

    return (
		<Container fluid>
		<Row className="flex-xl-nowrap">
			<Col as={ SideBarSub } xs={ 12 } md={ 3 } lg={ 2 } />
			<Col xs={ 12 } md={ 9 } lg={ 10 }>
				{ props.children }
			</Col>
		</Row>
	</Container>
        );
  };

  export default Sidebar