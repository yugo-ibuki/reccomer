'use client'

import React from 'react'
import {
  Heading,
  Text,
  Avatar,
  View,
  Flex,
  Button,
} from '@adobe/react-spectrum'

type ArticleCardProps = {
  title: string
  author: string
  publishedAt: string
  authorThumbnail: string
  tags: string[]
}

export const ArticleCard = ({
  title,
  author,
  publishedAt,
  authorThumbnail,
  tags,
}: ArticleCardProps) => {
  return (
    <View
      borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
      padding="size-250"
      marginBottom="size-300"
    >
      <View padding="size-300">
        <Heading level={3} marginBottom="size-100">
          {title}
        </Heading>
        <View alignSelf="center" marginBottom="size-200">
          <Avatar
            src={authorThumbnail}
            alt={author}
            size="size-400"
            marginEnd="size-200"
          />
          <View>
            <Text>By {author}</Text>
            <Text>{publishedAt}</Text>
          </View>
        </View>
        <Flex gap="size-100" wrap>
          {tags.map((tag) => (
            <Button key={tag} variant="primary">
              {tag}
            </Button>
          ))}
        </Flex>
      </View>
    </View>
  )
}
