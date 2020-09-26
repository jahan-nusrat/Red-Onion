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
`;
