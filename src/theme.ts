import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
	font-family: Montserrat;
	box-sizing: border-box;
	padding: 0;
	margin: 0;

}


input,select {
	outline: none;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	padding: 12px 16px;
	background-color: #f2f4f6;
	font-size: 15px;
	color: #222;	

}

label {
	display: block;
	margin-bottom: 10px;
	margin-left: 4px;
	font-size: 13px;
	font-weight: 600;
	color: #525252;
}

button {
	outline: none;
	border: none;
	transition: all.1s ease-in-out;
}

button:active{
	transform: scale(0.97);
}


`
