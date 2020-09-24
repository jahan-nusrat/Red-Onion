import styled from 'styled-components';

export const SingleItem = styled.div`
	font-family: 'Montserrat', sans-serif;
	transition: all 0.4s linear;

	.item-img {
		height: 440px;
		width: 440px;
		object-fit: cover;
	}
	h1 {
		text-transform: capitalize;
		margin-bottom: 1rem;
	}
	p {
		color: #7a7a7a;
		line-height: 1.8;
	}
	.cart-item {
		position: relative;
		margin-top: 1.5rem;
		h2 {
			font-family: 'Bebas Neue', cursive;
			letter-spacing: 2px;
			span {
				position: absolute;

				left: 30%;
				border: 1px solid #bbbbbb;
				padding: 0.5rem;
				border-radius: 30px;
				font-size: 1rem;
			}
			input {
				text-align: center;
				font-size: 1.2rem;
				width: 60px;
				border: 1px solid transparent;
			}
			.fa-icon {
				margin: 0 0.8rem;
				cursor: pointer;
				font-family: 'Montserrat', sans-serif;
			}
			.plus {
				color: #f91944;
			}
		}
	}
	.btn-custom {
		background-color: #f91944;
		margin-top: 1.6rem;
		border-radius: 30px;
		color: #ffffff;
		.fa-cart {
			margin-right: 0.5rem;
			margin-top: -5px;
		}
	}
	.sub-menu {
		margin: 2rem;
		height: 150px;
		width: 445px;
		.single-img {
			width: 150px;
			height: 150px;
			object-fit: cover;
			margin: 0 1rem;
			cursor: pointer;
		}
		.fa-angle {
			font-size: 1.3rem;
			color: #f91944;
		}
	}
`;

export const BtnStyle = styled.div`
	font-family: 'Bebas Neue', cursive;

	button {
		font-size: 1.2rem;
		letter-spacing: 1.5px;
		&:focus {
			box-shadow: 0 0 0 0 transparent;
		}
	}
	.btn {
		margin: 2rem auto;
		border-radius: 0px;
	}
	.active-0 .breakfast {
		color: #f91944;
		border-bottom: 2px solid #f91944;
		transition: all 0.3s linear;
	}
	.active-1 .lunch {
		color: #f91944;
		border-bottom: 2px solid #f91944;
		transition: all 0.3s linear;
	}
	.active-2 .dinner {
		color: #f91944;
		border-bottom: 2px solid #f91944;
		transition: all 0.3s linear;
	}
	.checkout {
		text-align: center;
		.checkout-btn {
			width: 250px;
			border-radius: 5px;
			background-color: #797979;
			color: #ffffff;
		}
	}
`;
