define([

    'use!backbone'

], function (Backbone) {
    'use strict';

    return Backbone.View.extend({

        render: function () {

            var time = this.model.getTime();
            this.$el.html(time.hours + ':' + time.minutes + ':' + time.seconds);

            return this;
        }

    });

});