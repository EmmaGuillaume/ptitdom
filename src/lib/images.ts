export type TImage = {
  src: string,
  alt: string,
  categorie: string
}

export type TCategorie = {
  name: string,
  images: TImage[]
}
export type TThemes = {
  name: string,
  categoriesName: {
    name: string,
    cover: string
  }[]
}


export const themes: TThemes[] = [
  {
    name: 'Animaux',
    categoriesName: [
      {
        name: 'chats',
        cover: '/images/data/animaux/chats/chat4.jpeg'
      },
      {
        name: 'vaches',
        cover: '/images/vache3.jpg'
      }
    ]
  },
  {
    name: 'vehicules',
    categoriesName: [
      {
        name: 'ambulances',
        cover: '/images/data/vehicules/ambulances/ambulance3.jpg'
      },
      {
        name: 'bus',
        cover: '/images/data/vehicules/bus/bus3.jpg'
      },
      {
        name: 'camions',
        cover: '/images/data/vehicules/camions/camion1.jpg'
      },
    ]
  },
  {
    name: 'sucre-sale',
    categoriesName: [
      {
        name: 'boissons',
        cover: '/images/data/sucre-sale/boissons/boisson-coca1.jpeg'
      },
      {
        name: 'nourriture',
        cover: '/images/data/sucre-sale/nourriture/frite1.jpeg'
      }
    ]
  },
  {
    name: 'vetements',
    categoriesName: [
      {
        name: "chemises",
        cover: "/images/data/vetements/chemises/chemise1.png",
      },
      {
        name: "pulls",
        cover: "/images/data/vetements/pulls/pull1.png",
      },
      {
        name: "robes",
        cover: "/images/data/vetements/robes/robe1.jpeg",
      },
      {
        name: "sous-vetements",
        cover: "/images/data/vetements/sous-vetements/culotte2.png",
      },
      {
        name: "tee-shirt",
        cover: "/images/data/vetements/tee-shirt/tee-shirt1.jpeg",
      },
      {
        name: "vestes",
        cover: "/images/data/vetements/vestes/veste1.webp",
      },
    ]

  },
  {
    name: 'professions',
    categoriesName: [
      {
        name: 'boulangers',
        cover: "/images/data/professions/boulangers/boulanger1.jpg",
      },
      {
        name: 'pompiers',
        cover: "/images/data/professions/pompiers/pompier1.jpg",
      },
    ]
  },
  {
    name: 'nourritures',
    categoriesName: [
      {
        name: 'boulangerie',
        cover: "/images/data/nourritures/boulangerie/pain1.jpg",
      },
      {
        name: 'chewing-gum',
        cover: "/images/data/nourritures/chewing-gum/chewing-gum1.jpg",
      },
      {
        name: 'confiture',
        cover: "/images/data/nourritures/confiture/confiture1.jpg",
      },
      {
        name: 'fruits',
        cover: "/images/data/nourritures/fruits/banane1.jpg",
      },
      {
        name: 'legumes-verts',
        cover: "/images/data/nourritures/legumes-verts/aubergine1.jpg",
      },
      {
        name: 'marrons',
        cover: "/images/data/nourritures/marrons/marron1.jpg",
      },
      {
        name: 'noisettes',
        cover: "/images/data/nourritures/noisettes/noisettes1.jpg",
      },
      {
        name: 'noix',
        cover: "/images/data/nourritures/noix/noix1.jpg",
      },
    ]
  },

]

