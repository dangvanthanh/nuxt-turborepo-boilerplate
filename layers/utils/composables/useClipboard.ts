/**
 * @description Copy to clipboard
 * @return useClipboard
 */
export function useClipboard() {
	const copyToClipboard = (str: string) => {
		const input = document.createElement('input')
		input.setAttribute('value', str)
		document.body.appendChild(input)
		input.select()
		document.execCommand('copy')
		document.body.removeChild(input)
	}

	return {
		copyToClipboard,
	}
}
