import { ChildProp } from '@/types'
import Footer from './_components/footer'
import NavBar from './_components/navbar'

function layout({ children }: ChildProp) {
	return (
		<div>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default layout
