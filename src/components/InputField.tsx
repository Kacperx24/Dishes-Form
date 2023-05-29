import { FC } from 'react'

import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FormData } from '../types'
import styled from 'styled-components'
import ErrorMessage from './ui/ErrorMessage'

type InputFieldProps = {
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
	name: keyof FormData
	width?: number
	type?: 'number' | 'text'
}

const Wrapper = styled.div`
	width: fit-content;
`

const Input = styled.input<{ width: number }>`
	width: ${({ width }) => `${width}px`};
	${({ type }) => type === 'number' && '12px 8px'}
`

const LabelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`

const InputField: FC<InputFieldProps> = ({
	register,
	errors,
	name,
	width = 260,
	type = 'text',
}) => {
	const capitalizeFirstLetter = (value: string | undefined) =>
		value ? value.charAt(0).toUpperCase() + value.slice(1) : ''

	return (
		<Wrapper>
			<LabelWrapper>
				<label>{capitalizeFirstLetter(name)}</label>
				{errors[name] ? (
					<ErrorMessage>{errors[name].message}</ErrorMessage>
				) : null}
			</LabelWrapper>
			<Input
				width={width}
				type={type}
				min={0}
				step={name === 'diameter' ? 0.1 : 1}
				{...register(name, {
					required: 'Required',
				})}
			/>
		</Wrapper>
	)
}

export default InputField
