'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "example.com",
		api_url : 'http://example.com/api',
		api_refresh_interval: 5000,
		app_update_interval: 30*60000
	};
});