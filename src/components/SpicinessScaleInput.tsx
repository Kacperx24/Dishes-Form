import { FC } from 'react'
import styled from 'styled-components'
import { UseFormRegister, UseFormWatch } from 'react-hook-form'

import { FormData } from '../types'
import RangeInput from './ui/RangeInput'

interface SpicinessScaleInputProps {
	register: UseFormRegister<FormData>
	watch: UseFormWatch<FormData>
}

const SliderWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const SpicinessInfo = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #525252;
	span {
		margin: 0 2px 0 4px;
		color: #ffaa48;
		font-size: 19px;
	}
`

const SpicinessScaleInput: FC<SpicinessScaleInputProps> = ({
	register,
	watch,
}) => {
	const spicinessScale = watch('spiciness_scale', 5)

	return (
		<SliderWrapper>
			<SpicinessInfo>
				Spiciness: <span>{spicinessScale}</span>
			</SpicinessInfo>
			<RangeInput
				type='range'
				min='0'
				max='10'
				step='1'
				{...register('spiciness_scale', { required: 'Required' })}
			/>
		</SliderWrapper>
	)
}

export default SpicinessScaleInput
