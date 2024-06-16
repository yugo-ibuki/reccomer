'use client'

import {
  View,
  Heading,
  TextField,
  Button,
  Grid,
  Flex,
} from '@adobe/react-spectrum'
import { useState } from 'react'
import { type ArticleCardProps, ArticleCard } from '@/components'

const App = () => {
  const [keyword, setKeyword] = useState<string>('')
  const [articles, setArticles] = useState<ArticleCardProps[]>([])
  const [recommendations, setRecommendations] = useState<ArticleCardProps[]>([])

  const handleSearch = async () => {
    try {
      // 関連記事を取得するAPIリクエストを送信
      const response = await fetch(`/api/articles?keyword=${keyword}`)
      const data = await response.json()
      setArticles(data.articles)
      setRecommendations(data.recommendations)
    } catch (error) {
      console.error('Error fetching articles:', error)
    }
  }

  return (
    <View padding="size-400">
      <Heading level={1} marginBottom="size-200">
        Search for Related Articles
      </Heading>
      <View marginBottom="size-400">
        <TextField
          label="Enter what you want to make"
          value={keyword}
          onChange={setKeyword}
          marginEnd="size-200"
        />
        <Button variant="cta" onPress={handleSearch}>
          Search
        </Button>
      </View>
      <Heading level={2} marginBottom="size-200">
        Search Results
      </Heading>
      <Flex direction="column" alignItems="center">
        <Grid
          columns={['1fr', '1fr', '1fr']}
          gap="size-1000"
          justifyContent="start"
        >
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              author={article.author}
              authorThumbnail={article.authorThumbnail}
              publishedAt={article.publishedAt}
              tags={article.tags}
              linkUrl={article.linkUrl}
            />
          ))}
        </Grid>
      </Flex>
      <Heading level={2} marginBottom="size-200">
        Recommended Articles
      </Heading>
      {recommendations.length > 0 &&
        articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            author={article.author}
            authorThumbnail={article.authorThumbnail}
            publishedAt={article.publishedAt}
            tags={article.tags}
            linkUrl={article.linkUrl}
          />
        ))}
    </View>
  )
}

export default App
