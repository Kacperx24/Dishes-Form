import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

interface NotificationProps {
	message: string
	type: 'success' | 'error'
}

const fadeOut = keyframes`
	0% {
	top: 100%;
}

	10% {
	top: calc(100% - 100px);
}

	90% {
	top: calc(100% - 100px);
}

	100% {
	top: 100%;

  }
`

const StyledNotification = styled.div<{ type: 'success' | 'error' }>`
	position: fixed;
	right: 20px;
	background-color: ${({ type }) => (type === 'success' ? '#1cc44e' : 'red')};
	color: #fff;
	padding: 14px 22px;
	font-size: 16px;
	border-radius: 4px;
	z-index: 10;
	animation: ${fadeOut} 3s forwards;
	@media (min-width: 640px) {
		right: 60px;
	}
`

const Notification: FC<NotificationProps> = ({ message, type }) => {
	return <StyledNotification type={type}>{message}</StyledNotification>
}

export default Notification
