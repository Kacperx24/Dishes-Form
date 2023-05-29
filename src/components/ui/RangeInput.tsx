import styled from 'styled-components'

const RangeInput = styled.input`
	margin: 24px 0 12px;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	width: 180px;
	height: 4px;
	background-color: #ffaa48;
	outline: none;
	border-radius: 2px;
	padding: 0;

	&::-webkit-slider-thumb {
		appearance: none;
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		background: #ffaa48;
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	&::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background-color: #ffaa48;
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	&:hover::-moz-range-thumb {
		background-color: #ffaa48;
	}
`

export default RangeInput
