'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new Promise(function (resolve) {
      return (
        // Webpack's code splitting API w/naming
        require.ensure([], function (require) {
          resolve(require('./cloudinary'));
        }, 'cloudinary')
      );
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL29seW1wLW1lZGlhLWxpYnJhcnkvdmlld3MvaW5kZXguZXM2Il0sIm5hbWVzIjpbInJlc29sdmUiLCJQcm9taXNlIiwicmVxdWlyZSIsImVuc3VyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O2tCQUVlLHlDQUFlO0FBQzVCQSxXQUFTO0FBQUEsV0FDUCxJQUFJQyxPQUFKLENBQVk7QUFBQTtBQUNWO0FBQ0FDLGdCQUFRQyxNQUFSLENBQ0UsRUFERixFQUVFLG1CQUFXO0FBQ1RILGtCQUFRRSxRQUFRLGNBQVIsQ0FBUjtBQUNELFNBSkgsRUFLRSxZQUxGO0FBRlU7QUFBQSxLQUFaLENBRE87QUFBQTtBQURtQixDQUFmLEMiLCJmaWxlIjoicGFja2FnZXMvb2x5bXAtbWVkaWEtbGlicmFyeS92aWV3cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtYXN5bmMtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmNDb21wb25lbnQoe1xuICByZXNvbHZlOiAoKSA9PlxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgIC8vIFdlYnBhY2sncyBjb2RlIHNwbGl0dGluZyBBUEkgdy9uYW1pbmdcbiAgICAgIHJlcXVpcmUuZW5zdXJlKFxuICAgICAgICBbXSxcbiAgICAgICAgcmVxdWlyZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2Nsb3VkaW5hcnknKSk7XG4gICAgICAgIH0sXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICksXG4gICAgKSxcbn0pO1xuIl19
