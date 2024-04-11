/**
 * @description Apply theme
 * @return useTheme
 */
export function useTheme() {
	const theme = ref('')

	const setTheme = (value: string) => {
		theme.value = value
	}

	return {
		theme,
		setTheme,
	}
}
