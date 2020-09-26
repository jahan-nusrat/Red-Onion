import styled from 'styled-components';

export const FormContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
	padding: 6rem 0;
	form {
		img {
			width: 200px;
			margin: auto;
			display: block;
			margin-bottom: 2.5rem;
		}
		.form-control {
			background-color: #f5f5f5;
			border-color: transparent;
			height: calc(2.5em + .75rem + 2px);
			color: #bdbdbd;
			font-size: 0.85rem;
			&:focus {
				box-shadow: 0 0 0 transparent;
			}
		}
		.btn-submit {
			color: #ffffff;
			background-color: #f91944;
			width: 100%;
			font-size: 0.85rem;
			height: calc(2em + .75rem + 2px);
		}
		a {
			text-decoration: none;
		}
		p {
			margin-top: 1rem;
			font-size: 0.85rem;
			text-align: center;
			color: #f91944;
		}
	}
	.icon {
		font-size: 1.8rem;
		margin: 0.9rem 0.5rem;
		cursor: pointer;
	}
	.fb {
		color: #1f82e9;
	}
	.google {
		color: #ff1e1e;
	}
`;

export const MainDiv = styled.div`
	position: relative;
	height: 100vh;
	.bg {
		display: block;
		position: absolute;
		bottom: 0;
		width: 100%;
		object-fit: cover;
	}
`;
