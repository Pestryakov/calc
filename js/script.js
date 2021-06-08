'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
    request.send();

    request.addEventListener(/*'readystatechange'*/'load', ()=> { //Отслеживает статус готовности запроса 
        if (/*request.readyState === 4 &&*/ request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });



    //status
    //statusText
    //response - Ответ от сервера(то что задал backend)
    //readyState (0-создан,1-open,2-send,3-частичные данные,4-завершено) - Содержит текущее состояние запроса


});