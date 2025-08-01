import { Suspense } from 'react'

import { MedalTable } from '@/components/medal-count'

export default async function Home() {
	// Fetch medal data
	const medalData = await getMedalData()

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen md:p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Suspense fallback={<div>Loading medal table...</div>}>
					<MedalTable medalData={medalData} />
				</Suspense>
			</main>
		</div>
	)
}

async function getMedalData() {
	const res = await fetch(`${process.env.API_URL}/medals`, {
		next: { revalidate: 60 },
	})

	if (!res.ok) return []
	return res.json()
}
