import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getUserFromSession } from '~/data/auth.server'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Write For Life' },
		{
			name: 'description',
			content:
				'a place for writing, remembering, noting, and everything that comes with it!',
		},
	]
}

export const loader = async ({
	request,
}: LoaderFunctionArgs): Promise<String | null> => {
	return await getUserFromSession(request)
}

export default function Index() {
	const userId = useLoaderData<typeof loader>()

	return (
		<div>
			<h1>hello {userId || 'friend'}!</h1>

			<Link to="/dictionary">Dictionary</Link>
		</div>
	)
}
