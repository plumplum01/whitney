/*** SECTION - ID ***/
const idInputEl = document.querySelector('#e-mail-input');
const idErrorMsgEl = document.querySelector('.mail-response');
const account = {
    id: null // 이메일 값 저장
};


// 에러 메세지 객체
const errMsg = {
    id: { 
        invalid: "Please enter a valid email address",
        // success: "Thanks for registering",
        fail: "Enter a email address"
    }
};


//이메일 검증
idInputEl.addEventListener('change', () => {
    const idRegExp =  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/; // 6~20자의 영문 소문자와 숫자
    if(idRegExp.test(idInputEl.value)) { // 유효성 검사 성공
        idErrorMsgEl.textContent = errMsg.id.success;
        account.id = idInputEl.value;
    } else { // 유효성 검사 실패
        idErrorMsgEl.textContent = errMsg.id.invalid;
        account.id = null;
    }
    console.log(account);
});

// 이메일 버튼 알럿
const registeringAccount = document.querySelector('#submit-input');

registeringAccount.addEventListener('click', () => {
    alert('Thanks for registering your account.');
});


// 헤더 sticky -> fixed
window.addEventListener('scroll', function() {
    const stickyDiv = document.getElementById('headerMenu');
    const scrollPosition = window.scrollY;
    
    const logoDiv = document.getElementById('logo-set');
    const navDiv = document.getElementById('nav');
    console.log(navDiv);
    
    if (scrollPosition > logoDiv.offsetHeight) { // 여기에 스크롤이 어느 정도 지나면 고정되어야 하는 위치 설정
        stickyDiv.style.position = 'fixed';
        stickyDiv.style.top = '0';
        stickyDiv.style.left = '8rem';
        stickyDiv.style.right = '8rem';
        stickyDiv.style.width = `calc(100% - ${stickyDiv.style.left} - ${stickyDiv.style.right})`;
        stickyDiv.style.zIndex = '111';
        
        navDiv.style.marginTop = `calc(${navDiv.offsetHeight}px * 1.4)`;   
    } else {
        stickyDiv.style.position = 'sticky'; // 또는 원하는 기본 위치로 변경
        stickyDiv.style.width = '100%';
        if (scrollPosition < logoDiv.offsetHeight) {
            navDiv.style.marginTop = '0';
        }   
    }
});


//anouncement
const anouncement = document.querySelector('#an');
const cancel = document.querySelector('#an-cancle');

anouncement.style.left = '8rem';
anouncement.style.right = '8rem';

anouncement.style.width = 
    `calc(100% - ${anouncement.style.left} - ${anouncement.style.right})`;


cancel.addEventListener('click', function(event) {
    event.preventDefault(); // 링크의 기본 동작을 중단합니다.
    anouncement.style.display = 'none'; // 해당 요소를 숨깁니다.
});

// 헤더..

//이미지 투명도 image=휘트니로고 mimiHeader는 워드마크 로고
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var image = document.querySelector('.inner-image');
    var opacity;
    const miniHeader = document.querySelector('#miniHeader');

    if (scrollPosition >= 280) {
        opacity = 0; // Set opacity to 0 if scroll position is greater than or equal to 280
        miniHeader.style.visibility = 'visible'; // Hide miniHeader
    } else if (scrollPosition >= 80) {
        opacity = 1 - ((scrollPosition - 80) / 155); // Adjust fading speed from scroll position 80
        miniHeader.style.visibility = 'visible'; // Show miniHeader
    } else {
        opacity = 1; // Keep opacity 1 if scroll position is less than 80
        miniHeader.style.visibility = 'hidden'; // Hide miniHeader
    }

    if (opacity >= 0) {
        image.style.opacity = opacity;
    }
});


//poly line 점 옮기기

window.addEventListener('scroll', function() {
    // 스크롤 위치에 따라 새로운 polyline의 높이를 계산
    var newHeight = 100 - (window.scrollY * 0.35); // 스크롤 속도에 따라 조절하려면 비율을 조정할 수 있습니다.

    // 특정 point의 y값을 0에 가까워지게 조절
    var newY = 97.71428571428571 - (window.scrollY * 0.4); // 스크롤 속도에 따라 조절하려면 비율을 조정할 수 있습니다.

    // polyline 요소 가져오기
    var polyline = document.querySelector('polyline');

    // polyline의 points 속성을 새로운 값으로 업데이트
    polyline.setAttribute('points', '0,0 0,' + newHeight + ' 59.7548828125,0 59.7548828125,' + newY + ' 100,0');

    // polyline의 위치를 상단에 고정
    polyline.setAttribute('style', 'position: fixed !important; top: 0 !important;');
});




//휘트니 로고 크기 줄어듬

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var image = document.querySelector('.inner-image');
    var initialWidth = 540.691; // 초기 이미지의 너비
    var initialHeight = 90.7581; // 초기 이미지의 높이
    var scaleFactor = 1.5; // 이미지 크기 감소 비율 (0.8은 80%로 축소하는 것을 의미)

    // 스크롤 위치에 따라 이미지 크기를 조절
    var newWidth = initialWidth - (scrollPosition * scaleFactor);
    var newHeight = initialHeight - (scrollPosition * scaleFactor * (initialHeight / initialWidth));

    // 이미지가 너무 작아지지 않도록 최소 크기 설정
    if (newWidth > 0 && newHeight > 0) {
        image.style.width = newWidth + 'px';
        image.style.height = newHeight + 'px';
    }
});


//polyline 여백 맞추기
const svgPolyline = document.querySelector('#w');

svgPolyline.style.left = '8rem';
svgPolyline.style.right = '8rem';

svgPolyline.style.width = 
    `calc(100% - ${svgPolyline.style.left} - ${svgPolyline.style.right})`;

//폴리라인 투명도 주기
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var opacity;

    if (scrollPosition >= 280) {
        svgPolyline.style.opacity - 0;
    } else if (scrollPosition >= 80) {
        opacity = 1 - ((scrollPosition - 80) / 155); // Adjust fading speed from scroll position 80
    } else {
        opacity = 1; // Keep opacity 1 if scroll position is less than 80
    }

    if (opacity >= 0) {
        svgPolyline.style.opacity = opacity;
    }
});