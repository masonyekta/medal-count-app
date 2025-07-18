import Image from 'next/image'

import { getFlagPosition } from '@/lib/utils'

import type { FlagProps } from '@/types/medals'

const CountryFlag = ({ countryCode }: FlagProps) => {
	const flagPosition = getFlagPosition(countryCode)

	return (
		<div
			className="relative w-[28px] h-[17px] overflow-hidden"
			style={{ display: 'inline-block' }}
		>
			<Image
				src="/images/flags.png"
				alt={`Flag of ${countryCode}`}
				width={28}
				height={221}
				style={{
					objectFit: 'none',
					objectPosition: flagPosition,
					position: 'absolute',
					top: 0,
					left: 0,
				}}
				draggable={false}
				unoptimized
				priority
			/>
		</div>
	)
}

export default CountryFlag
