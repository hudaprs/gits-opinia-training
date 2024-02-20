// Redux Toolkit
import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react'

// Axios
import defaultAxios, { AxiosRequestConfig, AxiosError } from 'axios'

// Env
import { API_BASE } from '@env'

// Plugins
// import { IRootState } from '@/plugins/redux/reducer'

const axios = defaultAxios.create({
	baseURL: API_BASE,
	timeout: 5000
})

// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error)
	}
)

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response
	},
	function (error: AxiosError) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error)
	}
)

const axiosBaseQuery =
	(): BaseQueryFn<string | AxiosRequestConfig, unknown, unknown> =>
	async payload => {
		try {
			let result
			if (typeof payload === 'string') {
				result = await axios.get(payload)
			} else {
				const { url, method = 'GET', data, params, ...rest } = payload
				result = await axios({
					url,
					method,
					data,
					params,
					...rest
				})
			}

			return { data: result.data }
		} catch (axiosError) {
			const err = axiosError as AxiosError
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message
				}
			}
		}
	}

const baseQuery = axiosBaseQuery()

export const emptySplitApi = createApi({
	baseQuery,
	endpoints: () => ({})
})
