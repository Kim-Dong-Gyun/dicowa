//정규표현식 선언

// id : 영문대소문자와 숫자 6~12자리로 입력
let idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{6,12}$/;

// pw : 영문 대소문자와 숫자 및 특수문자를 포함하여 8~16자리로 입력
let pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/

// 메일주소 : 메일 형식을 지켜서 작성 abc@naver.com
let emailPattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,3}$/i;

// 전화번호 : 01x-xxxx-xxxx의 형식으로 작성
let phonePattern = /^01[016789]{1}-?([0-9]{4})-?([0-9]{4})$/;

// 닉네임 : 숫자, 영어, 한국어, _ 를 허용하며 최소 2글자 이상의 닉네임
let nickPattern =  /^[\wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;

//입력창 가져오기
let userId = document.querySelector("#logo_id");
let userPwd = document.querySelector("#logo_pwd");
let confirmUserPwd = document.querySelector("#logo_confirmPwd");
let userTel = document.querySelector("#logo_tel");
let userMail = document.querySelector("#logo_mail");
let userNick = document.querySelector("#logo_nickName");

//공백확인 함수
function checkValue(value, dataName) {
    if (value == "") {
        alert(dataName + "를 입력해주세요!");
        return false;
    }
    return true;
}

//아이디 확인
function checkId(id) {
    //입력된 값이 공백인 경우 함수를 중지하도록 설정
    //checkValue -> false : 공백 -> !checkValue -> true
    if (!checkValue(id.value, "아이디"))
        return false;
    
    if (!idPattern.test(id.value)){
        alert("아이디는 영문대소문자와 숫자 6~12자리로 입력해주세요.");
        id.value="";
        id.focus();
        return false;
    }
    return true;
}

//비밀번호 확인
function checkPwd(pwd, confirmPwd) {
    //입력된 값이 공백인 경우 함수를 중지하도록 설정
    //checkValue -> false : 공백 -> !checkValue -> true
    if (!checkValue(pwd.value, "비밀번호"))
        return false;
    
    if (!pwPattern.test(pwd.value)){
        alert("비밀번호는 영어대소문자, 숫자, 특수문자 모두를 포함하여 8~16자리로 입력하세요");
        pwd.value="";
        pwd.focus();
        return false;
    }

    if (pwd.value != confirmPwd.value) {
        alert("비밀번호가 일치하지 않습니다. 다시 확인하세요!");
        pwd.value="";
        confirmPwd.value="";
        pwd.focus();
        return false;
    }
    return true;
}

//전화번호 확인
function checkTel(tel) {
    //입력된 값이 공백인 경우 함수를 중지하도록 설정
    //checkValue -> false : 공백 -> !checkValue -> true
    if (!checkValue(tel.value, "전화번호"))
        return false;
    
    if (!phonePattern.test(tel.value)){
        alert("전화번호는 01x-xxxx-xxxx형식으로 입력하세요");
        tel.value="";
        tel.focus();
        return false;
    }
    return true;
}

//이메일 확인
function checkMail(mail) {
    //입력된 값이 공백인 경우 함수를 중지하도록 설정
    //checkValue -> false : 공백 -> !checkValue -> true
    if (!checkValue(mail.value, "이메일 주소"))
        return false;
    
    if (!emailPattern.test(mail.value)){
        alert("이메일 형식을 지켜주세요!");
        mail.value="";
        mail.focus();
        return false;
    }
    return true;
}

//닉네임 확인
function checkNick(nick) {
    //입력된 값이 공백인 경우 함수를 중지하도록 설정
    //checkValue -> false : 공백 -> !checkValue -> true
    if (!checkValue(nick.value, "닉네임"))
        return false;
    
    if (!nickPattern.test(nick.value)){
        alert("숫자,영어,한글, _를 이용하여 2글자 이상 입력해주세요!");
        nick.value="";
        nick.focus();
        return false;
    }
    return true;
}


function checkAll(){
    if (!checkId(userId)) return false;

    if (!checkPwd(userPwd, confirmUserPwd)) return false;

    if (!checkTel(userTel)) return false;

    if (!checkMail(userMail)) return false;

    if (!checkNick(userNick)) return false;

    return true;
}