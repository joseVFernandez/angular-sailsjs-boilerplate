/**
 * Chat component to wrap all book specified stuff together. This component is divided to following logical components:
 *
 *  Controllers
 *  Directives
 *  Models
 *
 * All of these are wrapped to 'frontend.examples.chat' angular module.
 */
(function() {
  'use strict';

  // Define frontend.examples.chat angular module
  angular.module('frontend.examples.chat', []);

  // Module configuration
  angular.module('frontend.examples.chat')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // Chat
          .state('examples.chat', {
            url: '/examples/chat',
            views: {
              'content@': {
                templateUrl: '/frontend/examples/chat/chat.html',
                controller: 'ChatController',
                resolve: {
                  _messages: [
                    'moment',
                    'MessageModel',
                    function resolve(
                      moment,
                      MessageModel
                    ) {
                      var parameters = {
                        where: {
                          createdAt: {'>': new moment().format()}
                        }
                      };

                      return MessageModel.load(parameters);
                    }
                  ]
                }
              }
            }
          })
        ;
      }
    ])
  ;
}());
