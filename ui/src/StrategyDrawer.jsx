import React from 'react';
import { MenuItem } from 'react-bootstrap';
import {
	DrawerNavigation,
} from 'react-bootstrap-drawer';
import { LinkContainer } from 'react-router-bootstrap';

const StrategyDrawer = (props) => {
	return (
		<>
			<DrawerNavigation>
				<LinkContainer to="/strategies">
					<MenuItem>Strategies</MenuItem>
				</LinkContainer>

				<LinkContainer to="/create">
					<MenuItem>Create</MenuItem>
				</LinkContainer>
			</DrawerNavigation>
		</>
	);
};

export default StrategyDrawer