// App Features
import { AppLanguage } from '@/features/app/enums/language.enum'

export interface IAppSliceState {
	isInitialized: boolean
	counter: number
	language: AppLanguage
}

export enum AppSliceHandleCounter {
	INCREASE = 'INCREASE',
	DECREASE = 'DECREASE'
}

export interface IAppSliceHandleCounterAttrs {
	type: AppSliceHandleCounter
}
