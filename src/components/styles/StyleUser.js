import styled from 'styled-components';

export const UserDiv = styled.div`
	font-family: 'Montserrat', sans-serif;
	.profile {
		padding: 3rem 0;
	}
	.user-img {
		background-color: #f7f7f7;
		width: 300px;
		height: 300px;
		margin: auto;
		position: relative;
		border-radius: 10px;
		img {
			height: 220px;
			width: 220px;
			border-radius: 50%;
			object-fit: cover;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.user-name {
		margin-top: 1rem;
	}
	h4 {
		color: #f91944;
	}
	.cart-items {
		box-shadow: 1px 5px 8px 1px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		border-radius: 10px;
		a {
			color: #165dca;
			font-size: 0.85rem;
		}
		img {
			margin: auto;
			display: block;
			height: 100px;
			width: 100px;
			object-fit: cover;
		}
	}
`;
