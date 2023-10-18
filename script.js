//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e1, index) =>{
    e1.onclick = () => {
        const pageTurnId = e1.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;

            }, 500);
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;

            }, 500);

        }
    }

})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
contactMeBtn.onclick = function () {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;

            }, 500);
        }, (index + 1) * 200 + 100);
    });
}
//CREATE reverse index function
let totalpages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalpages -1;

    }
}

//back profile button when click

const backProfileBtn = document.querySelector('.back-profile');
 backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
 }
 //opening animation
 const coverRight = document.querySelector('.cover.cover-right');
 const pageLeft = document.querySelector('.book-page.page-left');

 //opening animation (cover right animation)
 setTimeout(() => {
    coverRight.classList.add('turn');
 }, 2100)

 setTimeout(() => {
    coverRight.style.zIndex = -1;
 }, 2100)


//opening animation (pafe left or profile page animation)
setTimeout(() => {
    coverleft.style.zIndex = 20;
 }, 3200)

 //opening animation all page right animATION


    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 2100)
    })
  

    const linked = document.getElementById('linked');
    linked.addEventListener('click',function(){
        window.location.href = 'https://www.linkedin.com/in/narsingh-s-8445b6251';
    });
    const insta = document.getElementById('insta');
    insta.addEventListener('click',function(){
        window.location.href = 'https://instagram.com/_r_e_x_i?utm_source=qr&igshid=OGIxMTE0OTdkZA==';
    });
    const web = document.getElementById('web');
    web.addEventListener('click',function(){
        window.location.href = 'http://127.0.0.1:5500/webdevelopment.html';
    });

