const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit);
}

export default getPageCount;

export const getPagesArray = (totalPages) => {
	let result = [];
	for (let i = 0; i < totalPages; i++) {
		result.push(i + 1);
	}
	return result;
}