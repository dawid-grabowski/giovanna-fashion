import React, { ReactElement } from 'react';
import { BurgerIcon } from './burger-icon/burger-icon';
import logo from '../../images/logo.jpg';
import { StyledHeader } from './navbar.styled';

export function Navbar(): ReactElement {
	return (
		<StyledHeader>
			<BurgerIcon />
			<img src={logo} alt='Giovanna Fashion logo.' />
		</StyledHeader>
	);
}
