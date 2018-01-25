// const BASE_URL = 'https://api.helloasso.com/v3'
// const BASIC_HEADERS = {
//   'Authorization': 'Basic '
// }

export function fetchOrganisms (page, limit) {
  // const url = `${BASE_URL}/organizations.json?page=${page}&results_per_page=${limit}`
  // return window.fetch(url, {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers: {
  //     ...BASIC_HEADERS,
  //     'Content-type': 'application/json'
  //   }
  // }).then(cleanUpJsonResponse)
  //   .then(catchError)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(MOCK), 2000)
  })
}

// function cleanUpJsonResponse (response) {
//   return response.json().then((json) => {
//     return Promise.resolve([json, response.status])
//   })
// }

// function catchError ([data, status]) {
//   const resolveReject = status >= 400 ? 'reject' : 'resolve'
//   return Promise[resolveReject](data)
// }

const MOCK = {
  'resources': [{
    'id': '000000249671',
    'name': 'Les Enfants du Canal',
    'slug': 'les enfants du canal',
    'type': 'ORGANISM',
    'funding': 118908.8,
    'supporters': 1994,
    'logo': 'https://www.helloasso.com/assets/img/logos/les-enfants-du-canal.png',
    'thumbnail': 'https://www.helloasso.com/assets/img/photos/74253.jpg',
    'profile': 'https://www.helloasso.com/associations/les-enfants-du-canal',
    'donate-form': 'https://www.helloasso.com/associations/les-enfants-du-canal/formulaires/2'
  }, {
    'id': '000000305751',
    'name': 'Clowns Pour De Rire',
    'slug': 'clowns pour de rire',
    'type': 'ORGANISM',
    'funding': 7442.25,
    'supporters': 124,
    'logo': 'https://www.helloasso.com/assets/img/logos/clowns-pour-de-rire.png',
    'thumbnail': 'https://www.helloasso.com/assets/img/logos/clowns-pour-de-rire.png',
    'profile': 'https://www.helloasso.com/associations/clowns-pour-de-rire',
    'donate-form': 'https://www.helloasso.com/associations/clowns-pour-de-rire/formulaires/2'
  }, {
    'id': '000000383331',
    'name': 'AMAP LES OLIVIERS MARCHEPRIME',
    'slug': 'amap les oliviers marcheprime',
    'type': 'ORGANISM',
    'funding': 30,
    'supporters': 3,
    'logo': '',
    'thumbnail': '',
    'profile': 'https://www.helloasso.com/associations/amap-les-oliviers-marcheprime',
    'donate-form': 'https://www.helloasso.com/associations/amap-les-oliviers-marcheprime/formulaires/1'
  }, {
    'id': '000000484781',
    'name': 'RESONANTES',
    'slug': 'resonantes',
    'type': 'ORGANISM',
    'funding': 45051,
    'supporters': 309,
    'logo': 'https://www.helloasso.com/assets/img/logos/resonantes-cb8a4d74b34b4f1eb3e1caec57836f6b.png',
    'thumbnail': 'https://www.helloasso.com/assets/img/photos/80703.jpg',
    'profile': 'https://www.helloasso.com/associations/resonantes',
    'donate-form': 'https://www.helloasso.com/associations/resonantes/formulaires/1'
  }, {
    'id': '000000649631',
    'name': 'Entreprendre Pour La Solidarité (E.P.L.S.)',
    'slug': 'entreprendre pour la solidarite e p l s',
    'type': 'ORGANISM',
    'funding': 39957,
    'supporters': 260,
    'logo': 'https://www.helloasso.com/assets/img/logos/entreprendre-pour-la-solidarite-e-p-l-s-67d7d50c9ee8412eb95c000907e7d07e.jpg',
    'thumbnail': 'https://www.helloasso.com/assets/img/logos/entreprendre-pour-la-solidarite-e-p-l-s-67d7d50c9ee8412eb95c000907e7d07e.jpg',
    'profile': 'https://www.helloasso.com/associations/entreprendre-pour-la-solidarite-e-p-l-s',
    'donate-form': 'https://www.helloasso.com/associations/entreprendre-pour-la-solidarite-e-p-l-s/formulaires/1'
  }, {
    'id': '000000668211',
    'name': 'Les Amis d\'Aghirin\'man',
    'slug': 'les amis d aghirin man',
    'type': 'ORGANISM',
    'funding': 20023,
    'supporters': 150,
    'logo': 'https://www.helloasso.com/assets/img/logos/les-amis-d-aghirin-man-23f4481020d840e9b54720657e8b8809.jpg',
    'thumbnail': 'https://www.helloasso.com/assets/img/logos/les-amis-d-aghirin-man-23f4481020d840e9b54720657e8b8809.jpg',
    'profile': 'https://www.helloasso.com/associations/les-amis-d-aghirin-man',
    'donate-form': ''
  }, {
    'id': '000000708981',
    'name': 'La Biche est d\'Accord',
    'slug': 'la biche est d accord',
    'type': 'ORGANISM',
    'funding': 2375,
    'supporters': 69,
    'logo': 'https://www.helloasso.com/assets/img/logos/la-biche-est-d-accord-fe98c82544174445bcba5b519c117c01.png',
    'thumbnail': 'https://www.helloasso.com/assets/img/logos/la-biche-est-d-accord-fe98c82544174445bcba5b519c117c01.png',
    'profile': 'https://www.helloasso.com/associations/la-biche-est-d-accord',
    'donate-form': ''
  }, {
    'id': '000000718671',
    'name': 'Les Frigos Solidaires',
    'slug': 'les frigos solidaires',
    'type': 'ORGANISM',
    'funding': 3004,
    'supporters': 131,
    'logo': 'https://www.helloasso.com/assets/img/logos/les-frigos-solidaires-ce05e9dfa85b4a76b0408e3084360d99.png',
    'thumbnail': 'https://www.helloasso.com/assets/img/logos/les-frigos-solidaires-ce05e9dfa85b4a76b0408e3084360d99.png',
    'profile': 'https://www.helloasso.com/associations/les-frigos-solidaires',
    'donate-form': ''
  }],
  'pagination': {
    'page': 1,
    'max_page': 1,
    'results_per_page': 20
  }
}
