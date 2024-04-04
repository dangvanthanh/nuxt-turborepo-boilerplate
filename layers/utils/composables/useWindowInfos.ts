const defaultBreakpoints = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
	xl: 1400,
}

type Breakpoints = {
	[key: string]: number
}

export interface WindowInfos {
	width: Ref<number>
	height: Ref<number>
	scroll: Ref<{ x: number; y: number }>
	breakpoint: Ref<string>
	greaterThan: (breakpointName: string) => boolean
	lessThan: (breakpointName: string) => boolean
	equalTo: (breakpointName: string) => boolean
	between: (min: string, max: string) => boolean
	greaterThanOrEqual: (breakpointName: string) => boolean
	lessThanOrEqual: (breakpointName: string) => boolean
}

/**
 * @description Reactive size, width, height and breakpoint related to the window.
 * @param breakpoints
 * @return WindowInfos
 */
export function useWindowInfos(breakpoints: Breakpoints = defaultBreakpoints) {
	const keys = Object.keys(breakpoints).reverse()
	const values = Object.values(breakpoints).reverse()

	const getBreakpoint = (width: number) => {
		const index = values.findIndex((value) => width >= value)
		return index !== -1 ? keys[index] : keys[keys.length - 1]
	}

	const width = ref(0)
	const height = ref(0)
	const scroll = ref({ x: 0, y: 0 })
	const breakpoint = ref(getBreakpoint(width.value))

	const handleResize = () => {
		width.value = window.innerWidth
		height.value = window.innerHeight
		breakpoint.value = getBreakpoint(width.value)
	}

	onMounted(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		window.addEventListener('scroll', () => {
			scroll.value = { x: window.scrollX, y: window.scrollY }
		})
	})

	onUnmounted(() => {
		window.removeEventListener('resize', handleResize)
		window.removeEventListener('scroll', () => {
			scroll.value = { x: window.scrollX, y: window.scrollY }
		})
	})

	const greaterThan = (breakpointName: string) => {
		const breakpointIndex = keys.indexOf(breakpointName)
		return breakpointIndex > -1 ? values[breakpointIndex] <= width.value : false
	}

	const lessThan = (breakpointName: string) => {
		const breakpointIndex = keys.indexOf(breakpointName)
		return breakpointIndex > -1 ? values[breakpointIndex] > width.value : false
	}

	const equalTo = (breakpointName: string) => {
		return breakpoint.value === breakpointName
	}

	const between = (min: string, max: string) => {
		return greaterThan(min) && lessThan(max)
	}

	const greaterThanOrEqual = (breakpointName: string) => {
		return greaterThan(breakpointName) || equalTo(breakpointName)
	}

	const lessThanOrEqual = (breakpointName: string) => {
		return lessThan(breakpointName) || equalTo(breakpointName)
	}

	return {
		width,
		height,
		scroll,
		breakpoint,
		greaterThan,
		lessThan,
		equalTo,
		between,
		greaterThanOrEqual,
		lessThanOrEqual,
	}
}
