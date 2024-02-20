// Types
import {
	IAppSliceHandleCounterAttrs,
	AppSliceHandleCounter,
	IAppSliceState
} from './types'

// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
import { IRootState } from '@/plugins/redux/reducer'

// App Features
import { AppLanguage } from '@/features/app/enums/language.enum'

// i18n
import i18n from 'i18next'

const initialState: IAppSliceState = {
	isInitialized: false,
	counter: 0,
	language: AppLanguage.EN
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		app_HANDLE_COUNTER: (
			state,
			{ payload }: PayloadAction<IAppSliceHandleCounterAttrs>
		): void => {
			if (payload.type === AppSliceHandleCounter.INCREASE) {
				state.counter = state.counter + 1
			}

			if (payload.type === AppSliceHandleCounter.DECREASE) {
				state.counter = state.counter -= 1
			}
		},
		app_HANDLE_LANGUAGE: (
			state,
			{ payload }: PayloadAction<AppLanguage>
		): void => {
			state.language = payload
			i18n.changeLanguage(payload)
		},
		app_HANDLE_INITIALIZE: (
			state,
			{ payload }: PayloadAction<boolean>
		): void => {
			state.isInitialized = payload
		}
	}
})

// Actions / Mutations
export const {
	app_HANDLE_COUNTER,
	app_HANDLE_LANGUAGE,
	app_HANDLE_INITIALIZE
} = appSlice.actions

// Getters
export const appGetInitialized = (state: IRootState) => state.app.isInitialized
export const appGetCounter = (state: IRootState) => state.app.counter
export const appGetLanguage = (state: IRootState) => state.app.language

export default appSlice.reducer
