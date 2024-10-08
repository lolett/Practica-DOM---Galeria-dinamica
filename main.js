const header = document.createElement('header')
const headerUlLeft = document.createElement('ul')
const headerUlRight = document.createElement('ul')
headerUlLeft.classList.add('header-list-left')
headerUlRight.classList.add('header-list-right')

const headerElements = ['Home', 'Search', 'Language', 'Account', 'Cart']

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
  let a = document.createElement('a')
  a.href = '#'
  a.textContent = element
  li.appendChild(a)
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
main.classList.add('main-container')
const sectionCategories = document.createElement('section')
sectionCategories.classList.add('section-categories')
main.appendChild(sectionCategories)
const sectionProducts = document.createElement('section')
sectionProducts.classList.add('section-products')
main.appendChild(sectionProducts)
document.body.appendChild(main)

//sección categorías
const ulCategories = document.createElement('ul')
ulCategories.classList.add('ul-categories')

const titleCategories = document.createElement('h2')
titleCategories.classList.add('h2-categories')
titleCategories.textContent = 'Product Categories'

const categories = [
  'Computers',
  'Electronics',
  'Clothing and Footwear',
  'Movies and TV Shows',
  'Video Games',
  'Manga and Comics',
  'Phones and Accessories',
  'Smartwatches',
  'Home'
]

for (const categorie of categories) {
  let li = document.createElement('li')
  let a = document.createElement('a')
  a.href = '#'
  a.textContent = categorie
  li.appendChild(a)
  ulCategories.appendChild(li)
}

sectionCategories.appendChild(titleCategories)
sectionCategories.appendChild(ulCategories)

// sección productos

const titleProducts = document.createElement('h1')
titleProducts.classList.add('h1-products')
titleProducts.textContent = 'New Arrivals'

sectionProducts.appendChild(titleProducts)

