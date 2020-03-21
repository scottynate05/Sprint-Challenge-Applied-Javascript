// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function article(Obj) {
    // elements
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const authImg = document.createElement('img')
    const authName = document.createElement('span')

    // style
    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')
    authImg.src = Obj.authorPhoto

    // content
    headLine.textContent = Obj.headline
    authName.textContent = Obj.authorName

    // structure
    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgCont)
    imgCont.appendChild(authImg)
    author.appendChild(authName)

    return card
}
const entryP = document.querySelector('.cards-container')
const array = ['bootstrap', 'javascript', 'jquery', 'node', 'technology']



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
    res.data.articles.bootstrap.forEach(a => {
        const cardA = article(a)
        entryP.appendChild(cardA)
    })
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resp => {
    resp.data.articles.javascript.forEach(b => {
        const cardB = article(b)
        entryP.appendChild(cardB)
    })
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(respo => {
    respo.data.articles.jquery.forEach(c => {
        const cardC = article(c)
        entryP.appendChild(cardC)
    })
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(respon => {
    respon.data.articles.node.forEach(d => {
        const cardD = article(d)
        entryP.appendChild(cardD)
    })
})