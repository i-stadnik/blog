import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

type Props = {
	allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
	return (
		<>
			<Layout>
				<Head>
					<title>{`Blog Js`}</title>
				</Head>
				<Container>
					<MoreStories posts={allPosts} />
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'tags',
		'slug',
		'author',
		'coverImage',
		'excerpt'
	])

	return {
		props: { allPosts }
	}
}