// Los campos vendedor seller y precio price son obligatorios en cualquiera de los proyectos:
const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: '289€',
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg',
    url: 'https://www.pccomponentes.com/hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156?srsltid=AfmBOoprDwP1KxSsuyesrKLFXae7dH1AyWIx4MB7elrEhQVlsMHK3wCv'
  },
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  {
    name: 'Women Running Shoes',
    price: '22.6€',
    stars: 4.2,
    reviews: 12778,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/715U5DonrHL._AC_SY575_.jpg',
    url: 'https://www.amazon.com/Alicegana-Breathable-Athletic-Fashion-Sneakers/dp/B074J798BD/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.QABbJ7hEphHoSrCS44QcTqNuR3q-adRgefKlhPfbZb6gNVWIfm7QM829TUIW4Gm6tTDAcLyhcnhavZDBFHH6kjZ_agIPtCeBuD3CBr-ChIvVjnX12m1i1V8m7a6LBQ5iExbwjP8tbVZBomwayou6S1I2aoGSCZf4uROaEUiIwqInBg_2ho-WiPiD89Ou3K_7faaM0a8DtpLUTKlwpMDoga9EkqnAKjMZPEv6m19jZDkzbq5g5PtugHVInuiq1EPfae5sFBG8xMtK9wFwVtlIELRMzfiS1ZEgqHtegKexkww.iafwTPlNPxtKFIELTMGJpOKN1v6RPP8OHxH3EWFsjf0&dib_tag=se&keywords=Women%27s+white+Running+Shoes&qid=1726521324&s=apparel&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  },
  {
    name: 'Camiseta Techno',
    price: '20€',
    stars: 4.6,
    reviews: 26486,
    seller: 'latostadora',
    image:
      'https://srv.latostadora.com/image/tech-no-tabla-periodica-de-techno-edm-rave-dj--id:861081d4-2ad5-41db-9e41-2a94c1cb6ff6;s:H_A1;b:f2f2f2;w:520;f:f;i:1356233509438135623201709261.jpg',
    url: 'https://www.latostadora.com/web/tech-no-tabla-periodica-de-techno-edm-rave-dj/3545853'
  },
  {
    name: 'Infiltrados 4k/Blue-Ray',
    price: '19.95€',
    stars: 4.5,
    reviews: 152,
    seller: 'El Corte Inglés',
    image:
      'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202406/26/00125980810037____1__1200x1200.jpg?impolicy=Resize&width=1200',
    url: 'https://www.elcorteingles.es/cine/A52193352-infiltrados-4k-ultra-hd--blu-ray/'
  },
  {
    name: 'The Office Complete DVD',
    price: '32.99€',
    stars: 4.4,
    reviews: 126,
    seller: 'walmart',
    image:
      'https://i5.walmartimages.com/seo/The-Office-The-Complete-Series-DVD-Universal-Studios-Comedy_cae958f0-ca90-4d16-8c7f-5622eaf82870.54f4a9b9d5c04664a4e342aff44eb256.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    url: 'https://www.walmart.ca/en/ip/The-Office-The-Complete-Series-DVD/6000198266344'
  },
  {
    name: 'Xiaomi Redmi Watch 4',
    price: '89.99€',
    stars: 4.6,
    reviews: 19,
    seller: 'MediaMarkt',
    image:
      'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_136069590?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
    url: 'https://www.mediamarkt.es/es/product/_smartwatch-xiaomi-redmi-watch-4-bluetooth-hasta-20-dias-multideporte-negro-obsidiana-1567281.html?srsltid=AfmBOopPM7Ei3Kg1TsKIWlKIXjwvZFctwK9gwGpszqC5paWY2HLuleWa'
  },

  {
    name: 'PANTALÓN CARGO RAVEN STONE',
    price: '69.90€',
    stars: 4.5,
    reviews: 157,
    seller: 'Bluebanana',
    image:
      'https://www.bluebananabrand.com/cdn/shop/files/STONE_RAVEN_CARGO_PANT_AW24MG035RAVGY08_10_540x.jpg?v=1726137885',
    url: 'https://www.bluebananabrand.com/products/stone-raven-cargo-pants-aw24?gender=man'
  },

  {
    name: 'Elden Ring - Shadow of the Erdtree',
    price: '31.52€',
    stars: 5,
    reviews: 84,
    seller: 'Instant-Gaming',
    image:
      'https://gaming-cdn.com/images/products/13652/616x353/elden-ring-shadow-of-the-erdtree-pc-juego-steam-europe-cover.jpg?v=1718975158',
    url: 'https://www.instant-gaming.com/en/13652-buy-elden-ring-shadow-of-the-erdtree-pc-game-steam-europe/?srsltid=AfmBOoq9zZ_VqAPORpH7ZqHh_g8l65MKBwDD3is-T5pGhAg70Elv96St'
  },
  {
    name: 'Demon Slayer Complete manga',
    price: '162.88€',
    stars: 4.8,
    reviews: 5130,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/810Isi4YasS._SL1500_.jpg',
    url: 'https://www.amazon.es/Demon-Slayer-Complete-Box-Set/dp/1974725952'
  },
  {
    name: 'iPhone 16 Pro',
    price: '1219€',
    stars: 4.7,
    reviews: 100,
    seller: 'Apple',
    image:
      'https://www.apple.com/es/iphone-16-pro/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_xlarge.jpg',
    url: 'https://www.apple.com/es/iphone-16-pro/'
  },
  {
    name: 'PcCom Gaming',
    price: '1069€',
    stars: 4.7,
    reviews: 469,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1078/10789790/5313-pccom-ready-intel-core-i5-12400f-32gb-1tb-ssd-rtx-4060-ti-cbccc1fe-0fd9-4dd1-b09a-392d799c6acd.jpg',
    url: 'https://www.pccomponentes.com/pccom-ready-intel-core-i5-12400f-32gb-1tb-ssd-rtx-4060-ti'
  },

  {
    name: 'After Shave Balm',
    price: '24.90 €',
    stars: 4.4,
    reviews: 62,
    seller: 'Rituals',
    image:
      'https://rituals.scene7.com/is/image/rituals/1116295-aftershavebalm-100ml:Square?fmt=webp-alpha&hei=1163&resMode=sharp2&wid=1163',
    url: 'https://www.rituals.com/es-es/homme-after-shave-soothing-balm-1116295.html#start=1'
  }
]