export const categories: TCategorie[] = [
  {
    name: "vaches",
    images: [
      {
        src: '/images/vache3.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/vache1.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/vache2.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      }
    ]
  },
  {
    name: 'chats',
    images: [
      {
        src: '/images/data/animaux/chats/chat1.png',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat2.png',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat3.jpeg',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat4.jpeg',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat5.webp',
        alt: 'image de chat',
        categorie: 'chats'
      },
        ]
  },
  {
    name: "ambulances",
    images: [
      {
        src: '/images/data/vehicules/ambulances/ambulance1.jpg',
        alt: 'image de ambulance',
        categorie: 'ambulances'
      },
      {
        src: '/images/data/vehicules/ambulances/ambulance2.jpg',
        alt: 'image de ambulance',
        categorie: 'ambulances'
      },
      {
        src: '/images/data/vehicules/ambulances/ambulance3.jpg',
        alt: 'image de ambulance',
        categorie: 'ambulances'
      }
    ]
  },
  {
    name: "bus",
    images: [
      {
        src: '/images/data/vehicules/bus/bus1.jpg',
        alt: 'image de bus',
        categorie: 'bus'
      },
      {
        src: '/images/data/vehicules/bus/bus2.jpg',
        alt: 'image de bus',
        categorie: 'bus'
      },
      {
        src: '/images/data/vehicules/bus/bus3.jpg',
        alt: 'image de bus',
        categorie: 'bus'
      }
    ]
  },
  {
    name:"chemises",
    images: [
      {
        src: '/images/data/vetements/chemises/chemise1.png',
        alt: 'image de chemise',
        categorie: 'chemises'
      },
      {
        src: '/images/data/vetements/chemises/chemise2.jpeg',
        alt: 'image de chemise',
        categorie: 'chemises'
      },
      {
        src: '/images/data/vetements/chemises/chemise3.jpeg',
        alt: 'image de chemise',
        categorie: 'chemises'
      },
    ]
  },
  {
    name:"pulls",
    images: [
      {
        src: '/images/data/vetements/pulls/pull1.png',
        alt: 'image de pull',
        categorie: 'pulls'
      }
    ]
  },
  {
    name:"robes",
    images: [
      {
        src: '/images/data/vetements/robes/robe1.jpeg',
        alt: 'image de robe',
        categorie: 'robes'
      },
      {
        src: '/images/data/vetements/robes/robe2.jpeg',
        alt: 'image de robe',
        categorie: 'robes'
      },
      {
        src: '/images/data/vetements/robes/robe3.png',
        alt: 'image de robe',
        categorie: 'robes'
      },
    ]
  },
  {
    name:"sous-vetements",
    images: [
      {
        src: '/images/data/vetements/sous-vetements/culotte2.png',
        alt: 'image de sous-vetement',
        categorie: 'sous-vetements'
      },
      {
        src: '/images/data/vetements/sous-vetements/culotte3.webp',
        alt: 'image de sous-vetement',
        categorie: 'sous-vetements'
      },
      {
        src: '/images/data/vetements/sous-vetements/culotte4.jpeg',
        alt: 'image de sous-vetement',
        categorie: 'sous-vetements'
      },
    ]
  },
  {
    name:"tee-shirt",
    images: [
      {
        src: '/images/data/vetements/tee-shirt/tee-shirt1.jpeg',
        alt: 'image de tee-shirt',
        categorie: 'tee-shirt'
      },
      {
        src: '/images/data/vetements/tee-shirt/tee-shirt2.webp',
        alt: 'image de tee-shirt',
        categorie: 'tee-shirt'
      }
    ]
  },
  {
    name:"vestes",
    images: [
      {
        src: '/images/data/vetements/vestes/veste1.webp',
        alt: 'image de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste2.png',
        alt: 'image de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste3.jpeg',
        alt: 'image de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste4.jpeg',
        alt: 'image de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste5.jpeg',
        alt: 'image de veste',
        categorie: 'vestes'
      },
    ]
  },
  {
    name:"boulangers",
    images: [
      {
        src: '/images/data/professions/boulangers/boulanger1.jpg',
        alt: 'image de boulanger',
        categorie: 'boulangers'
      },
      {
        src: '/images/data/professions/boulangers/boulanger2.jpg',
        alt: 'image de boulanger',
        categorie: 'boulangers'
      },
      {
        src: '/images/data/professions/boulangers/boulanger3.jpg',
        alt: 'image de boulanger',
        categorie: 'boulangers'
      }
    ]
  },
  {
    name:"pompiers",
    images: [
      {
        src: '/images/data/professions/pompiers/pompier1.jpg',
        alt: 'image de pompier',
        categorie: 'pompiers'
      },
      {
        src: '/images/data/professions/pompiers/pompier2.jpg',
        alt: 'image de pompier',
        categorie: 'pompiers'
      },
      {
        src: '/images/data/professions/pompiers/pompier3.jpg',
        alt: 'image de pompier',
        categorie: 'pompiers'
      }
    ]
  },
  {
    name: "chaises",
    images: [
      {
        src: '/images/chaise1.jpg',
        alt: 'image de chaise',
        categorie: 'chaises'
      },
      {
        src: '/images/chaise2.jpg',
        alt: 'image de chaise',
        categorie: 'chaises'
      },
      {
        src: '/images/chaise3.jpg',
        alt: 'image de chaise',
        categorie: 'chaises'
      }
    ]
  },
  {
    name: "boulangerie",
    images: [
      {
        src: '/images/data/nourritures/confiture/pain1.jpg',
        alt: 'image de pain',
        categorie: 'boulangerie'
      },
      {
        src: '/images/data/nourritures/confiture/pain2.jpg',
        alt: 'image de pain',
        categorie: 'boulangerie'
      },
      {
        src: '/images/data/nourritures/confiture/pain3.jpg',
        alt: 'image de pain',
        categorie: 'boulangerie'
      }
    ]
  },
  {
    name: "chewing-gum",
    images: [
      {
        src: '/images/data/nourritures/chewing-gum/chewing-gum1.jpg',
        alt: 'image de chewing-gum',
        categorie: 'chewing-gum'
      },
      {
        src: '/images/data/nourritures/chewing-gum/chewing-gum2.jpg',
        alt: 'image de chewing-gum',
        categorie: 'chewing-gum'
      },
      {
        src: '/images/data/nourritures/chewing-gum/chewing-gum3.jpg',
        alt: 'image de chewing-gum',
        categorie: 'chewing-gum'
      }
    ]
  },
  {
    name: "confiture",
    images: [
      {
        src: '/images/data/nourritures/confiture/confiture1.jpg',
        alt: 'image de confiture',
        categorie: 'confiture'
      },
      {
        src: '/images/data/nourritures/confiture/confiture2.jpg',
        alt: 'image de confiture',
        categorie: 'confiture'
      },
      {
        src: '/images/data/nourritures/confiture/confiture3.jpg',
        alt: 'image de confiture',
        categorie: 'confiture'
      },
      {
        src: '/images/data/nourritures/confiture/confiture4.jpg',
        alt: 'image de confiture',
        categorie: 'confiture'
      }
    ]
  },
  {
    name: "fruits",
    images: [
      {
        src: '/images/data/nourritures/fruits/banane1.jpg',
        alt: 'image de banane',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/banane2.jpg',
        alt: 'image de banane',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/banane3.jpg',
        alt: 'image de banane',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/cerises1.jpg',
        alt: 'image de cerises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/cerises2.jpg',
        alt: 'image de cerises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/cerises3.jpg',
        alt: 'image de cerises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/fraises1.jpg',
        alt: 'image de fraises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/fraises2.jpg',
        alt: 'image de fraises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/fraises3.jpg',
        alt: 'image de fraises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/framboise1.jpg',
        alt: 'image de framboise',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/framboise2.jpg',
        alt: 'image de framboise',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/framboise3.jpg',
        alt: 'image de framboise',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/kiwi1.jpg',
        alt: 'image de kiwi',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/kiwi2.jpg',
        alt: 'image de kiwi',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/kiwi3.jpg',
        alt: 'image de kiwi',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/orange1.jpg',
        alt: 'image de orange',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/orange2.jpg',
        alt: 'image de orange',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/orange3.jpg',
        alt: 'image de orange',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/peches1.jpg',
        alt: 'image de peches',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/peches2.jpg',
        alt: 'image de peches',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/peches3.jpg',
        alt: 'image de peches',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/poires1.jpg',
        alt: 'image de poires',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/poires2.jpg',
        alt: 'image de poires',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/poires3.jpg',
        alt: 'image de poires',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/pommes1.jpg',
        alt: 'image de pommes',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/pommes2.jpg',
        alt: 'image de pommes',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/pommes3.jpg',
        alt: 'image de pommes',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/tomate1.jpg',
        alt: 'image de tomate',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/tomate2.jpg',
        alt: 'image de tomate',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/tomate3.jpg',
        alt: 'image de tomate',
        categorie: 'fruits'
      },
    ]
  },
  {
    name: "legumes-verts",
    images: [
      {
        src: '/images/data/nourritures/legumes-verts/aubergine1.jpg',
        alt: 'image de aubergine',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/aubergine2.jpg',
        alt: 'image de aubergine',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/aubergine3.jpg',
        alt: 'image de aubergine',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/brocolis1.jpg',
        alt: 'image de brocolis',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/brocolis2.jpg',
        alt: 'image de brocolis',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/brocolis3.jpg',
        alt: 'image de brocolis',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/courgette1.jpg',
        alt: 'image de courgette',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/courgette2.jpg',
        alt: 'image de courgette',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/courgette3.jpg',
        alt: 'image de courgette',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/petits-poids1.jpg',
        alt: 'image de petits-poids',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/petits-poids2.jpg',
        alt: 'image de petits-poids',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/petits-poids3.jpg',
        alt: 'image de petits-poids',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/haricots-verts1.jpg',
        alt: 'image de haricots-verts',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/haricots-verts2.jpg',
        alt: 'image de haricots-verts',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/haricots-verts3.jpg',
        alt: 'image de haricots-verts',
        categorie: 'legumes-verts'
      },
    ]
  },
  {
    name: "marrons",
    images: [
      {
        src: '/images/data/nourritures/marrons/marron1.jpg',
        alt: 'image de marron',
        categorie: 'marrons'
      }
    ]
  },
  {
    name: "noisettes",
    images: [
      {
        src: '/images/data/nourritures/noisettes/noisettes1.jpg',
        alt: 'image de noisettes',
        categorie: 'noisettes'
      },
      {
        src: '/images/data/nourritures/noisettes/noisettes2.jpg',
        alt: 'image de noisettes',
        categorie: 'noisettes'
      },
      {
        src: '/images/data/nourritures/noisettes/noisettes3.jpg',
        alt: 'image de noisettes',
        categorie: 'noisettes'
      },
    ]
  },
  {
    name: "noix",
    images: [
      {
        src: '/images/data/nourritures/noix/noix1.jpg',
        alt: 'image de noix',
        categorie: 'noix'
      },
      {
        src: '/images/data/nourritures/noix/noix2.jpg',
        alt: 'image de noix',
        categorie: 'noix'
      },
      {
        src: '/images/data/nourritures/noix/noix3.jpg',
        alt: 'image de noix',
        categorie: 'noix'
      },
    ]
  },
  {
    name: "boissons",
    images: [
      {
        src: '/images/data/sucre-sale/boissons/boisson-coca1.jpeg',
        alt: 'image de boisson-coca',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/boisson-coca2.jpeg',
        alt: 'image de boisson-coca',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/boisson-coca3.jpeg',
        alt: 'image de boisson-coca',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/citronnade1.jpeg',
        alt: 'image de citronnade',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/ice-tea1.jpeg',
        alt: 'image de ice-tea',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/ice-tea2.jpeg',
        alt: 'image de ice-tea',
        categorie: 'boissons'
      },
    ]
  },
  {
    name: "nourriture",
    images: [
      {
        src: '/images/data/sucre-sale/nourriture/frite1.jpeg',
        alt: 'image de frite',
        categorie: 'nourriture'
      },
      {
        src: '/images/data/sucre-sale/nourriture/frite2.png',
        alt: 'image de frite',
        categorie: 'nourriture'
      },
      {
        src: '/images/data/sucre-sale/nourriture/frite3.JPG',
        alt: 'image de frite',
        categorie: 'nourriture'
      },
      {
        src: '/images/data/sucre-sale/nourriture/gateau-apero.jpeg',
        alt: 'image de gateau-apero',
        categorie: 'nourriture'
      }
    ]
  },
  {
    name: "camions",
    images: [
      {
        src: '/images/data/vehicules/camions/camion1.jpg',
        alt: 'image de camion',
        categorie: 'camions'
      },
      {
        src: '/images/data/vehicules/camions/camion2.jpg',
        alt: 'image de camion',
        categorie: 'camions'
      },
      {
        src: '/images/data/vehicules/camions/camion3.jpg',
        alt: 'image de camion',
        categorie: 'camions'
      }
    ]
  },
  {
    name: "tables",
    images: [
      {
        src: '/images/table1.jpg',
        alt: 'image de table',
        categorie: 'tables'
      },
      {
        src: '/images/table2.jpeg',
        alt: 'image de table',
        categorie: 'tables'
      },
      {
        src: '/images/table3.jpg',
        alt: 'image de table',
        categorie: 'tables'
      }
    ]
  }
]
