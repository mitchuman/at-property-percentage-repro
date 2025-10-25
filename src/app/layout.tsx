import type { Metadata } from 'next'
import './app.css'

export const metadata: Metadata = {
	title: '@property percentage issue reproduction',
}

export default function ({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<main className="grid min-h-svh place-content-center gap-4">
					{children}
				</main>
			</body>
		</html>
	)
}