for (let i = 0; i < products.length; i++) {
  const product = products[i]

  let a = document.createElement('a')
  a.href = product.url
  a.target = '_blank'
  a.classList.add('card-link')

  let article = document.createElement('article')
  article.classList.add('card')

  let img = document.createElement('img')
  img.src = product.image
  img.alt = product.name
  article.appendChild(img)

  let name = document.createElement('h3')
  name.textContent = product.name
  article.appendChild(name)

  let price = document.createElement('p')
  price.textContent = `Price: ${product.price}`
  article.appendChild(price)

  let stars = document.createElement('p')
  stars.textContent = `Rating: ${product.stars} ⭐`
  article.appendChild(stars)

  let reviews = document.createElement('p')
  reviews.textContent = `${product.reviews} reviews`
  article.appendChild(reviews)

  let seller = document.createElement('p')
  seller.textContent = `Seller: ${product.seller}`
  article.appendChild(seller)

  a.appendChild(article)
  sectionProducts.appendChild(a)
}

//footer section
const footer = document.createElement('footer')
footer.classList.add('footer')

const footerContainer = document.createElement('div')
footerContainer.classList.add('footer-container')

const footerSections = {
  'Why buy': ['How to buy', 'Payment methods', 'Discount coupons'],
  'About us': ['Who we are', 'Our stores', 'Privacy'],
  Contact: ['Contact & Help', 'Returns/Warranties', 'Cookies policy'],
  'Follow Us': []
}

const socialIcons = [
  {
    name: 'Instagram',
    icon: 'https://img.icons8.com/ios-filled/50/000000/instagram-new.png'
  },
  {
    name: 'Twitter',
    icon: 'https://img.icons8.com/ios-filled/50/000000/twitter.png'
  },
  {
    name: 'Facebook',
    icon: 'https://img.icons8.com/ios-filled/50/000000/facebook-new.png'
  }
]

for (let sectionTitle in footerSections) {
  const section = document.createElement('div')
  section.classList.add('footer-section')

  const sectionHeading = document.createElement('h4')
  sectionHeading.textContent = sectionTitle
  section.appendChild(sectionHeading)

  const ul = document.createElement('ul')

  if (sectionTitle === 'Follow Us') {
    socialIcons.forEach((social) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = '#'
      const img = document.createElement('img')
      img.src = social.icon
      img.alt = social.name
      img.style.width = '18px'
      a.appendChild(img)
      a.appendChild(document.createTextNode(`${social.name}`))
      li.appendChild(a)
      ul.appendChild(li)
    })
  } else {
    footerSections[sectionTitle].forEach((item) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = '#'
      a.textContent = item
      li.appendChild(a)
      ul.appendChild(li)
    })
  }

  section.appendChild(ul)
  footerContainer.appendChild(section)
}

footer.appendChild(footerContainer)
document.body.appendChild(footer)

/*sección redes sociales
const socialSection = document.createElement('div')
socialSection.classList.add('footer-section', 'social-media')

const socialHeading = document.createElement('h4')
socialHeading.textContent = 'Follow Us'
socialSection.appendChild(socialHeading)
document.body.appendChild(socialSection)

const socialIcons = [
  {
    name: 'Blog',
    icon: 'https://img.icons8.com/ios-filled/50/000000/blogger.png'
  },
  {
    name: 'Instagram',
    icon: 'https://img.icons8.com/ios-filled/50/000000/instagram-new.png'
  },
  {
    name: 'Twitter',
    icon: 'https://img.icons8.com/ios-filled/50/000000/twitter.png'
  },
  {
    name: 'Facebook',
    icon: 'https://img.icons8.com/ios-filled/50/000000/facebook-new.png'
  }
]

const socialUl = document.createElement('ul')

socialIcons.forEach((social) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = '#'

  const img = document.createElement('img')
  img.src = social.icon
  img.alt = social.name
  img.style.width = '18px'
  a.appendChild(img)
  a.appendChild(document.createTextNode(social.name))
  li.appendChild(a)
  socialUl.appendChild(li)
})

socialSection.appendChild(socialUl)
footerContainer.appendChild(socialSection)
footer.appendChild(footerContainer)
document.body.appendChild(footer)*/
