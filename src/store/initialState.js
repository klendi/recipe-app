const thumbnail = require('../assets/banana-smothie-thumbnail.jpg')
const thumbnail1 = require('../assets/chinese-food.jpg')

export const tagsInitialState = {
  tags: [{ id: 1, name: 'Molle' }, { id: 2, name: 'Dardhe' }],
  tagsSuggestions: [
    { id: 3, name: 'Banane' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Lemone' },
    { id: 6, name: 'Kiwi' },
    { id: 7, name: 'Arra' },
    { id: 8, name: 'Hurdha' },
    { id: 9, name: 'Qepe' },
    { id: 10, name: 'Ananas' },
    { id: 11, name: 'Kerpurdhera' },
    { id: 12, name: 'Qofte' },
    { id: 13, name: 'Mish Vici' },
    { id: 14, name: 'Mish Keci' },
    { id: 15, name: 'Mish Gici' },
    { id: 16, name: 'Mish Pule' }
  ]
}

export const recipesInitalState = [
  {
    id: 32132,
    name: 'Banana smoothie',
    description: 'Kjo eshte nje recete e thjeshte me banane',
    thumbnail: thumbnail
  },
  {
    id: 321322,
    name: 'Banana smoothie 2',
    description: 'Kjo eshte nje recete e thjeshte me banane',
    thumbnail: thumbnail1
  },
  {
    id: 325132,
    name: 'Banana smoothie 3',
    description: 'Kjo eshte nje recete e thjeshte me banane',
    thumbnail: thumbnail
  },
  {
    id: 325132,
    name: 'Banana smoothie 3',
    description: 'Kjo eshte nje recete e thjeshte me banane',
    thumbnail: thumbnail
  }
]
