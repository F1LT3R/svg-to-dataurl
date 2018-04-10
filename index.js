const svgToDataURL = svgStr => {
	const encoded = encodeURIComponent(svgStr)
		.replace(/'/g, '%27')
		.replace(/"/g, '%22')

	const header = 'data:image/svg+xml,'
	const dataUrl = header + encoded

	return dataUrl
}

module.exports = svgToDataURL
