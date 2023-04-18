import {readdirSync, existsSync, writeFile, unlinkSync} from 'fs'


const imagesDir = './static/images/data'
const imgBaseUrl = imagesDir.split('./static')[1]

const data = []

const isFile = existsSync('src/lib/data/data.json');

if (isFile) {
  unlinkSync('src/lib/data/data.json')
}

readdirSync(imagesDir).forEach((dir) => {

  if(! /^\..*/.test(dir)) {
    // display files

    const theme = {
      name: dir,
      categories: []
    }
    readTheme(theme)


  }
})

writeFile('src/lib/data/data.json', JSON.stringify(data), 'utf8', (err) => {
  console.log(err);
});




function readTheme(theme) {
  let list = readdirSync(`${imagesDir}/${theme.name}`)

  list = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  list.forEach((categorie) => {
    const categorieObj = {name: categorie, images: []}

    const images = readImages(`${theme.name}/${categorie}`, categorie)
    categorieObj.images = images
    theme.categories.push(categorieObj)


  })
  data.push(theme)


}


function readImages(path, categorie) {

  const finalList = []

  let imagesList = readdirSync(`${imagesDir}/${path}`)
  imagesList = imagesList.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  imagesList.forEach((image) => {

    const imageObj = {
      src: `${imgBaseUrl}/${path}/${image}`,
      alt: image.split('.')[0],
      catergorie: categorie
    }
    finalList.push(imageObj)
  })

  return finalList
}
