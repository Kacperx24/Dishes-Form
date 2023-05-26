import styled from 'styled-components'
import { FC } from 'react'

import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FormData } from '../types'

type NameInputProps = {
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
}

const Input = styled.input`
	background-color: #f2f4f6;
	font-size: 15px;
	color: #222;
`

const NameInput: FC<NameInputProps> = ({ register, errors }) => {
	return (
		<div>
			<label>Name</label>
			<Input {...register('name', { required: 'Name is required' })} />
		</div>
	)
}

export default NameInput
