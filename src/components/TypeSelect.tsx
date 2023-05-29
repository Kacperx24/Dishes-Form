import styled from 'styled-components'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FC } from 'react'
import { FormData } from '../types'
import ErrorMessage from './ui/ErrorMessage'

type TypeSelectProps = {
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
}

const Wrapper = styled.div`
	width: fit-content;
`

const SelectField = styled.select`
	width: 180px;
	border-right: 10px solid #f2f4f6;
	cursor: pointer;
`

const LabelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`

const Option = styled.option`
	font-size: 14px;
	padding: 10px;
`

const values = ['Pizza', 'Soup', 'Sandwich']

const TypeSelect: FC<TypeSelectProps> = ({ register, errors }) => {
	return (
		<Wrapper>
			<LabelWrapper>
				<label>Food type</label>
				{errors.type ? <ErrorMessage>Required</ErrorMessage> : null}
			</LabelWrapper>

			<SelectField
				id='type'
				{...register('type', { required: 'Type is required' })}
				defaultValue=''
			>
				<option value='' disabled>
					Select type
				</option>
				{values.map(value => (
					<Option key={value} value={value.toLowerCase()}>
						{value}
					</Option>
				))}
			</SelectField>
		</Wrapper>
	)
}

export default TypeSelect
