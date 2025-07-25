'use client'
import LanguageMenu from '@/components/shared/lng-menu'
import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
// import { navLinks } from '@/constants/const'
import { navLinks } from '@/constants/const'
import useTranslate from '@/hooks/use-lng'
import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import SearchPanel from './search-panel'

function MobileMenu() {
	const t = useTranslate()
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={'ghost'} size={'sm'}>
					<Menu className='!w-5 !h-5' />
				</Button>
			</SheetTrigger>
			<SheetContent side={'top'}>
				<SheetHeader>
					<SheetTitle>
						<Logo />
					</SheetTitle>
					<Separator />
				</SheetHeader>
				<div className='flex flex-col '>
					{navLinks.map(itm => (
						<Link
							href={`/${itm.route}`}
							key={itm.route}
							className='flex h-12 mt-4 items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20 '
						>
							<itm.icon className='size-5' />
							<span>{t(itm.name)}</span>
						</Link>
					))}
					<LanguageMenu isMobile />
					<div className='flex items-center justify-center gap-2 pt-4'>
						<Button size='icon' variant='ghost'>
							<ShoppingCart />
						</Button>
						<SearchPanel />
						<ModeToggle />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileMenu
