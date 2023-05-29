import FormCard from './ui/FormCard'
import PreparationTimeInput from './PreparationTimeInput'
import styled from 'styled-components'
import TypeSelect from './TypeSelect'
import { useForm } from 'react-hook-form'
import { FormData } from '../types'
import AdditionalFields from './AdditionalFields'
import InputField from './InputField'
import {
	sendPizzaTypeDish,
	sendSandwichTypeDish,
	sendSoupTypeDish,
} from '../api'
import useNotification from '../hooks/useNotification'
import { useState } from 'react'

const FormContent = styled.form`
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
	const [preparationTime, setPreparationTime] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
	})

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormData>()

	const { showNotification } = useNotification()

	const typeValue = watch('type')

	const onSubmit = async (data: FormData) => {
		const {
			name,
			preparation_time,
			type,
			no_of_slices,
			diameter,
			spiciness_scale,
			slices_of_bread,
		} = data || {}

		const baseData = { name, preparation_time, type }

		try {
			let response
			if (data.type === 'pizza') {
				response = await sendPizzaTypeDish({
					...baseData,
					no_of_slices,
					diameter,
				})
			} else if (data.type === 'soup') {
				response = await sendSoupTypeDish({ ...baseData, spiciness_scale })
			} else if (data.type === 'sandwich') {
				response = await sendSandwichTypeDish({ ...baseData, slices_of_bread })
			}
			if (response && response.status === 200) {
				showNotification({
					message: 'Dish has been added successfully',
					type: 'success',
				})
				reset()
				setPreparationTime({
					hours: '00',
					minutes: '00',
					seconds: '00',
				})
			}
		} catch (error) {
			console.error(error)
			showNotification({ message: 'Something went wrong', type: 'error' })
		}
	}

	return (
		<FormCard title='Create a dish'>
			<FormContent onSubmit={handleSubmit(onSubmit)}>
				<InputField register={register} errors={errors} name='name' />
				<PreparationTimeInput
					register={register}
					errors={errors}
					setValue={setValue}
					preparationTime={preparationTime}
					setPreparationTime={setPreparationTime}
				/>
				<TypeSelect register={register} errors={errors} />
				{typeValue ? (
					<AdditionalFields
						type={typeValue}
						register={register}
						errors={errors}
						watch={watch}
					/>
				) : null}

				<SubmitButton>Send data</SubmitButton>
			</FormContent>
		</FormCard>
	)
}

export default Form
