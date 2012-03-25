define([

    'jquery',

    'models/timer',
    'views/timer'

], function ($, Timer, TimerView) {
    'use strict';

    var timer,
        timerView;

    timer = new Timer();
    timer.go();

    timerView = new TimerView({model: timer});
    console.log(timerView);
    $('body').append(timerView.render().el);

    setInterval(function () {
        timerView.render();
    }, 1000);

    return function () {

    };

});