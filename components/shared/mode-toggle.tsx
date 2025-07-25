'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export default function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null // Serverda render bo‘lmasligi uchun

	const isDark = resolvedTheme === 'dark'

	return (
		<Button
			variant='ghost'
			size='sm'
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className='md:h-11 md:w-11 py-2 rounded-sm px-3 text-xs'
			aria-label='Toggle Theme'
		>
			{isDark ? <Sun className='!w-5 !h-5' /> : <Moon className='!w-5 !h-5' />}
		</Button>
	)
}
