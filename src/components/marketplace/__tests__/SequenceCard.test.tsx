import test from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import { renderToString } from 'react-dom/server'
import SequenceCard, { Sequence } from '../SequenceCard'

test('renders five empty stars and 0.0 rating when rating is 0', () => {
  const sequence: Sequence = {
    id: '1',
    title: 'Test Sequence',
    price: 10,
    image: '/test.png',
    seller: 'Tester',
    downloads: 100,
    duration: '1m',
    props: [],
    rating: 0
  }

  const html = renderToString(<SequenceCard sequence={sequence} />)
  const emptyStars = html.match(/text-gray-600/g) || []
  assert.equal(emptyStars.length, 5)
  assert.ok(html.includes('0.0'))
})
