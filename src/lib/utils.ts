import type { MedalData, MedalResult } from '@/types/medals'

/**
 * Get sorted medals based on the sort parameter
 * If no parameter is provided, sort by gold medals
 * @param medals
 * @param sort
 * @param limit
 * @returns sortedMedals
 */
export function getMedals(
	medals: MedalData[],
	sort: string = 'gold',
	limit: number = 10
): MedalResult[] {
	const olympicCompare = (a: MedalResult, b: MedalResult): number => {
		return b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze
	}

	// Create a new array with total medal count
	const sortedMedals: MedalResult[] = medals.map((medal) => ({
		...medal,
		total: medal.gold + medal.silver + medal.bronze,
		rank: 0,
	}))

	// Sort based on the sort parameter
	sortedMedals.sort((a, b) => {
		switch (sort.toLowerCase()) {
			case 'gold':
				return b.gold - a.gold || olympicCompare(a, b)
			case 'silver':
				return b.silver - a.silver || b.gold - a.gold || b.bronze - a.bronze
			case 'bronze':
				return b.bronze - a.bronze || olympicCompare(a, b)
			case 'total':
				return b.total - a.total || olympicCompare(a, b)
			default:
				return olympicCompare(a, b)
		}
	})

	// Update the rank
	sortedMedals.forEach((medal, index) => {
		medal.rank = index + 1
	})

	return sortedMedals.slice(0, limit)
}

/**
 * Get flag position from sprite image which has flags
 * @param countryCode
 * @param flagHeight
 * @returns flag position
 */
export const getFlagPosition = (countryCode: string, flagHeight: number = 17) => {
	const countries = [
		'AUT',
		'BLR',
		'CAN',
		'CHN',
		'FRA',
		'GER',
		'ITA',
		'NED',
		'NOR',
		'RUS',
		'SUI',
		'SWE',
		'USA',
	]

	const index = countries.indexOf(countryCode.toUpperCase())

	if (index === -1) {
		console.warn(`Country code "${countryCode}" not found in sprite`)
		return '0% 0%'
	}

	const y = index * flagHeight
	return `0px -${y}px`
}
