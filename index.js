'use strict';

const component = (app, options) => {
    app.use(function (req, res, next) {
        console.log("Component 1")
        res.send(options);
    });
}

module.exports = component;