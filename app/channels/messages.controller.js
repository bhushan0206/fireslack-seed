/**
* angularfireSlackApp Module
*
* Description
*/
angular.module('angularfireSlackApp')
	.controller('MessagesCtrl', function(profile, channelName, messages){

		var messageCtrl = this;
		messageCtrl.channelName = channelName;
		messageCtrl.messages = messages;
		messageCtrl.message = '';

		messageCtrl.sendMessage = function (){
			if(messageCtrl.message.length > 0) {
				messageCtrl.messages.$add({
					uid: profile.$id,
					body: messageCtrl.message,
					timestamp: Firebase.ServerValue.TIMESTAMP
				}).then(function (){
					messageCtrl.message = '';
				});
			}
		};
		
	});