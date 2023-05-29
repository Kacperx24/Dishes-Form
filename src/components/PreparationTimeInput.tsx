import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { FormData } from '../types'

type TimePreparationInputProps = {
	setValue: UseFormSetValue<FormData>
	register: UseFormRegister<FormData>
	errors: FieldValues['errors']
}

const Unit = styled.span`
	font-weight: 500;
	font-size: 15px;
	margin-left: 2px;
	margin-right: 8px;
`

const Input = styled.input`
	width: 50px;
	padding: 12px 8px;
	text-align: center;
`

const PreparationTimeInput: FC<TimePreparationInputProps> = ({
	register,
	setValue,
}) => {
	const [preparationTime, setPreparationTime] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
	})

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		type: 'hours' | 'minutes' | 'seconds'
	) => {
		let input = event.target.value

		if (input.length > 2) return

		let value = parseInt(event.target.value)

		if (type === 'hours' && (value < 0 || value > 23)) return
		if (type !== 'hours' && (value < 0 || value > 59)) return

		setPreparationTime(prev => ({
			...prev,
			[type]: input,
		}))
	}

	const handleOnBlur = (
		event: React.ChangeEvent<HTMLInputElement>,
		type: string
	) => {
		const value = event.target.value

		if (value[0] === '0') return

		if (value === '') setPreparationTime(prev => ({ ...prev, [type]: '00' }))

		if (parseInt(value) <= 9)
			setPreparationTime(prev => ({ ...prev, [type]: `0${value}` }))
	}

	useEffect(() => {
		const { hours, minutes, seconds } = preparationTime
		setValue('preparation_time', `${hours}:${minutes}:${seconds}`)
	}, [preparationTime, setValue])

	return (
		<div>
			<label>Preparation time</label>
			<div>
				<input
					type='hidden'
					{...register('preparation_time', {
						required: 'Preparation time is required',
					})}
				/>
				<Input
					type='number'
					value={preparationTime.hours}
					onChange={e => handleInputChange(e, 'hours')}
					onBlur={e => handleOnBlur(e, 'hours')}
				/>
				<Unit> h </Unit>
				<Input
					type='number'
					value={preparationTime.minutes}
					onChange={e => handleInputChange(e, 'minutes')}
					onBlur={e => handleOnBlur(e, 'minutes')}
				/>
				<Unit> m </Unit>
				<Input
					type='number'
					value={preparationTime.seconds}
					onChange={e => handleInputChange(e, 'seconds')}
					onBlur={e => handleOnBlur(e, 'seconds')}
				/>
				<Unit> s </Unit>
			</div>
		</div>
	)
}

export default PreparationTimeInput
