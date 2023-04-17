import {readdirSync, readdir, writeFile} from 'fs'








const imagesDir = './static/images/data'
const imgBaseUrl = imagesDir.split('./static')[1]

console.log(imgBaseUrl);
const data = []


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
console.log(data);
console.log(data[0].categories[0].images);

writeFile('data.json', JSON.stringify(data), 'utf8', (err) => {
  console.log(err);
});




function readTheme(theme) {
  let list = readdirSync(`${imagesDir}/${theme.name}`)

  list = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  list.forEach((categorie) => {
    const categorieObj = {name: categorie, images: []}


    categorieObj.images = readImages(`${theme.name}/${categorie}`)
    theme.categories.push(categorieObj)


  })
  data.push(theme)


}


function readImages(path) {

  const finalList = []

  let imagesList = readdirSync(`${imagesDir}/${path}`)
  imagesList = imagesList.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  imagesList.forEach((image) => {
    finalList.push(`${imgBaseUrl}/${path}/${image}`)
  })

  return finalList
}
