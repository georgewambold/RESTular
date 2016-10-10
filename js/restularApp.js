var restularIndex = angular.module('restularIndex', ['ngInflection', 'ngSanitize', 'zeroclipboard']).
    config(['uiZeroclipConfigProvider', function(uiZeroclipConfigProvider) {

    // config ZeroClipboard
    uiZeroclipConfigProvider.setZcConf({
      swfPath: 'libraries/ZeroClipboard.swf'
    });

  }])