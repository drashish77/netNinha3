// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'http://www.ashishx.com/')
// link.innerText ='The Ashish website';

// const msg = document.querySelector('p');
// // console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success')
// msg.innerText= ' I love you';
// msg.setAttribute('style', 'color:green');

// const title =document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;')
// console.log(title.style);
// title.style.margin ='50px';
// title.style.color ="Red";
// title.style.fontSize = '50px';
// title.style.color ='';
// const para = document.querySelector('p');

// console.log(para.classList);

// para.classList.add('error');
// para.classList.remove('error');
// para.classList.add('')

const para = document.querySelectorAll('p');

para.forEach(p => {
if(p.textContent.includes('error')){
    p.classList.add('error')
    } if (p.textContent.includes('success')) {
        p.classList.add('success')
    }
});