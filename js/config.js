require.config({

    // Initialize the application with the main application file
    deps: ["main"],

    paths: {

        // Libs:
        "jquery":     "libs/jquery/jquery-1.7.1",
        "backbone":   "libs/backbone/backbone",
        "underscore": "libs/underscore/underscore",

        // Require plugins:
        "use":        "libs/require/plugins/use", // shim plugin
        "order":      "libs/require/plugins/order"
    },

    use: {
        backbone: {
            deps:   ["use!underscore", "jquery"],
            attach: "Backbone"
        },

        underscore: {
            attach: "_"
        }
    }

});



