const header = document.createElement('header')
const headerUlLeft = document.createElement('ul')
const headerUlRight = document.createElement('ul')
headerUlLeft.classList.add('header-list-left')
headerUlRight.classList.add('header-list-right')

const headerElements = ['Home', 'Search', 'Language', 'Mi Account', 'Char']

const headerDivLeft = document.createElement('div')
headerDivLeft.classList.add('header-div-left')

const headerDivRight = document.createElement('div')
headerDivRight.classList.add('header-div-right')

const backgroundDiv = document.createElement('div')
backgroundDiv.classList.add('background')
header.appendChild(backgroundDiv)

const searchContainer = document.createElement('div')
searchContainer.classList.add('search-container')

const searchForm = document.createElement('form')
searchForm.classList.add('search-form')

const searchInput = document.createElement('input')
searchInput.classList.add('search-input')
searchInput.setAttribute('type', 'text')
searchInput.setAttribute('placeholder', 'Search...')

const searchButton = document.createElement('button')
searchButton.classList.add('search-button')

const searchButtonImage = document.createElement('img')
searchButtonImage.setAttribute(
  'src',
  'https://img.icons8.com/ios-filled/50/000000/search.png'
)
searchButtonImage.setAttribute('alt', 'Search')

searchButton.appendChild(searchButtonImage)
searchForm.appendChild(searchInput)
searchForm.appendChild(searchButton)
searchContainer.appendChild(searchForm)

for (let i = 0; i < headerElements.length; i++) {
  const element = headerElements[i]
  let li = document.createElement('li')
  li.textContent = element
  if (element === 'Home') {
    headerUlLeft.appendChild(li)
  } else if (element === 'Search') {
    headerUlLeft.appendChild(searchContainer)
  } else {
    headerUlRight.appendChild(li)
  }
}

headerDivLeft.appendChild(headerUlLeft)
headerDivRight.appendChild(headerUlRight)
header.appendChild(headerDivLeft)
header.appendChild(headerDivRight)

document.body.appendChild(header)

const main = document.createElement('main')

const sectionFilter = document.createElement('section')
const sectionProducts = document.createElement('section')

const ulFilter = document.createElement('ul')
const ulProducts = document.createElement('ul')

const titleFilter = document.createElement('h2')
titleFilter.textContent = 'Product Categories'

const titleProdcuts = document.createElement('h1')
titleProdcuts.textContent = 'New Arrivals'

const categories = [
  'Computers',
  'Electronics',
  'Clothing and Footwear',
  'Movies and TV Shows',
  'Video Games',
  'Manga and Comics',
  'Phones and Accessories',
  'Smartwatches',
  'Toys',
  'Home'
]

for (const categorie of categories) {
  let li = document.createElement('li')
  li.textContent = categorie
  ulFilter.appendChild(li)
}

// Los campos vendedor seller y precio price son obligatorios en cualquiera de los proyectos:
const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  {
    name: 'Alicenaga Sneakers Women Running Shoes',
    price: 22.6,
    stars: 4.2,
    reviews: 12778,
    seller: 'Amazon',
    image:
      'https://www.amazon.com/Alicegana-Breathable-Athletic-Fashion-Sneakers/dp/B074J798BD/ref=sr_1_14?dib=eyJ2IjoiMSJ9.lQPYLmnGKodg4Tf5frGuPF6w33ow9Ecru4SLyrJTR8PBWsoKsJnfjcwjCrlKWzi4U-ihBAdxTMMWD0axv94bZQaIExKFfcLSOJxBsf6md9rqignq6f0Pi5WcezP2G7Qwf-wNLTEIWWBiyq5TIE05tEi2ScjlxLVNmoFx65tVa3sFAVibBIIMecCnSdGdCOaKf9HqakRDpQWEFJU8A4b5ol1KsQpZzze29lTL-m2idScA8cuY83L6X0TRY2l6II9e2QDv_zfwYHRJRhHXbg3hw-JwAQfRiDkIrS8CfuO7Kmw.H1ozDVyXYowp6twmdlnbkICHy02yu9tPcGnHB6TSYxk&dib_tag=se&keywords=sport+shoes&qid=1725310307&sr=8-14'
  },
  {
    name: 'Camiseta Techno',
    price: 20,
    stars: 4.6,
    reviews: 26486,
    seller: 'latostadora',
    image:
      'https://srv.latostadora.com/image/tech-no-tabla-periodica-de-techno-edm-rave-dj--id:861081d4-2ad5-41db-9e41-2a94c1cb6ff6;s:H_A1;b:f2f2f2;w:520;f:f;i:1356233509438135623201709261.jpg'
  },
  {
    name: 'Infiltrados 4k UltraHD + Blue-Ray',
    price: 19.95,
    stars: 4.5,
    reviews: 152,
    seller: 'El Corte Inglés',
    image:
      'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202406/26/00125980810037____1__1200x1200.jpg?impolicy=Resize&width=1200'
  },
  {
    name: 'The Office the complete series DVD',
    price: 32.99,
    stars: 4.4,
    reviews: 126,
    seller: 'walmart',
    image:
      'https://i5.walmartimages.com/seo/The-Office-The-Complete-Series-DVD-Universal-Studios-Comedy_cae958f0-ca90-4d16-8c7f-5622eaf82870.54f4a9b9d5c04664a4e342aff44eb256.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
  },
  {
    name: 'Xiaomi Redmi Watch 4',
    price: 89.99,
    stars: 4.6,
    reviews: 19,
    seller: 'MediaMarkt',
    image:
      'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_136069590?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402'
  },
  {
    name: 'Elden Ring DLC- Shadow of the Erdtree',
    price: 31.52,
    stars: 5,
    reviews: 84,
    seller: 'Instant-Gaming',
    image:
      'https://gaming-cdn.com/images/products/13652/616x353/elden-ring-shadow-of-the-erdtree-pc-juego-steam-europe-cover.jpg?v=1718975158'
  },
  {
    name: 'Demon Slayer Complete manga',
    price: 162.88,
    stars: 4.8,
    reviews: 5130,
    seller: 'Amazon',
    image:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpS0o0bnJBQlJYRTdzdWVwMVBVb2c4L1B1OWIzMk5Pa05pM0VtRDBtTXRCK3dUMngwVnJycmY0WkN2ZnNvOUpFNFcraHk5OElIb1ltUHJZVjBUY3JCcW9xbVhUa3FGSmI3VWZ2cHdnckVOUmlBPT0=&traceId=1'
  },
  {
    name: 'iPhone 15 Pro',
    price: 1219,
    stars: 4.5,
    reviews: 515,
    seller: 'Apple.com',
    image: 'https://m.media-amazon.com/images/I/810Isi4YasS._SL1500_.jpg'
  },
  {
    name: 'PcCom Gaming',
    price: 1069,
    stars: 4.7,
    reviews: 469,
    seller: 'PcComponentes',
    image:
      'https://www.pccomponentes.com/pccom-ready-intel-core-i5-12400f-32gb-1tb-ssd-rtx-4060-ti'
  }
]
