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
    name: 'Véhicules',
    categoriesName: [
      {
        name: 'ambulances',
        cover: '/images/data/vehicules/ambulances/ambulance3.jpg'
      },
      {
        name: 'bus',
        cover: '/images/data/vehicules/bus/bus3.jpg'
      }
    ]
  },
  {
    name: 'Meubles',
    categoriesName: [
      {
        name: 'chaises',
        cover: '/images/chaise1.jpg'
      },
      {
        name: 'tables',
        cover: '/images/table1.jpg'
      }
    ]
  }
]

export const categories: TCategorie[] = [
  {
    name: "vaches",
    images: [
      {
        src: '/images/data/animaux/vaches/vache1.webp',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/data/animaux/vaches/vache2.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/data/animaux/vaches/vache3.png',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/data/animaux/vaches/vache4.jpeg',
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
    name: "araignees",
    images: [
      {
        src: '/images/data/animaux/araignees/araignée1.jpeg',
        alt: 'image de araignee',
        categorie: 'araignees'
      },
      {
        src: '/images/data/animaux/araignees/araignée2.jpeg',
        alt: 'image de araignee',
        categorie: 'araignees'
      },
      {
        src: '/images/data/animaux/araignees/araignée3.png',
        alt: 'image de araignee',
        categorie: 'araignees'
      }
    ]
  },
  {
    name: "biches",
    images: [
      {
        src: '/images/data/animaux/biches/biche1.jpeg',
        alt: 'image de biche',
        categorie: 'biches'
      },
      {
        src: '/images/data/animaux/biches/biche2.jpeg',
        alt: 'image de biche',
        categorie: 'biches'
      },
      {
        src: '/images/data/animaux/biches/biche3.jpg',
        alt: 'image de biche',
        categorie: 'biches'
      },
      {
        src: '/images/data/animaux/biches/biche4.jpeg',
        alt: 'image de biche',
        categorie: 'biches'
      }
    ]
  },
  {
    name: "chameaux",
    images: [
      {
        src: '/images/data/animaux/chameaux/chameau1.jpeg',
        alt: 'image de chameau',
        categorie: 'chameaux'
      },
      {
        src: '/images/data/animaux/chameaux/chameau2.png',
        alt: 'image de chameau',
        categorie: 'chameaux'
      },
      {
        src: '/images/data/animaux/chameaux/chameau3.png',
        alt: 'image de chameau',
        categorie: 'chameaux'
      },
      {
        src: '/images/data/animaux/chameaux/chameau4.jpeg',
        alt: 'image de chameau',
        categorie: 'chameaux'
      }
    ]
  },
  {
    name: "chiens",
    images: [
      {
        src: '/images/data/animaux/chiens/chien1.png',
        alt: 'image de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien2.jpeg',
        alt: 'image de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien3.jpeg',
        alt: 'image de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien4.jpeg',
        alt: 'image de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien5.jpeg',
        alt: 'image de chien',
        categorie: 'chiens'
      }
    ]
  },
  {
    name: "cochons",
    images: [
      {
        src: '/images/data/animaux/cochons/cochon1.png',
        alt: 'image de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon2.png',
        alt: 'image de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon3.jpeg',
        alt: 'image de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon4.jpeg',
        alt: 'image de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon5.jpeg',
        alt: 'image de cochon',
        categorie: 'cochons'
      }
    ]
  },
  {
    name: "coq",
    images: [
      {
        src: '/images/data/animaux/coq/coq1.jpg',
        alt: 'image de coq',
        categorie: 'coq'
      },
      {
        src: '/images/data/animaux/coq/coq2.jpg',
        alt: 'image de coq',
        categorie: 'coq'
      },
      {
        src: '/images/data/animaux/coq/coq3.jpeg',
        alt: 'image de coq',
        categorie: 'coq'
      }
    ]
  },
  {
    name: "dauphins",
    images: [
      {
        src: '/images/data/animaux/dauphins/dauphin1.jpeg',
        alt: 'image de dauphin',
        categorie: 'dauphins'
      },
      {
        src: '/images/data/animaux/dauphins/dauphin2.jpeg',
        alt: 'image de dauphin',
        categorie: 'dauphins'
      },
      {
        src: '/images/data/animaux/dauphins/dauphin3.jpeg',
        alt: 'image de dauphin',
        categorie: 'dauphins'
      },
      {
        src: '/images/data/animaux/dauphins/dauphin4.jpeg',
        alt: 'image de dauphin',
        categorie: 'dauphins'
      }
    ]
  },
  {
    name: "ecureuils",
    images: [
      {
        src: '/images/data/animaux/ecureuils/ecureuil1.png',
        alt: 'image de ecureuil',
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil2.jpeg',
        alt: 'image de ecureuil',
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil3.webp',
        alt: 'image de ecureuil',
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil4.jpeg',
        alt: 'image de ecureuil',
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil5.png',
        alt: 'image de ecureuil',
        categorie: 'ecureuils'
      }
    ]
  },
  {
    name: "elephant",
    images: [
      {
        src: '/images/data/animaux/elephant/elephant1.jpeg',
        alt: 'image de elephant',
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant2.png',
        alt: 'image de elephant',
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant3.jpeg',
        alt: 'image de elephant',
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant4.png',
        alt: 'image de elephant',
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant5.jpeg',
        alt: 'image de elephant',
        categorie: 'elephant'
      }
    ]
  },
  {
    name: "hamsters",
    images: [
      {
        src: '/images/data/animaux/hamsters/hamster2.jpeg',
        alt: 'image de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster3.jpeg',
        alt: 'image de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster4.png',
        alt: 'image de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster5.jpeg',
        alt: 'image de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster6.svg',
        alt: 'image de hamster',
        categorie: 'hamsters'
      }
    ]
  },
  {
    name: "herissons",
    images: [
      {
        src: '/images/data/animaux/herissons/herisson1.jpeg',
        alt: 'image de herisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson2.png',
        alt: 'image de herisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson3.jpeg',
        alt: 'image de herisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson4.webp',
        alt: 'image de herisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson5.jpeg',
        alt: 'image de herisson',
        categorie: 'herissons'
      }
    ]
  },

  {
    name: "lapins",
    images: [
      {
        src: '/images/data/animaux/lapins/lapin1.jpeg',
        alt: 'image de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin2.png',
        alt: 'image de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin3.jpeg',
        alt: 'image de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin4.jpeg',
        alt: 'image de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin5.jpg',
        alt: 'image de lapin',
        categorie: 'lapins'
      }
    ]
  },
  {
    name: "lions",
    images: [
      {
        src: '/images/data/animaux/lions/lion1.png',
        alt: 'image de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion2.jpg',
        alt: 'image de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion3.jpeg',
        alt: 'image de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion4.png',
        alt: 'image de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion5.jpeg',
        alt: 'image de lion',
        categorie: 'lions'
      }
    ]
  },

  {
    name: "oiseaux",
    images: [
      {
        src: '/images/data/animaux/oiseaux/oiseau1.jpeg',
        alt: 'image de oiseau',
        categorie: 'oiseaux'
      },
      {
        src: '/images/data/animaux/oiseaux/oiseau2.jpeg',
        alt: 'image de oiseau',
        categorie: 'oiseaux'
      },
      {
        src: '/images/data/animaux/oiseaux/oiseau3.png',
        alt: 'image de oiseau',
        categorie: 'oiseaux'
      },
      {
        src: '/images/data/animaux/oiseaux/oiseau4.jpeg',
        alt: 'image de oiseau',
        categorie: 'oiseaux'
      }
    ]
  },

  {
    name: "pandas",
    images: [
      {
        src: '/images/data/animaux/pandas/panda1.png',
        alt: 'image de panda',
        categorie: 'pandas'
      },
      {
        src: '/images/data/animaux/pandas/panda2.jpeg',
        alt: 'image de panda',
        categorie: 'pandas'
      },
      {
        src: '/images/data/animaux/pandas/panda3.png',
        alt: 'image de panda',
        categorie: 'pandas'
      },
      {
        src: '/images/data/animaux/pandas/panda4.jpeg',
        alt: 'image de panda',
        categorie: 'pandas'
      }
    ]
  },

  {
    name: "poules",
    images: [
      {
        src: '/images/data/animaux/poules/poule1.jpg',
        alt: 'image de poule',
        categorie: 'poules'
      },
      {
        src: '/images/data/animaux/poules/poule2.png',
        alt: 'image de poule',
        categorie: 'poules'
      },
      {
        src: '/images/data/animaux/poules/poule3.jpeg',
        alt: 'image de poule',
        categorie: 'poules'
      }
    ]
  },


  {
    name: "renards",
    images: [
      {
        src: '/images/data/animaux/renards/renard1.jpeg',
        alt: 'image de renard',
        categorie: 'renards'
      },
      {
        src: '/images/data/animaux/renards/renard2.jpeg',
        alt: 'image de renard',
        categorie: 'renards'
      },
     
      {
        src: '/images/data/animaux/renards/renard4.jpg',
        alt: 'image de renard',
        categorie: 'renards'
      },
      {
        src: '/images/data/animaux/renards/renard5.jpg',
        alt: 'image de renard',
        categorie: 'renards'
      }
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
    name: "singes",
    images: [
      {
        src: '/images/data/animaux/singes/singe1.jpeg',
        alt: 'image de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe2.jpeg',
        alt: 'image de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe3.jpeg',
        alt: 'image de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe4.png',
        alt: 'image de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe5.jpeg',
        alt: 'image de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe6.png',
        alt: 'image de singe',
        categorie: 'singes'
      }
    ]
  },

  {
    name: "souris",
    images: [
      {
        src: '/images/data/animaux/souris/souris1.png',
        alt: 'image de souris',
        categorie: 'souris'
      },
      {
        src: '/images/data/animaux/souris/souris2.webp',
        alt: 'image de souris',
        categorie: 'souris'
      },
      {
        src: '/images/data/animaux/souris/souris3.jpeg',
        alt: 'image de souris',
        categorie: 'souris'
      },
      {
        src: '/images/data/animaux/souris/souris4.png',
        alt: 'image de souris',
        categorie: 'souris'
      }
    ]
  },

  {
    name: "zebres",
    images: [
      {
        src: '/images/data/animaux/zebres/zebre1.webp',
        alt: 'image de zebre',
        categorie: 'zebres'
      },
      {
        src: '/images/data/animaux/zebres/zebre2.jpeg',
        alt: 'image de zebre',
        categorie: 'zebres'
      },
      {
        src: '/images/data/animaux/zebres/zebre3.png',
        alt: 'image de zebre',
        categorie: 'zebres'
      },
      {
        src: '/images/data/animaux/zebres/zebre4.jpeg',
        alt: 'image de zebre',
        categorie: 'zebres'
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