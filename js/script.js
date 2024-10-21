const firstHoodieName = document.querySelector('main h3')
// console.log(firstHoodieName)
firstHoodieName.innerText = 'Potato'

const homeLinks = [document.querySelector('header a'), document.querySelector('footer a')]
// console.log(homeLinks)
homeLinks.forEach(link => link.innerText = 'Start')

const contactLinks = [document.querySelector('header a:nth-of-type(3)'), document.querySelector('footer a:nth-of-type(3)')]
// console.log(contactLinks)
contactLinks.forEach(link => link.innerText = 'Mail Us')

const fireHoodieText = document.querySelector('.art-2 p')
// console.log(fireHoodieText)
fireHoodieText.innerText = "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I? Fire."

const thirdButton = document.querySelector('.art-3 button')
// console.log(thirdButton)
thirdButton.style.backgroundColor = 'maroon'

const firstProductFigure = document.querySelector('.art-1 figure')
// console.log(firstProductFigure)
firstProductFigure.style.backgroundColor = 'darkgreen'

const addressElement = document.querySelector('footer p')
// console.log(addressElement)
addressElement.innerHTML = "Hoodie McHoodersen <br> Bråkmakargatan 22 <br> 123 45 Gråbo"
// Alternatively innerText = ".... /n ... /n ..." or at least I think that'd work

const allParagraphs = document.querySelectorAll('p')
// console.log(allParagraphs)
allParagraphs.forEach(p => p.style.color = 'darkcyan')

const allButtons = document.querySelectorAll('button')
// console.log(allButtons)
allButtons.forEach(btn => btn.innerText = 'add to cart')

homeLinks.forEach(link => link.classList.add('active'))

const logoElement = document.querySelector('.logo')
// console.log(logoElement)
logoElement.classList.remove('logo')


const menuElement = document.querySelector('footer article')
// console.log(menuElement)
const newMenuItem = document.createElement('a')
newMenuItem.innerText = 'Other?'
newMenuItem.setAttribute('href', '#') 
menuElement.append(newMenuItem)

const newArticle = document.createElement('article')
newArticle.classList.add('art-4')
newArticle.insertAdjacentHTML('beforeend', "<figure><img src='img/hoodie-forrest.png' alt='hoodie'></figure>")
newArticle.insertAdjacentHTML("beforeend", "<h2>Sinus Hoodie</h2>")
newArticle.insertAdjacentHTML("beforeend", "<h3>Forrest</h3>")
newArticle.insertAdjacentHTML("beforeend", "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>")
document.querySelector('main').append(newArticle)

logoElement.addEventListener("click", ()=>{console.log('found you!')})

const products = document.querySelectorAll('main article')
// console.log(products)
for (const product of products) {
    const name = product.querySelector('h3').innerText
    product.addEventListener("click", () => {
        console.log(`Hi, I'm article ${name}.`)
    })
}