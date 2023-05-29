import React from 'react'
import FormCard from './ui/FormCard'
import PreparationTimeInput from './PreparationTimeInput'
import styled from 'styled-components'
import TypeSelect from './TypeSelect'
import { useForm } from 'react-hook-form'
import { FormData } from '../types'
import AdditionalFields from './AdditionalFields'
import InputField from './InputField'

const FormContent = styled.form`
	/* width: 320px; */
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 0 15px;
`
const SubmitButton = styled.button`
	margin: 32px auto 0;
	width: fit-content;
	border-radius: 8px;
	font-weight: 500;
	font-size: 14px;
	cursor: pointer;
	background-color: #5082f0;
	transition: 0.1s ease-in-out;
	color: #ffffff;
	padding: 12px 20px;
`

const Form = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<FormData>()

	const typeValue = watch('type')

	const onSubmit = (data: FormData) => console.log(data)

	return (
		<FormCard title='Create a dish'>
			<FormContent onSubmit={handleSubmit(onSubmit)}>
				<InputField
					register={register}
					errors={errors}
					name='name'
					errorMessage='Name is required'
				/>
				<PreparationTimeInput
					register={register}
					errors={errors}
					setValue={setValue}
				/>
				<TypeSelect register={register} errors={errors} />
				{typeValue && (
					<AdditionalFields
						type={typeValue}
						register={register}
						errors={errors}
						watch={watch}
					/>
				)}
				<SubmitButton>Send data</SubmitButton>
			</FormContent>
		</FormCard>
	)
}

export default Form
