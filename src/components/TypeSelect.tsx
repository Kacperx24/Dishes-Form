import styled from 'styled-components'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FC } from 'react'
import { FormData } from '../types'

type TypeSelectProps = {
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
}
const SelectField = styled.select`
	width: 180px;
	border-right: 10px solid #f2f4f6;
	cursor: pointer;
`

const Option = styled.option`
	font-size: 14px;
	padding: 10px;
`

const values = ['Pizza', 'Soup', 'Sandwich']

const TypeSelect: FC<TypeSelectProps> = ({ register, errors }) => {
	return (
		<div>
			<label>Food type</label>
			<SelectField
				id='type'
				{...register('type', { required: 'Type is required' })}
			>
				<option value='' disabled selected>
					Select type
				</option>
				{values.map(value => (
					<Option key={value} value={value.toLowerCase()}>
						{value}
					</Option>
				))}
			</SelectField>
		</div>
	)
}

export default TypeSelect
