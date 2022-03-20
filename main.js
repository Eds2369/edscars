const hoverBars = document.getElementById('hover-bars')
const sectionImage = document.getElementById('section-image')
const mainBoard = document.getElementById('main')
const mainVideo = document.getElementById('main-video')

const emailInput = document.getElementById('email-input')
const emailText = document.getElementById('enter-email-text')

const timer = document.getElementById('timer')

const sections = [
    {
        chapter: 1,
        backgroundVideo: 'car-videos/video-1.mp4',
    },
    {
        chapter: 2,
        backgroundVideo: 'car-videos/video-2.mp4',
    },
    {
        chapter: 3,
        backgroundVideo: 'car-videos/video-3.mp4',
    },
    {
        chapter: 4,
        backgroundVideo: 'car-videos/video-4.mp4',
    },
    {
        chapter: 5,
        backgroundVideo: 'car-videos/video-5.mp4',
    },
    {
        chapter: 6,
        backgroundVideo: 'car-videos/video-6.mp4',
    },
    {
        chapter: 7,
        backgroundVideo: 'car-videos/video-7.mp4',
    },
    {
        chapter: 8,
        backgroundVideo: 'car-videos/video-8.mp4',
    },
    {
        chapter: 9,
        backgroundVideo: 'car-videos/video-9.mp4',
    },
    {
        chapter: 10,
        backgroundVideo: 'car-videos/video-10.mp4',
    },
    {
        chapter: 11,
        backgroundVideo: 'car-videos/video-11.mp4',
    },
    {
        chapter: 12,
        backgroundVideo: 'car-videos/video-12.mp4',
    },
    {
        chapter: 13,
        backgroundVideo: 'car-videos/video-13.mp4',
    },
    {
        chapter: 14,
        backgroundVideo: 'car-videos/video-14.mp4',
    },
    {
        chapter: 15,
        backgroundVideo: 'car-videos/video-15.mp4',
    },
    {
        chapter: 16,
        backgroundVideo: 'car-videos/video-16.mp4',
    },
    {
        chapter: 17,
        backgroundVideo: 'car-videos/video-17.mp4',
    },
    {
        chapter: 18,
        backgroundVideo: 'car-videos/video-18.mp4',
    },
    {
        chapter: 19,
        backgroundVideo: 'car-videos/video-19.mp4',
    }
]

mainVideo.src = sections[0].backgroundVideo

function hover(element, className, group) {
    element.innerText = ''

    element.addEventListener('mouseenter', e => {
        element.classList.add(className)
        element.innerText = group.chapter
        mainVideo.src = group.backgroundVideo
    
        // if(group.chapter == 14 || group.chapter == 16) {
        //     mainVideo.src = 'videos/video-14-16.mp4'
        //     // mainBoard.style.backgroundColor = 'black'
        // } else {
        //     // mainBoard.style.backgroundColor = ''
        //     mainVideo.src = group.backgroundVideo
        // }
    })
    element.addEventListener('mouseleave', e => {
        element.classList.remove(className)
        element.innerText = ''
    })
}

sections.forEach(section => {
    let page = section
    let barEl = document.createElement('div')
    barEl.classList.add('bar')
    
    barEl.innerText = page.chapter


    hover(barEl, 'bar-show-num', page)
    
    hoverBars.append(barEl)
    // console.log(section)
    // console.log(barEl)
})



emailInput.addEventListener('click', () => {
    emailText.innerText = ''
})

emailText.addEventListener('click', () => {
    emailText.innerText = ''
    emailInput.focus()
})


function addZero(num) {
    return num < 10 ? `0${num}`: num
}

function getTime() {
    let t = new Date()

    let hours = addZero(t.getHours())
    let minutes = addZero(t.getMinutes())
    let seconds = addZero(t.getSeconds())

    let currentTime = `${hours}:${minutes}:${seconds}`
    
    return currentTime
}

setInterval(() => {
    // console.log(getTime());
    timer.innerText = getTime()
}, 1000);
