import { useMemo } from 'react'

export const useTags = (tags: string[]) => {
  const displayedTags = useMemo(() => tags.slice(0, 3), [tags])
  const remainingTagCount = useMemo(() => tags.length - 3, [tags])

  return {
    displayedTags,
    remainingTagCount,
  }
}
