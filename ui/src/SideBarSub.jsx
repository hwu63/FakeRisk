import React, { useState } from 'react';
import { Collapse, MenuItem } from 'react-bootstrap';
import {
	Drawer,
	DrawerOverflow,
	DrawerToC,
	DrawerToggle,
} from 'react-bootstrap-drawer';
import { LinkContainer } from 'react-router-bootstrap';

import StrategyDrawer from './StrategyDrawer.jsx';

export const SideBarSub = (props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<Drawer className={ props.className }>


			<DrawerToggle onClick={ handleToggle } />

			<Collapse in={ open }>
				<DrawerOverflow>
					<DrawerToC>
						<StrategyDrawer />
					</DrawerToC>
				</DrawerOverflow>
			</Collapse>

			<LinkContainer to="/stocks">
				<MenuItem>Strategies</MenuItem>
			</LinkContainer>
		</Drawer>

	);
};

export default SideBarSub