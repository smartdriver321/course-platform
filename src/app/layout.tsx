import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
	title: 'Course Platform',
	description: 'Generated Smart Corporation',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className='antialiased'>
					{children}
					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	)
}
