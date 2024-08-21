const arr = document.querySelectorAll('.arr');
const path = document.querySelectorAll('.arr path')
// arr.forEach(elem => {
//     elem.addEventListener('mouseover', () => {
//         elem.style.backgroundColor = '#e38e6a';
//         path.forEach(event => {
//             event.style.stroke = '#fff';
//         })
//     })

//     elem.addEventListener('mouseleave', () => {
//         elem.style.backgroundColor = '#fff';
//         path.forEach(event => {
//             event.style.stroke = '#e38e6a';
//         })
//     })

// });

function btn(e, e_path) {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = '#e38e6a';
        e_path.style.stroke = '#fff'
    })

    e.addEventListener('mouseleave', () => {
        e.style.backgroundColor = '#fff';
        e_path.style.stroke = '#e38e6a'
    })
}

const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const next_path = document.querySelector('#next path')
const prev_path = document.querySelector('#previous path')

btn(previous, prev_path)
btn(next, next_path)


const arrows = document.querySelector('.arrows')
const container = document.querySelector('.container');
container.addEventListener('mouseenter', () => {
    arrows.style.justifyContent = 'space-between'
    arr.forEach(elem => {
        elem.style.display = 'flex'
    })
})
container.addEventListener('mouseleave', () => {
    arrows.style.justifyContent = 'center'
    arr.forEach(elem => {
        elem.style.display = 'none  '
    })
})

const section_bgImage = document.querySelector('.section1')
const section_heading = document.querySelector('.center_content h1')
const img_arr_src = ['assets/images/asset\ 53.webp', 'assets/images/asset\ 55.webp', 'assets/images/asset\ 54.webp']
const heading_arr = ['Yoga In Daily Routine <br>To Stay Fit','3 Weeks Unlimited<br> Yoga For Only Free' ,'Unlimited Yoga For<br> All Levels']

let slideIndex = 1;

function imgSlider(n) {
    let i;
    if (n > img_arr_src.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = img_arr_src.length;
    }
  
    section_bgImage.style.backgroundImage = `url('${img_arr_src[slideIndex - 1]}')`;
    section_heading.innerHTML = `${heading_arr[slideIndex - 1]}`;
}

function plusSlides(n) {
    imgSlider(slideIndex += n);
}

next.addEventListener('click', () => {
    plusSlides(1);
    console.log("hello")
})

previous.addEventListener('click', () => {
    plusSlides(-1);
    console.log("bye")
})

const left_arr = document.querySelector('#left');
const right_arr = document.querySelector('#right');
const cur_img = document.querySelector('#current_comm img');
const name = document.querySelector('.name');
const comment_title = document.querySelector('.comment h1');
const comment_description = document.querySelector('.comment p');
const first_comm = document.querySelector('#first_img img');
const second_comm = document.querySelector('#second_img img');
const fourth_comm = document.querySelector('#fourth_img img');
const fifth_comm = document.querySelector('#fifth_img img');


const curr_comment_arr  = ['assets/images/asset 32.png', 'assets/images/asset 33.png', 'assets/images/asset 34.png', 'assets/images/asset 30.png', 'assets/images/asset 31.png' ]
const name_arr = ['Kanak Sehrawat', 'Reshma', 'Vidushi Saini', 'Mehak Dhiman', 'Shanvi Jain'];
const comment_arr = ['"Love Your Classes"', '"The Best Part of My Day!"', '"Natural, Healthy and Professional"', '"The Best Part of My Day!"', '"Natural, Healthy and Professional"']

const comment_description_arr = ['"Specially designed for Yoga School, Yoga Studio and Yoga Online Classes.Set up website"', '"Mnsequuntur dicta possimus, accusamus excepturi commodi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus do"', '"Loremipsum dolor sit amet consectetur adipisicing elit. Autem, perferendis?"', '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam eveniet similique nulla veniam eligendi dolore, officia explicabo cum voluptatem!"', '"Mnsequuntur dicta possimus, accusamus excepturi commodi!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus do"']


let currentIndex = 0;

function slider(index) {

    cur_img.src = curr_comment_arr[index];
    name.innerHTML = name_arr[index];
    comment_title.innerHTML = comment_arr[index];
    comment_description.innerHTML = comment_description_arr[index];
    let firstCommIndex = (index - 2 + curr_comment_arr.length) % curr_comment_arr.length;
    first_comm.src = curr_comment_arr[firstCommIndex];
   
    let secondCommIndex = (index - 1 + curr_comment_arr.length) % curr_comment_arr.length;
    second_comm.src = curr_comment_arr[secondCommIndex];
    
   
    let fourthCommIndex = (index + 1 + curr_comment_arr.length) % curr_comment_arr.length;
    fourth_comm.src = curr_comment_arr[fourthCommIndex];

        
    let fifthCommIndex = (index + 2 + curr_comment_arr.length) % curr_comment_arr.length;
    fifth_comm.src = curr_comment_arr[fifthCommIndex];

}

function nextSlide() {
    currentIndex = ( currentIndex === curr_comment_arr.length - 1 ) ? 0 : currentIndex + 1;
    slider(currentIndex);
}

function prevSlide() {
    currentIndex = ( currentIndex === 0 ) ? curr_comment_arr.length - 1: currentIndex - 1;
    slider(currentIndex);
}
left_arr.addEventListener('click', () => {
    prevSlide();
})
right_arr.addEventListener('click', () => {
    nextSlide() ;
})
slider(currentIndex);