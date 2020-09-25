import styled from 'styled-components';

export const ServiceContainer = styled.div`
	padding-bottom: 3rem;
	font-family: 'Montserrat', sans-serif;
	p {
		color: #1d2225;
		font-size: 0.9rem;
	}
	.section-title {
		width: 500px;
		p {
			margin: 1.4rem 0;
			line-height: 1.6;
		}
	}
	.service-box {
		.content {
			padding: 0.4rem 1rem;
			.title {
				margin-top: 1.4rem;
				img {
					height: 30px;
				}
				h5 {
					margin-left: 0.8rem;
				}
			}
			p {
				margin-top: 0.4rem;
				margin-bottom: 0.4rem;
			}
			button {
				font-size: 0.85rem;
				padding: 0;
				color: #f91944;
				.arrow {
					color: #7ac948;
					margin-left: 0.8rem;
					font-size: 1rem;
				}
			}
		}
	}
`;
