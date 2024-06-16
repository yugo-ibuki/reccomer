'use client'

import { ArticleCard } from '@/components'
import { Flex, Grid, View } from '@adobe/react-spectrum'

const articles = [
  {
    title: 'Article 1',
    author: 'John Doe',
    publishedAt: '2023-06-18',
    authorThumbnail: 'https://example.com/thumbnail1.jpg',
    tags: ['Tag 1', 'Tag 2'],
    linkUrl: '/article/1',
  },
  {
    title: 'Article 2',
    author: 'Jane Smith',
    publishedAt: '2023-06-17',
    authorThumbnail: 'https://example.com/thumbnail2.jpg',
    tags: ['Tag 2', 'Tag 3'],
    linkUrl: '/article/1',
  },
  {
    title: 'Article 1',
    author: 'John Doe',
    publishedAt: '2023-06-18',
    authorThumbnail: 'https://example.com/thumbnail1.jpg',
    tags: ['Tag 1', 'Tag 2'],
    linkUrl: '/article/1',
  },
  {
    title: 'Article 2',
    author: 'Jane Smith',
    publishedAt: '2023-06-17',
    authorThumbnail: 'https://example.com/thumbnail2.jpg',
    tags: ['Tag 2', 'Tag 3'],
    linkUrl: '/article/1',
  },
  {
    title: 'Article 1',
    author: 'John Doe',
    publishedAt: '2023-06-18',
    authorThumbnail: 'https://example.com/thumbnail1.jpg',
    tags: ['Tag 1', 'Tag 2'],
    linkUrl: '/article/1',
  },
  {
    title: 'Article 2',
    author: 'Jane Smith',
    publishedAt: '2023-06-17',
    authorThumbnail: 'https://example.com/thumbnail2.jpg',
    tags: ['Tag 2', 'Tag 3'],
    linkUrl: '/article/1',
  },
]

const DashBoard = () => {
  return (
    <View padding="size-800">
      <Flex direction="column" alignItems="center">
        <Grid
          columns={['1fr', '1fr', '1fr']}
          gap="size-1000"
          justifyContent="start"
        >
          {articles.map((article) => (
            <View key={article.title} width="size-5000">
              <ArticleCard
                title={article.title}
                author={article.author}
                publishedAt={article.publishedAt}
                authorThumbnail={article.authorThumbnail}
                tags={article.tags}
                linkUrl={article.linkUrl}
              />
            </View>
          ))}
        </Grid>
      </Flex>
    </View>
  )
}

export default DashBoard
