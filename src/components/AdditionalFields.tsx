import React, { FC } from 'react'
import { UseFormRegister, FieldValues, UseFormWatch } from 'react-hook-form'
import { FormData } from '../types'
import InputField from './InputField'
import styled from 'styled-components'
import SpicinessScaleInput from './SpicinessScaleInput'

interface AdditionalFieldsProps {
	type: string
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
	watch: UseFormWatch<FormData>
}

const FlexWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`

const AdditionalFields: FC<AdditionalFieldsProps> = ({
	type,
	register,
	errors,
	watch,
}) => {
	if (type === 'pizza')
		return (
			<FlexWrapper>
				<InputField
					register={register}
					errors={errors}
					name='no_of_slices'
					errorMessage='Number of slices is required'
					width={50}
					type='number'
				/>
				<InputField
					register={register}
					errors={errors}
					name='diameter'
					errorMessage='Diameter is required'
					width={65}
					type='number'
				/>
			</FlexWrapper>
		)

	if (type === 'soup')
		return <SpicinessScaleInput register={register} watch={watch} />

	if (type === 'sandwich')
		return (
			<InputField
				register={register}
				errors={errors}
				name='slices_of_bread'
				errorMessage='Slices of bread are required'
				width={50}
				type='number'
			/>
		)

	return <div>AdditionalField</div>
}

export default AdditionalFields
