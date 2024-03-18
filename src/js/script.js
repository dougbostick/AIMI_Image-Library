const imgUrls = [
    'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
    'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
]
    
//repeating images to generaate enough space below the fold to test lazy loading of final image
const imgArr = [...imgUrls, ...imgUrls, ...imgUrls, ...imgUrls, ...imgUrls, ...imgUrls, 'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg']

const makeCol = () => {
    const col = document.createElement('div')
    col.className = 'col'
    return col
}

const makeCheckbox = (index) => {
    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.name = `${index}Checkbox`
    checkBox.id = index
    checkBox.value = index
    return checkBox
}

const makeImage = (imgUrl) => {
    const img = document.createElement('img')
    img.src = imgUrl
    img.loading = 'lazy'
    return img
}

const makeLabel = (index, imgUrl) => {
    const label = document.createElement('label')
    label.htmlFor = index
    label.appendChild(makeImage(imgUrl))
    return label
}

const grid = document.getElementsByClassName('container')

const row = document.createElement('div')
row.className = 'row row-cols-4'

for(const [index, url] of imgArr.entries()){
    const col = makeCol()
    col.appendChild(makeCheckbox(index))
    col.appendChild(makeLabel(index, url))
    row.appendChild(col)
}

grid[0].appendChild(row)



