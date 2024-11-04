import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'

const FAKE_DATA = [
  {
    id: 0,
    image_url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  },
  {
    id: 1,
    image_url: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969',
  },
  {
    id: 2,
    image_url: 'https://images.unsplash.com/photo-1551782450-a2132aa5eae5',
  },
  {
    id: 3,
    image_url: 'https://images.unsplash.com/photo-1636475735446-bfc801fa6f2c',
  },
  {
    id: 4,
    image_url: 'https://images.unsplash.com/photo-1523218345414-cd47aea19ba6',
  },
  {
    id: 5,
    image_url:
      'https://plus.unsplash.com/premium_photo-1664640733996-0051b12f52f3',
  },
]
export const MealsList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)} // Pega om id de todos os itens que estão sendo renderizados
    />
  )
}
