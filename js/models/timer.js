define([

    'use!backbone'

], function (Backbone) {

    'use strict';

    return Backbone.Model.extend({

        MILLISECONDS_IN_SECOND: 1000,
        MILLISECONDS_IN_MINUTE: 1000 * 60,
        MILLISECONDS_IN_HOUR:   1000 * 60 * 60,


        defaults: {
            // amount of milliseconds, stored in memory
            memory:  0,
            // the last time when timer was started (timestamp)
            started: null
        },



        go: function () {
            // save the current time to "started" field
            this.set('started', +new Date());
        },



        pause: function () {

        },



        getTimeInMilliseconds: function () {
            var currentTime = +new Date();

            return currentTime - (this.get('started') + this.get('memory'));
        },



        getTime: function () {

            var milliseconds = this.getTimeInMilliseconds(),
                modulus = milliseconds % this.MILLISECONDS_IN_HOUR;

            return {
                hours:   Math.floor(milliseconds / (this.MILLISECONDS_IN_HOUR)),
                minutes: Math.floor(modulus / this.MILLISECONDS_IN_MINUTE),
                seconds: Math.floor((modulus % this.MILLISECONDS_IN_MINUTE) / this.MILLISECONDS_IN_SECOND)
            };
        }



    });
});