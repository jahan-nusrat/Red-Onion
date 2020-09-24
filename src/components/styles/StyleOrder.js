import styled from 'styled-components';

export const Order = styled.div`
	font-family: 'Montserrat', sans-serif;
	padding: 3rem 0;

	p {
		font-size: 0.9rem;
		color: #9e9e9e;
	}
	.map {
		width: 100%;
		height: 500px;
		object-fit: cover;
		border-radius: 10px;
		border: 1px solid #aaa;
	}
	.left-container {
		background-color: #f5f5f5;
		padding: 2rem;
		border-radius: 10px;
		.rider {
			height: 100px;
			object-fit: cover;
			margin-left: 2rem;
		}
		.order-location {
			background-color: #ffffff;
			margin-top: 1.5rem;
			padding: 1rem;
			border-radius: 8px;
			margin-bottom: 0.8rem;
			.circle {
				font-size: 0.63rem;
				color: #f91944;
				margin-right: 0.6rem;
				margin-top: -2px;
			}
			p {
				margin-left: 1.2rem;
			}
			.shop-address {
				p {
					margin-bottom: 0;
				}
			}
		}
		.estimated-delivery {
		}
		.rider-info {
			background-color: #ffffff;
			padding: 0.8rem;
			border-radius: 8px;
			.helmet {
				height: 60px;
				width: 60px;
			}
			.my-rider {
				margin-left: 1.5rem;
				h6 {
					margin-bottom: 0.2rem;
				}
				p {
					margin-bottom: 0;
				}
			}
		}
		.contact-btn {
			width: 100%;
			background-color: #f91944;
			font-size: 0.9rem;
			color: #ffffff;
			margin-top: 1.3rem;
		}
	}
`;
