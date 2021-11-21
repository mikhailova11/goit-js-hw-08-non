import videoplayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKeyCurrentTime = "videoplayer-current-time"; //STORAGE_KEY_CURRENT_TIME
const iframe = document.querySelector('iframe');
const player = new videoplayer(iframe);
    
player.on('timeupdate', throttle(data => localStorage.setItem(storageKeyCurrentTime, data.seconds), 1000));
player.setCurrentTime(localStorage.getItem(storageKeyCurrentTime));




/*События
Вы можете прослушивать события в плеере, прикрепив обратный вызов, используя .on():

player.on('eventName', function(data) { 
    // data - это объект, содержащий свойства, специфичные для этого события 
});

События эквивалентны событиям видео HTML5 (за исключением cuechange, которое немного отличается).

Чтобы удалить слушателя, вызовите .off()функцию обратного вызова:

var callback = function() {};
player.off('eventName', callback);

Если вы передадите только имя события, все слушатели этого события будут удалены*/



/*
Установите текущую позицию воспроизведения в секундах. После начала воспроизведения, 
если проигрыватель был приостановлен, он останется приостановленным. 
Точно так же, если проигрыватель воспроизводил, он возобновит воспроизведение после буферизации видео. 
Установка текущего времени до начала воспроизведения приведет к запуску воспроизведения.

Вы можете указать точное время, и player постарается приблизиться к нему, насколько это возможно. 

player.setCurrentTime(30.456).then(function(seconds) {
    // секунды = фактическое время, которое искал игрок 
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // время было меньше 0 или больше, чем продолжительность 
            break;

        default:
            // произошла другая ошибка
            break;
    }
});*/