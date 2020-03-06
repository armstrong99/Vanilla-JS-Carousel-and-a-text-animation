const arraysCorasel = [
    {
        'id': 1,
'imgSource': '../Assets/Images/hair.jpg',
'cardTitle': 'Low cut',
'cardText': 'We give you cool low cut and this is to make you look nice and sexy. we also offer this at affordable price for all our genuine customers and visitors'
    },
    {
        'id': 2,
'imgSource': '../Assets/Images/motiv.jpg',
'cardTitle': 'High cut',
'cardText': 'We give you cool low cut and this is to make you look nice and sexy. we also offer this at affordable price for all our genuine customers and visitors'
    },
     
]



const myCarousel = id => {
    let seCol = document.querySelector("section > section");
      arraysCorasel.map((caro, index) => {


if(index === id) {
    seCol.insertAdjacentHTML('afterbegin', `
        <figure id=${caro.cardTitle} >
        <img src=${caro.imgSource} alt=${caro.cardTitle} id=${caro.cardTitle + 'img'} />
        <figcaption>
            <strong>${caro.cardTitle}</strong>
            <p>
                    ${caro.cardText}
            </p>
            
        </figcaption>
        </figure>`
        )
}

    })
}
myCarousel(1)

const callCarousel = () => {

    let domCardTitle =  document.querySelector('strong').textContent;
 
 if(domCardTitle) {

    if(domCardTitle.includes('Low')) {
         myCarousel(1)
        let parent = document.getElementsByClassName('col')
            let child = document.getElementById('Low')
             parent[0].removeChild(child)
     
         
       }

      else if(domCardTitle.includes('High')){ 
         myCarousel(0)

          let parent = document.getElementsByClassName('col')
           let child = document.getElementById('High')

             parent[0].removeChild(child)

    }
}

  
}
window.addEventListener('load', () => {setInterval(() => callCarousel(), 4500)}
)

 let words = 'Our Service(s)';
 let wordsTwo = 'Best in town'
  
 
 function sendUIWord(incr) {
 document.querySelector('h1').textContent  = words.substring(0, incr);
 
}
 function sendUIWordTwo(incr) {
 document.querySelector('h1').textContent  = wordsTwo.substring(0, incr);
 
}
var i = 0;
const callTextAnimation = () => {

    var incrInt =  setInterval(() => {
         i = i + 1

          sendUIWord(i)

         if(i === 15) {
            clearInterval(incrInt)
    
         var decrInt = setInterval(() => {
                i = i - 1
                 sendUIWordTwo(i)

        if(i === 0){ 
           var secondIncr = setInterval(() => {
                i = i + 1
          sendUIWord(i)
         if(i === 15) return clearInterval(secondIncr)

            }, 50)
            return clearInterval(decrInt)
        }
            }, 150)
        }
        }, 400)
}
 
    callTextAnimation()
   
