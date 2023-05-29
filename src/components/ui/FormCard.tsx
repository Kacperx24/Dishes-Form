import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface FormCardProps {
	children: ReactNode
	title: string
}

const Container = styled.div`
	background-color: #fff;
	/* border: 2px solid #7e70ff75; */
	border-radius: 16px;
	padding: 25px 10px 40px;
	width: 400px;
	max-width: 90%;
	max-height: 90%;
	box-shadow: 0px 4px 16px 0px #2d2d2d57;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 640px) {
		padding: 25px 50px 40px;
	}
`
const Title = styled.h1`
	color: #363636;
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 40px;
	letter-spacing: -0.2px;
`

const FormCard: FC<FormCardProps> = ({ children, title }) => {
	return (
		<Container>
			<Title>{title}</Title>
			{children}
		</Container>
	)
}

export default FormCard
