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