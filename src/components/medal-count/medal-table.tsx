'use client'

import { useSearchParams } from 'next/navigation'

import { CountryFlag } from '@/components/country-flag'
import { MedalHeader } from '@/components/medal-count'
import { ErrorMessage } from '@/components/messages'

import { getMedals } from '@/lib/utils'

import type { MedalResult, MedalTableProps } from '@/types/medals'

const MedalTable = ({ medalData }: MedalTableProps) => {
	// Search the query parameter for the sort value
	const searchParams = useSearchParams()
	const sort = searchParams.get('sort') ?? 'gold'

	// Get medal data with rank
	const medalDataWithRank = getMedals(medalData, sort)

	if (medalData.length === 0) return <ErrorMessage />

	return (
		<div className="max-w-2xl mx-auto">
			<h1 className="text-2xl font-light text-gray-500 mb-8 tracking-wide">MEDAL COUNT</h1>
			<div className="overflow-hidden">
				<MedalHeader />
				<div className="divide-y divide-gray-200">
					{medalDataWithRank.map((country: MedalResult) => (
						<div
							key={country.code}
							className="grid grid-cols-7 gap-4 py-2 items-center"
						>
							<div className="col-span-3 flex items-center gap-2 text-gray-800 font-medium">
								<span className="w-6 text-center">{country.rank}</span>
								<CountryFlag countryCode={country.code} />
								<span className="ml-2">{country.code}</span>
							</div>
							<div className="text-center text-gray-800 font-medium">
								{country.gold}
							</div>
							<div className="text-center text-gray-800 font-medium">
								{country.silver}
							</div>
							<div className="text-center text-gray-800 font-medium">
								{country.bronze}
							</div>
							<div className="text-center text-gray-800 font-bold">
								{country.total}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MedalTable
