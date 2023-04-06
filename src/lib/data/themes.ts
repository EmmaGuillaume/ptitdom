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
        name: 'araignees',
        cover: '/images/data/animaux/araignees/araignée1.jpeg'
      },
      {
        name: 'biches',
        cover: '/images/data/animaux/biches/biche1.jpeg'
      },
      {
        name: 'chameaux',
        cover: '/images/data/animaux/chameaux/chameau1.jpeg'
      },
      {
        name: 'chiens',
        cover: '/images/data/animaux/chiens/chien1.png'
      },
      {
        name: 'cochons',
        cover: '/images/data/animaux/cochons/cochon1.png'
      },
      {
        name: 'coq',
        cover: '/images/data/animaux/coq/coq1.jpg'
      },
      {
        name: 'dauphins',
        cover: '/images/data/animaux/dauphins/dauphin1.jpeg'
      },
      {
        name: 'ecureuils',
        cover: '/images/data/animaux/ecureuils/ecureuil1.png'
      },
      {
        name: 'elephant',
        cover: '/images/data/animaux/elephant/elephant1.jpeg'
      },
      {
        name: 'hamsters',
        cover: '/images/data/animaux/hamsters/hamster2.jpeg'
      },
      {
        name: 'herissons',
        cover: '/images/data/animaux/herissons/herisson1.jpeg'
      },
      {
        name: 'lapins',
        cover: '/images/data/animaux/lapins/lapin1.jpeg'
      },
      {
        name: 'lions',
        cover: '/images/data/animaux/lions/lion1.png'
      },
      {
        name: 'oiseaux',
        cover: '/images/data/animaux/oiseaux/oiseau1.jpeg'
      },
      {
        name: 'pandas',
        cover: '/images/data/animaux/pandas/panda1.png'
      },
      {
        name: 'poules',
        cover: '/images/data/animaux/poules/poule1.jpg'
      },
      {
        name: 'renards',
        cover: '/images/data/animaux/renards/renard1.jpeg'
      },
      {
        name: 'singes',
        cover: '/images/data/animaux/singes/singe1.jpeg'
      },
      {
        name: 'souris',
        cover: '/images/data/animaux/souris/souris1.png'
      },
      {
        name: 'vaches',
        cover: '/images/data/animaux/vaches/vache4.jpeg'
      },
      {
        name: 'zebres',
        cover: '/images/data/animaux/zebres/zebre1.webp'
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
  {
    name: 'accessoires-scolaires',
    categoriesName: [
      {
        name: 'cartable-enfant',
        cover: '/images/data/accessoires-scolaires/cartable-enfant/cartable1.png'
      },
      {
        name: 'regles',
        cover: '/images/data/accessoires-scolaires/regles/regle1.jpg'
      }
    ]
  },

  {
    name: 'accessoires-sport',
    categoriesName: [
      {
        name: 'roller',
        cover: '/images/data/accessoires-sport/roller/roller2.png'
      }]
  }

]
