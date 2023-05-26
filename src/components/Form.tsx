import React from 'react'
import FormCard from './ui/FormCard'
import NameInput from './NameInput'
import PreparationTimeInput from './PreparationTimeInput'
import styled from 'styled-components'
import TypeSelect from './TypeSelect'
import { useForm } from 'react-hook-form'
import { FormData } from '../types'

const FormContent = styled.form`
	/* width: 320px; */
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 0 15px;
`
const SubmitButton = styled.button`
	margin: 50px auto 0;
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
		formState: { errors },
	} = useForm<FormData>()

	const onSubmit = (data: FormData) => console.log(data)

	return (
		<FormCard title='Create a dish'>
			<FormContent onSubmit={handleSubmit(onSubmit)}>
				<NameInput register={register} errors={errors} />
				<PreparationTimeInput
					register={register}
					errors={errors}
					setValue={setValue}
				/>
				<TypeSelect register={register} errors={errors} />
				<SubmitButton>Send data</SubmitButton>
			</FormContent>
		</FormCard>
	)
}

export default Form
