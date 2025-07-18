import { NextResponse } from 'next/server'

import medals from '@/data/api/medals.json'

export async function GET() {
	try {
		return NextResponse.json(medals, {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			},
		})
	} catch (error) {
		console.error('Error reading JSON file:', error)

		return NextResponse.json({ error: 'Failed to read data file' }, { status: 500 })
	}
}
