import type { TImage } from "./images"

export type TCategorie = {
  name: string,
  images: TImage[]
}

export const categories: TCategorie[] = [
  {
    name: "roller",
    images: [
      {
        src: '/images/data/accessoires-sport/roller/roller1.jpg',
        alt: 'de roller',
        categorie: 'roller'
      },
      {
        src: '/images/data/accessoires-sport/roller/roller2.png',
        alt: 'de roller',
        categorie: 'roller'
      },
      {
        src: '/images/data/accessoires-sport/roller/roller3.jpg',
        alt: 'de roller',
        categorie: 'roller'
      }
    ]
  },

  {
    name: "cartable-enfant",
    images: [
      {
        src: '/images/data/accessoires-scolaires/cartable-enfant/cartable1.png',
        alt: 'de cartable',
        categorie: 'cartable-enfant'
      },
      {
        src: '/images/data/accessoires-scolaires/cartable-enfant/cartable2.svg',
        alt: 'de cartable',
        categorie: 'cartable-enfant'
      },
      {
        src: '/images/data/accessoires-scolaires/cartable-enfant/cartable3.webp',
        alt: 'de cartable',
        categorie: 'cartable-enfant'
      }
    ]
  },
  {
    name: "regles",
    images: [
      {
        src: '/images/data/accessoires-scolaires/regles/regle1.jpg',
        alt: "de règle",
        categorie: 'regles'
      },
      {
        src: '/images/data/accessoires-scolaires/regles/regle2.png',
        alt: "de règle",
        categorie: 'regles'
      },
      {
        src: '/images/data/accessoires-scolaires/regles/regle3.jpg',
        alt: "de règle",
        categorie: 'regles'
      }
    ]
  },


    {
    name: "vaches",
    images: [
      {
        src: '/images/data/animaux/vaches/vache1.webp',
        alt: 'de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/data/animaux/vaches/vache2.jpg',
        alt: 'de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/data/animaux/vaches/vache3.png',
        alt: 'de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/data/animaux/vaches/vache4.jpeg',
        alt: 'de vache',
        categorie: 'vaches'
      }
    ]
  },
  {
    name: 'chats',
    images: [
      {
        src: '/images/data/animaux/chats/chat1.png',
        alt: 'de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat2.png',
        alt: 'de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat3.jpeg',
        alt: 'de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat4.jpeg',
        alt: 'de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat5.webp',
        alt: 'de chat',
        categorie: 'chats'
      },
        ]
  },
  {
    name: "araignees",
    images: [
      {
        src: '/images/data/animaux/araignees/araignée1.jpeg',
        alt: "d'araignée",
        categorie: 'araignees'
      },
      {
        src: '/images/data/animaux/araignees/araignée2.jpeg',
        alt: "d'araignée",
        categorie: 'araignees'
      },
      {
        src: '/images/data/animaux/araignees/araignée3.png',
        alt: "d'araignée",
        categorie: 'araignees'
      }
    ]
  },
  {
    name: "biches",
    images: [
      {
        src: '/images/data/animaux/biches/biche1.jpeg',
        alt: 'de biche',
        categorie: 'biches'
      },
      {
        src: '/images/data/animaux/biches/biche2.jpeg',
        alt: 'de biche',
        categorie: 'biches'
      },
      {
        src: '/images/data/animaux/biches/biche3.jpg',
        alt: 'de biche',
        categorie: 'biches'
      },
      {
        src: '/images/data/animaux/biches/biche4.jpeg',
        alt: 'de biche',
        categorie: 'biches'
      }
    ]
  },
  {
    name: "chameaux",
    images: [
      {
        src: '/images/data/animaux/chameaux/chameau1.jpeg',
        alt: 'de chameau',
        categorie: 'chameaux'
      },
      {
        src: '/images/data/animaux/chameaux/chameau2.png',
        alt: 'de chameau',
        categorie: 'chameaux'
      },
      {
        src: '/images/data/animaux/chameaux/chameau3.png',
        alt: 'de chameau',
        categorie: 'chameaux'
      },
      {
        src: '/images/data/animaux/chameaux/chameau4.jpeg',
        alt: 'de chameau',
        categorie: 'chameaux'
      }
    ]
  },
  {
    name: "chiens",
    images: [
      {
        src: '/images/data/animaux/chiens/chien1.png',
        alt: 'de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien2.jpeg',
        alt: 'de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien3.jpeg',
        alt: 'de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien4.jpeg',
        alt: 'de chien',
        categorie: 'chiens'
      },
      {
        src: '/images/data/animaux/chiens/chien5.jpeg',
        alt: 'de chien',
        categorie: 'chiens'
      }
    ]
  },
  {
    name: "cochons",
    images: [
      {
        src: '/images/data/animaux/cochons/cochon1.png',
        alt: 'de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon2.png',
        alt: 'de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon3.jpeg',
        alt: 'de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon4.jpeg',
        alt: 'de cochon',
        categorie: 'cochons'
      },
      {
        src: '/images/data/animaux/cochons/cochon5.jpeg',
        alt: 'de cochon',
        categorie: 'cochons'
      }
    ]
  },
  {
    name: "coq",
    images: [
      {
        src: '/images/data/animaux/coq/coq1.jpg',
        alt: 'de coq',
        categorie: 'coq'
      },
      {
        src: '/images/data/animaux/coq/coq2.jpg',
        alt: 'de coq',
        categorie: 'coq'
      },
      {
        src: '/images/data/animaux/coq/coq3.jpeg',
        alt: 'de coq',
        categorie: 'coq'
      }
    ]
  },
  {
    name: "dauphins",
    images: [
      {
        src: '/images/data/animaux/dauphins/dauphin1.jpeg',
        alt: 'de dauphin',
        categorie: 'dauphins'
      },
      {
        src: '/images/data/animaux/dauphins/dauphin2.jpeg',
        alt: 'de dauphin',
        categorie: 'dauphins'
      },
      {
        src: '/images/data/animaux/dauphins/dauphin3.jpeg',
        alt: 'de dauphin',
        categorie: 'dauphins'
      },
      {
        src: '/images/data/animaux/dauphins/dauphin4.jpeg',
        alt: 'de dauphin',
        categorie: 'dauphins'
      }
    ]
  },
  {
    name: "ecureuils",
    images: [
      {
        src: '/images/data/animaux/ecureuils/ecureuil1.png',
        alt: "d'écureuil",
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil2.jpeg',
        alt: "d'écureuil",
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil3.webp',
        alt: "d'écureuil",
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil4.jpeg',
        alt: "d'écureuil",
        categorie: 'ecureuils'
      },
      {
        src: '/images/data/animaux/ecureuils/ecureuil5.png',
        alt: "d'écureuil",
        categorie: 'ecureuils'
      }
    ]
  },
  {
    name: "elephant",
    images: [
      {
        src: '/images/data/animaux/elephant/elephant1.jpeg',
        alt: "d'éléphant",
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant2.png',
        alt: "d'éléphant",
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant3.jpeg',
        alt: "d'éléphant",
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant4.png',
        alt: "d'éléphant",
        categorie: 'elephant'
      },
      {
        src: '/images/data/animaux/elephant/elephant5.jpeg',
        alt: "d'éléphant",
        categorie: 'elephant'
      }
    ]
  },
  {
    name: "hamsters",
    images: [
      {
        src: '/images/data/animaux/hamsters/hamster2.jpeg',
        alt: 'de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster3.jpeg',
        alt: 'de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster4.png',
        alt: 'de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster5.jpeg',
        alt: 'de hamster',
        categorie: 'hamsters'
      },
      {
        src: '/images/data/animaux/hamsters/hamster6.svg',
        alt: 'de hamster',
        categorie: 'hamsters'
      }
    ]
  },
  {
    name: "herissons",
    images: [
      {
        src: '/images/data/animaux/herissons/herisson1.jpeg',
        alt: 'de herisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson2.png',
        alt: 'de hérisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson3.jpeg',
        alt: 'de hérisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson4.webp',
        alt: 'de hérisson',
        categorie: 'herissons'
      },
      {
        src: '/images/data/animaux/herissons/herisson5.jpeg',
        alt: 'de hérisson',
        categorie: 'herissons'
      }
    ]
  },

  {
    name: "lapins",
    images: [
      {
        src: '/images/data/animaux/lapins/lapin1.jpeg',
        alt: 'de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin2.png',
        alt: 'de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin3.jpeg',
        alt: 'de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin4.jpeg',
        alt: 'de lapin',
        categorie: 'lapins'
      },
      {
        src: '/images/data/animaux/lapins/lapin5.jpg',
        alt: 'de lapin',
        categorie: 'lapins'
      }
    ]
  },
  {
    name: "lions",
    images: [
      {
        src: '/images/data/animaux/lions/lion1.png',
        alt: 'de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion2.jpg',
        alt: 'de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion3.jpeg',
        alt: 'de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion4.png',
        alt: 'de lion',
        categorie: 'lions'
      },
      {
        src: '/images/data/animaux/lions/lion5.jpeg',
        alt: 'de lion',
        categorie: 'lions'
      }
    ]
  },

  {
    name: "oiseaux",
    images: [
      {
        src: '/images/data/animaux/oiseaux/oiseau1.jpeg',
        alt: "d'oiseau",
        categorie: 'oiseaux'
      },
      {
        src: '/images/data/animaux/oiseaux/oiseau2.jpeg',
        alt: "d'oiseau",
        categorie: 'oiseaux'
      },
      {
        src: '/images/data/animaux/oiseaux/oiseau3.png',
        alt: "d'oiseau",
        categorie: 'oiseaux'
      },
      {
        src: '/images/data/animaux/oiseaux/oiseau4.jpeg',
        alt: "d'oiseau",
        categorie: 'oiseaux'
      }
    ]
  },

  {
    name: "pandas",
    images: [
      {
        src: '/images/data/animaux/pandas/panda1.png',
        alt: 'de panda',
        categorie: 'pandas'
      },
      {
        src: '/images/data/animaux/pandas/panda2.jpeg',
        alt: 'de panda',
        categorie: 'pandas'
      },
      {
        src: '/images/data/animaux/pandas/panda3.png',
        alt: 'de panda',
        categorie: 'pandas'
      },
      {
        src: '/images/data/animaux/pandas/panda4.jpeg',
        alt: 'de panda',
        categorie: 'pandas'
      }
    ]
  },

  {
    name: "poules",
    images: [
      {
        src: '/images/data/animaux/poules/poule1.jpg',
        alt: 'de poule',
        categorie: 'poules'
      },
      {
        src: '/images/data/animaux/poules/poule2.png',
        alt: 'de poule',
        categorie: 'poules'
      },
      {
        src: '/images/data/animaux/poules/poule3.jpeg',
        alt: 'de poule',
        categorie: 'poules'
      }
    ]
  },


  {
    name: "renards",
    images: [
      {
        src: '/images/data/animaux/renards/renard1.jpeg',
        alt: 'de renard',
        categorie: 'renards'
      },
      {
        src: '/images/data/animaux/renards/renard2.jpeg',
        alt: 'de renard',
        categorie: 'renards'
      },

      {
        src: '/images/data/animaux/renards/renard4.jpg',
        alt: 'de renard',
        categorie: 'renards'
      },
      {
        src: '/images/data/animaux/renards/renard5.jpg',
        alt: 'de renard',
        categorie: 'renards'
      }
    ]
  },

  {
    name: "ambulances",
    images: [
      {
        src: '/images/data/vehicules/ambulances/ambulance1.jpg',
        alt: "d'ambulance",
        categorie: 'ambulances'
      },
      {
        src: '/images/data/vehicules/ambulances/ambulance2.jpg',
        alt: "d'ambulance",
        categorie: 'ambulances'
      },
      {
        src: '/images/data/vehicules/ambulances/ambulance3.jpg',
        alt: "d'ambulance",
        categorie: 'ambulances'
      }
    ]
  },

  {
    name: "singes",
    images: [
      {
        src: '/images/data/animaux/singes/singe1.jpeg',
        alt: 'de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe2.jpeg',
        alt: 'de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe3.jpeg',
        alt: 'de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe4.png',
        alt: 'de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe5.jpeg',
        alt: 'de singe',
        categorie: 'singes'
      },
      {
        src: '/images/data/animaux/singes/singe6.png',
        alt: 'de singe',
        categorie: 'singes'
      }
    ]
  },

  {
    name: "souris",
    images: [
      {
        src: '/images/data/animaux/souris/souris1.png',
        alt: 'de souris',
        categorie: 'souris'
      },
      {
        src: '/images/data/animaux/souris/souris2.webp',
        alt: 'de souris',
        categorie: 'souris'
      },
      {
        src: '/images/data/animaux/souris/souris3.jpeg',
        alt: 'de souris',
        categorie: 'souris'
      },
      {
        src: '/images/data/animaux/souris/souris4.png',
        alt: 'de souris',
        categorie: 'souris'
      }
    ]
  },

  {
    name: "zebres",
    images: [
      {
        src: '/images/data/animaux/zebres/zebre1.webp',
        alt: 'de zebre',
        categorie: 'zebres'
      },
      {
        src: '/images/data/animaux/zebres/zebre2.jpeg',
        alt: 'de zebre',
        categorie: 'zebres'
      },
      {
        src: '/images/data/animaux/zebres/zebre3.png',
        alt: 'de zebre',
        categorie: 'zebres'
      },
      {
        src: '/images/data/animaux/zebres/zebre4.jpeg',
        alt: 'de zebre',
        categorie: 'zebres'
      }
    ]
  },

  {
    name: "bus",
    images: [
      {
        src: '/images/data/vehicules/bus/bus1.jpg',
        alt: 'de bus',
        categorie: 'bus'
      },
      {
        src: '/images/data/vehicules/bus/bus2.jpg',
        alt: 'de bus',
        categorie: 'bus'
      },
      {
        src: '/images/data/vehicules/bus/bus3.jpg',
        alt: 'de bus',
        categorie: 'bus'
      }
    ]
  },
  {
    name:"chemises",
    images: [
      {
        src: '/images/data/vetements/chemises/chemise1.png',
        alt: 'de chemise',
        categorie: 'chemises'
      },
      {
        src: '/images/data/vetements/chemises/chemise2.jpeg',
        alt: 'de chemise',
        categorie: 'chemises'
      },
      {
        src: '/images/data/vetements/chemises/chemise3.jpeg',
        alt: 'de chemise',
        categorie: 'chemises'
      },
    ]
  },
  {
    name:"pulls",
    images: [
      {
        src: '/images/data/vetements/pulls/pull1.png',
        alt: 'de pull',
        categorie: 'pulls'
      }
    ]
  },
  {
    name:"robes",
    images: [
      {
        src: '/images/data/vetements/robes/robe1.jpeg',
        alt: 'de robe',
        categorie: 'robes'
      },
      {
        src: '/images/data/vetements/robes/robe2.jpeg',
        alt: 'de robe',
        categorie: 'robes'
      },
      {
        src: '/images/data/vetements/robes/robe3.png',
        alt: 'de robe',
        categorie: 'robes'
      },
    ]
  },
  {
    name:"sous-vetements",
    images: [
      {
        src: '/images/data/vetements/sous-vetements/culotte2.png',
        alt: 'de sous-vetement',
        categorie: 'sous-vetements'
      },
      {
        src: '/images/data/vetements/sous-vetements/culotte3.webp',
        alt: 'de sous-vetement',
        categorie: 'sous-vetements'
      },
      {
        src: '/images/data/vetements/sous-vetements/culotte4.jpeg',
        alt: 'de sous-vetement',
        categorie: 'sous-vetements'
      },
    ]
  },
  {
    name:"tee-shirt",
    images: [
      {
        src: '/images/data/vetements/tee-shirt/tee-shirt1.jpeg',
        alt: 'de tee-shirt',
        categorie: 'tee-shirt'
      },
      {
        src: '/images/data/vetements/tee-shirt/tee-shirt2.webp',
        alt: 'de tee-shirt',
        categorie: 'tee-shirt'
      }
    ]
  },
  {
    name:"vestes",
    images: [
      {
        src: '/images/data/vetements/vestes/veste1.webp',
        alt: 'de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste2.png',
        alt: 'de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste3.jpeg',
        alt: 'de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste4.jpeg',
        alt: 'de veste',
        categorie: 'vestes'
      },
      {
        src: '/images/data/vetements/vestes/veste5.jpeg',
        alt: 'de veste',
        categorie: 'vestes'
      },
    ]
  },
  {
    name:"boulangers",
    images: [
      {
        src: '/images/data/professions/boulangers/boulanger1.jpg',
        alt: 'de boulanger',
        categorie: 'boulangers'
      },
      {
        src: '/images/data/professions/boulangers/boulanger2.jpg',
        alt: 'de boulanger',
        categorie: 'boulangers'
      },
      {
        src: '/images/data/professions/boulangers/boulanger3.jpg',
        alt: 'de boulanger',
        categorie: 'boulangers'
      }
    ]
  },
  {
    name:"pompiers",
    images: [
      {
        src: '/images/data/professions/pompiers/pompier1.jpg',
        alt: 'de pompier',
        categorie: 'pompiers'
      },
      {
        src: '/images/data/professions/pompiers/pompier2.jpg',
        alt: 'de pompier',
        categorie: 'pompiers'
      },
      {
        src: '/images/data/professions/pompiers/pompier3.jpg',
        alt: 'de pompier',
        categorie: 'pompiers'
      }
    ]
  },
  {
    name: "chaises",
    images: [
      {
        src: '/images/chaise1.jpg',
        alt: 'de chaise',
        categorie: 'chaises'
      },
      {
        src: '/images/chaise2.jpg',
        alt: 'de chaise',
        categorie: 'chaises'
      },
      {
        src: '/images/chaise3.jpg',
        alt: 'de chaise',
        categorie: 'chaises'
      }
    ]
  },
  {
    name: "boulangerie",
    images: [
      {
        src: '/images/data/nourritures/boulangerie/pain1.jpg',
        alt: 'de pain',
        categorie: 'boulangerie'
      },
      {
        src: '/images/data/nourritures/boulangerie/pain2.jpg',
        alt: 'de pain',
        categorie: 'boulangerie'
      },
      {
        src: '/images/data/nourritures/boulangerie/pain3.jpg',
        alt: 'de pain',
        categorie: 'boulangerie'
      }
    ]
  },
  {
    name: "chewing-gum",
    images: [
      {
        src: '/images/data/nourritures/chewing-gum/chewing-gum1.jpg',
        alt: 'de chewing-gum',
        categorie: 'chewing-gum'
      },
      {
        src: '/images/data/nourritures/chewing-gum/chewing-gum2.jpg',
        alt: 'de chewing-gum',
        categorie: 'chewing-gum'
      },
      {
        src: '/images/data/nourritures/chewing-gum/chewing-gum3.jpg',
        alt: 'de chewing-gum',
        categorie: 'chewing-gum'
      }
    ]
  },
  {
    name: "confiture",
    images: [
      {
        src: '/images/data/nourritures/confiture/confiture1.jpg',
        alt: 'de confiture',
        categorie: 'confiture'
      },
      {
        src: '/images/data/nourritures/confiture/confiture2.jpg',
        alt: 'de confiture',
        categorie: 'confiture'
      },
      {
        src: '/images/data/nourritures/confiture/confiture3.jpg',
        alt: 'de confiture',
        categorie: 'confiture'
      },
      {
        src: '/images/data/nourritures/confiture/confiture4.jpg',
        alt: 'de confiture',
        categorie: 'confiture'
      }
    ]
  },
  {
    name: "fruits",
    images: [
      {
        src: '/images/data/nourritures/fruits/banane1.jpg',
        alt: 'de banane',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/banane2.jpg',
        alt: 'de banane',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/banane3.jpg',
        alt: 'de banane',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/cerises1.jpg',
        alt: 'de cerises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/cerises2.jpg',
        alt: 'de cerises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/cerises3.jpg',
        alt: 'de cerises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/fraises1.jpg',
        alt: 'de fraises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/fraises2.jpg',
        alt: 'de fraises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/fraises3.jpg',
        alt: 'de fraises',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/framboise1.jpg',
        alt: 'de framboise',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/framboise2.jpg',
        alt: 'de framboise',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/framboise3.jpg',
        alt: 'de framboise',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/kiwi1.jpg',
        alt: 'de kiwi',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/kiwi2.jpg',
        alt: 'de kiwi',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/kiwi3.jpg',
        alt: 'de kiwi',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/orange1.jpg',
        alt: "d'orange",
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/orange2.jpg',
        alt: "d'orange",
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/orange3.jpg',
        alt: "d'orange",
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/peches1.jpg',
        alt: 'de peches',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/peches2.jpg',
        alt: 'de peches',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/peches3.jpg',
        alt: 'de peches',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/poires1.jpg',
        alt: 'de poires',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/poires2.jpg',
        alt: 'de poires',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/poires3.jpg',
        alt: 'de poires',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/pommes1.jpg',
        alt: 'de pommes',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/pommes2.jpg',
        alt: 'de pommes',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/pommes3.jpg',
        alt: 'de pommes',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/tomate1.jpg',
        alt: 'de tomate',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/tomate2.jpg',
        alt: 'de tomate',
        categorie: 'fruits'
      },
      {
        src: '/images/data/nourritures/fruits/tomate3.jpg',
        alt: 'de tomate',
        categorie: 'fruits'
      },
    ]
  },
  {
    name: "legumes-verts",
    images: [
      {
        src: '/images/data/nourritures/legumes-verts/aubergine1.jpg',
        alt: 'de aubergine',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/aubergine2.jpg',
        alt: "d'aubergine",
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/aubergine3.jpg',
        alt: "d'aubergine",
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/brocolis1.jpg',
        alt: 'de brocolis',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/brocolis2.jpg',
        alt: 'de brocolis',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/brocolis3.jpg',
        alt: 'de brocolis',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/courgette1.jpg',
        alt: 'de courgette',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/courgette2.jpg',
        alt: 'de courgette',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/courgette3.jpg',
        alt: 'de courgette',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/petits-pois1.jpg',
        alt: 'de petits-poids',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/petits-pois2.jpg',
        alt: 'de petits-poids',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/petits-pois3.jpg',
        alt: 'de petits-poids',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/haricots-verts1.jpg',
        alt: 'de haricots-verts',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/haricots-verts2.jpg',
        alt: 'de haricots-verts',
        categorie: 'legumes-verts'
      },
      {
        src: '/images/data/nourritures/legumes-verts/haricots-verts3.jpg',
        alt: 'de haricots-verts',
        categorie: 'legumes-verts'
      },
    ]
  },
  {
    name: "marrons",
    images: [
      {
        src: '/images/data/nourritures/marrons/marron1.jpg',
        alt: 'de marron',
        categorie: 'marrons'
      }
    ]
  },
  {
    name: "noisettes",
    images: [
      {
        src: '/images/data/nourritures/noisettes/noisettes1.jpg',
        alt: 'de noisettes',
        categorie: 'noisettes'
      },
      {
        src: '/images/data/nourritures/noisettes/noisettes2.jpg',
        alt: 'de noisettes',
        categorie: 'noisettes'
      },
      {
        src: '/images/data/nourritures/noisettes/noisettes3.jpg',
        alt: 'de noisettes',
        categorie: 'noisettes'
      },
    ]
  },
  {
    name: "noix",
    images: [
      {
        src: '/images/data/nourritures/noix/noix1.jpg',
        alt: 'de noix',
        categorie: 'noix'
      },
      {
        src: '/images/data/nourritures/noix/noix2.jpg',
        alt: 'de noix',
        categorie: 'noix'
      },
      {
        src: '/images/data/nourritures/noix/noix3.jpg',
        alt: 'de noix',
        categorie: 'noix'
      },
    ]
  },
  {
    name: "boissons",
    images: [
      {
        src: '/images/data/sucre-sale/boissons/boisson-coca1.jpeg',
        alt: 'de boisson-coca',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/boisson-coca2.jpeg',
        alt: 'de boisson-coca',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/boisson-coca3.jpeg',
        alt: 'de boisson-coca',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/citronnade1.jpeg',
        alt: 'de citronnade',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/ice-tea1.jpeg',
        alt: 'de ice-tea',
        categorie: 'boissons'
      },
      {
        src: '/images/data/sucre-sale/boissons/ice-tea2.jpeg',
        alt: 'de ice-tea',
        categorie: 'boissons'
      },
    ]
  },
  {
    name: "nourriture",
    images: [
      {
        src: '/images/data/sucre-sale/nourriture/frite1.jpeg',
        alt: 'de frites',
        categorie: 'nourriture'
      },
      {
        src: '/images/data/sucre-sale/nourriture/frite2.png',
        alt: 'de frites',
        categorie: 'nourriture'
      },
      {
        src: '/images/data/sucre-sale/nourriture/frite3.JPG',
        alt: 'de frites',
        categorie: 'nourriture'
      },
      {
        src: '/images/data/sucre-sale/nourriture/gateau-apero.jpeg',
        alt: 'de gateau-apero',
        categorie: 'nourriture'
      }
    ]
  },
  {
    name: "camions",
    images: [
      {
        src: '/images/data/vehicules/camions/camion1.jpg',
        alt: 'de camion',
        categorie: 'camions'
      },
      {
        src: '/images/data/vehicules/camions/camion2.jpg',
        alt: 'de camion',
        categorie: 'camions'
      },
      {
        src: '/images/data/vehicules/camions/camion3.jpg',
        alt: 'de camion',
        categorie: 'camions'
      }
    ]
  },
  {
    name: "tables",
    images: [
      {
        src: '/images/table1.jpg',
        alt: 'de table',
        categorie: 'tables'
      },
      {
        src: '/images/table2.jpeg',
        alt: 'de table',
        categorie: 'tables'
      },
      {
        src: '/images/table3.jpg',
        alt: 'de table',
        categorie: 'tables'
      }
    ]
  }
]