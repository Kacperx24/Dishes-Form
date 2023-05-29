import axios, { AxiosError } from 'axios'
import { PizzaTypeData, SandwichTypeData, SoupTypeData } from '../types'

const url = 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/'

const sendDish = async (
	data: PizzaTypeData | SoupTypeData | SandwichTypeData
) => {
	try {
		const res = await axios.post(url, data, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return res
	} catch (err) {
		if (axios.isAxiosError(err)) {
			const serverError = err as AxiosError
			if (serverError && serverError.response) {
				console.error(
					`Server responded with status code ${serverError.response.status}`
				)
				console.error(`Error message: ${serverError.response.data}`)
			}
		} else {
			console.error(`Network error: ${(err as Error).message}`)
		}
		throw err
	}
}

export const sendPizzaTypeDish = (data: PizzaTypeData) => sendDish(data)
export const sendSoupTypeDish = (data: SoupTypeData) => sendDish(data)
export const sendSandwichTypeDish = (data: SandwichTypeData) => sendDish(data)
