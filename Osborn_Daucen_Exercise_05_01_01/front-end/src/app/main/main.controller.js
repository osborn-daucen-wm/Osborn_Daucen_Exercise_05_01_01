/** Daucen Osborn
    March 2, 2017
    main.js

    Purpose: This file is the source of our controllers for the home page.

    3-2-17 - DMO - Added a class for the MainController to implement logs and injections with a controller for the 'post' button.
    3-3-17 - DMO - Switched the $log directive to the $http directive.
    3-6-17 - DMO - Added 'this.message' to the msg in postMessage to grab data from the post.
    3-9-17 - DMO - Added the getMessage() controller.
**/

export class MainController {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.getMessages();
  }

  getMessages() {
    var vm = this;
    this.$http.get('http://localhost:8080/api/message')
    .then(function(result) {
      vm.messages = result.data;
    })
  }

  postMessage() {
    this.$http.post('http://localhost:8080/api/message', {
      msg : this.message
    });
  }
}
