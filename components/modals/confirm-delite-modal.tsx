'use client'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { ReactNode } from 'react'
import { Button } from '../ui/button'

interface Props {
	onConfirm: () => void
	children: ReactNode
}

function ConfirmDeliteModal({ onConfirm, children }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button onClick={onConfirm} variant={'destructive'}>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default ConfirmDeliteModal
