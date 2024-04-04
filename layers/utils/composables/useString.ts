/**
 * @description String function utils.
 * @return useString
 */
export function useString() {
	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	return {
		capitalize,
	}
}
