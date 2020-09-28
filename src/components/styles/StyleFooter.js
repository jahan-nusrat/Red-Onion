import styled from 'styled-components';

export const Container = styled.footer`
	background-color: #191919;
	font-family: Verdana, Geneva, Tahoma, sans-serif;

	.primary {
		padding: 3rem;
		img {
			width: 150px;
		}
		.nav-item {
			.nav-link {
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				padding: 0.1rem 0;
				color: #d9d9d9;
			}
		}
	}
	.secondary {
		padding-bottom: 2rem;
		P {
			font-size: 0.86rem;
			color: #828282;
		}
		ul {
			li {
				margin: 0 1rem;
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				color: #d9d9d9;
			}
		}
	}
`;
