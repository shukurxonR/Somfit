'use client'
import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'
import Header from '../_components/header'

function Page() {
	const { resolvedTheme } = useTheme()
	return (
		<>
			<Header title='Sattings' description='Manage your accaount settings' />
			<div className='mt-6'>
				<UserProfile
					appearance={{
						baseTheme: resolvedTheme === 'dark' ? dark : undefined,
						variables: {
							colorBackground: resolvedTheme === 'dark' ? '#020817' : '#fff',
						},
					}}
				/>
			</div>
		</>
	)
}

export default Page
