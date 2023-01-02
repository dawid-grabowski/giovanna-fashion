import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Navbar } from './components/navbar/navbar';

const GlobalWrapperStyled = styled.div`
	width: 100%;
	max-width: 144rem;
	margin: 0 auto;
	padding: 3rem 4rem;
`;

export default function App(): ReactElement {
	return (
		<GlobalWrapperStyled>
			<Navbar />
		</GlobalWrapperStyled>
	);
}
