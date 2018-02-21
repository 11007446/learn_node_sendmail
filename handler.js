var app = require("./app");
var mailapp = app.mailapp;
var handle = {
    start: function() {
        mailapp.start();
    },
    check: function() {
        mailapp.check();
    },
    handles: [this.start, this.check]

};
var handles = [];
handles["/"] = handle.start;
handles["/check"] = handle.check;

handle.handles = handles;
exports.handle = handle;