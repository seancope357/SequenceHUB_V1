import type { Sequence } from '@/components/marketplace/SequenceCard'

export const sampleSequences: Sequence[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  title: [
    'Christmas Magic Spectacular',
    'Halloween Haunted House',
    'Winter Wonderland Dreams',
    'Summer Festival Lights',
    'Easter Celebration Joy',
    'Fourth of July Fireworks',
    'Autumn Harvest Display',
    "Valentine's Day Romance",
    "St. Patrick's Day Green",
    'Thanksgiving Gratitude',
    "New Year's Eve Countdown",
    'Spring Awakening Bloom'
  ][i],
  price: 15 + (i * 5) + Math.random() * 20,
  image: 'https://images.unsplash.com/photo-1545558014-8692c3eb5c50?q=80&w=800&auto=format&fit=crop',
  badge: i % 4 === 0 ? 'Hot' : i % 5 === 0 ? 'New' : i % 7 === 0 ? 'Featured' : undefined,
  rating: 4 + Math.random(),
  seller: [
    'LightMaster Pro',
    'Holiday Creator',
    'Sequence Expert',
    'Display Wizard',
    'Festive Lights Co'
  ][i % 5],
  downloads: Math.floor(Math.random() * 5000) + 100,
  duration: `${Math.floor(Math.random() * 8) + 2}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
  props: [
    ['RGB Lights', 'Pixel Strips', 'Matrix'],
    ['Spotlights', 'Floods', 'Laser'],
    ['DMX Controllers', 'Smart Plugs'],
    ['Inflatables', 'Props', 'Signs'],
    ['Music Sync', 'Voice Control']
  ][Math.floor(Math.random() * 5)]
}))

export default sampleSequences
