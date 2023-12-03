import { Outlet } from '@remix-run/react'
import MainNavigation from '~/components/MainNavigation'

export default function NotingLayout() {
	return (
		<div className="flex flex-col h-screen overflow-hidden">
			<header className="bg-secondary h-1/6">
				<MainNavigation />
			</header>
			<Outlet />
		</div>
	)
}
