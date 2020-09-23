import styled from 'styled-components';

export const SingleProduct = styled.div`
	background-color: #f5f5f5;
	font-family: 'Montserrat', sans-serif;
	padding: 0.3rem 0.8rem;
	border-radius: 10px;
	margin: 1.2rem 0;
	.single-item-img {
		width: 100px;
		.single-img {
			width: 100%;
			display: block;
			margin: auto;
		}
	}
	.single-item-detail {
		flex: 1;
		padding: 0.5rem 0.8rem;
		h5 {
			font-size: 1rem;
		}
		h4 {
			font-size: 1.1rem;
			color: #f91944;
		}
		p {
			font-size: 0.9rem;
		}
	}
	.single-quantity {
		width: 100px;
		input {
			width: 40px;
			margin: 0 0.5rem;
		}
		.fa-icon {
			font-size: 0.9rem;
			color: #a4a4a4;
			cursor: pointer;
		}
		.plus {
			color: #f91944;
		}
	}
`;
