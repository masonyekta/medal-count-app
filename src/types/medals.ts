interface MedalData {
	code: string
	gold: number
	silver: number
	bronze: number
}

interface MedalResult extends MedalData {
	rank: number
	total: number
}

interface MedalTableProps {
	medalData: MedalData[]
}

interface FlagProps {
	countryCode: string
}

export type { MedalData, MedalResult, MedalTableProps, FlagProps }
