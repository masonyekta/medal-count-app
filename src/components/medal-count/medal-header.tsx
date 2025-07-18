'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const medalButtons = [
	{ key: 'gold', className: 'bg-yellow-400', aria: 'Sort by gold medals' },
	{ key: 'silver', className: 'bg-gray-400', aria: 'Sort by silver medals' },
	{ key: 'bronze', className: 'bg-amber-900', aria: 'Sort by bronze medals' },
]

const MedalHeader = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const currentSort = searchParams.get('sort') || 'gold'

	// Handle sort button click and update the URL query parameters
	const handleSortClick = (sortType: string) => {
		const params = new URLSearchParams(searchParams)
		params.set('sort', sortType)
		router.push(`?${params.toString()}`)
	}

	return (
		<div className="grid grid-cols-7 gap-4 pb-4 border-b-2 border-gray-300">
			<div></div>
			<div></div>
			<div></div>
			{medalButtons.map(({ key, className, aria }) => (
				<div className="flex justify-center" key={key}>
					<button
						onClick={() => handleSortClick(key)}
						className={`w-6 h-6 rounded-full cursor-pointer ${className} ${
							currentSort === key ? 'border-2 border-gray-950' : ''
						}`}
						aria-label={aria}
					/>
				</div>
			))}
			<button
				onClick={() => handleSortClick('total')}
				className={`text-center text-sm text-gray-600 font-medium cursor-pointer ${
					currentSort === 'total' ? 'border-t-1 border-gray-950' : ''
				}`}
				aria-label="Sort by total medals"
			>
				TOTAL
			</button>
		</div>
	)
}

export default MedalHeader
