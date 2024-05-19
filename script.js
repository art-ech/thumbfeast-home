const contactUs = document.querySelector('.contact_us')
const contact = document.querySelector('.contact')
const closeContactForm = document.querySelector('.fa-solid.fa-xmark')
const myForm = document.getElementById('contact_form')
const contactMain = document.querySelector('.contact')


const openContactForm = ()=> {
    contactUs.addEventListener('click', (e)=> {
        contactMain.style.display = 'flex'
    })
}
openContactForm()


const closeForm = ()=> {
    closeContactForm.addEventListener('click', (e)=> {
        location.reload()
    })
}
closeForm()


const submitForm = ()=> {
    myForm.addEventListener('submit', (e)=> {
        e.preventDefault()
        console.log(input_name.value)
        console.log(input_email.value)
        console.log(message_input.value)
        input_name.value = ''
        input_email.value = ''
        message_input.value = ''
        contactMain.style.display = 'none'
    })
}
submitForm()

const carousel1 = document.querySelector('.store1')
const carousel2 = document.querySelector('.store2')
const carousel3 = document.querySelector('.store3')
const carouselBtn1 = document.querySelector('.carousel_button1')
const carouselBtn2 = document.querySelector('.carousel_button2')
const carouselBtn3 = document.querySelector('.carousel_button3')


const selectCarousel = ()=> {
    carouselBtn1.addEventListener('click', (e)=> {
        carousel1.classList.add('stores_transition')
        carousel1.style.display = 'flex'
        carousel2.style.display = 'none'
        carousel3.style.display = 'none'
    })
    carouselBtn2.addEventListener('click', (e)=> {
        carousel2.classList.add('stores_transition')
        carousel1.style.display = 'none'
        carousel2.style.display = 'flex'
        carousel3.style.display = 'none'
    })
    carouselBtn3.addEventListener('click', (e)=> {
        carousel3.classList.add('stores_transition')
        carousel1.style.display = 'none'
        carousel2.style.display = 'none'
        carousel3.style.display = 'flex'
    })
}

selectCarousel()

