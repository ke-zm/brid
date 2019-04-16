require.ensure([
    'src/modules/common/js/util.js',
    'jquery'
], function () {
    require([
        'src/modules/common/js/util.js'
    ], function (Util) {
        var app = angular.module('app', []);
        app.run(['$rootScope', function ($rootScope) {
            $rootScope.pageName = 'index';
            $rootScope.pageTitle = '用户下载';
        }]);
        app.controller('down', ['$scope', '$sce', '$http', '$timeout', function ($scope, $sce, $http, $timeout) {
            $scope.data = {
            };
            $scope.method = {
                clicks: function () {
                    var u = navigator.userAgent;
                    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g\
                    var iosUrl = "itms-services://?action=download-manifest&url=https://downloadpkg.apicloud.com:443/zip/c1/98/c1986fdecef65958950c9bffca696ddd.plist";
                    var androidUrl = "http://downloadpkg.apicloud.com/app/download?path=http://A6091985490369.qiniucdn.apicloud-system.com/4b0bd671c7021e94d302d9714774aa22_d";
                    if (isIOS) {
                        window.open(iosUrl);
                        return
                    }
                    if (isAndroid) {
                        $scope.method.weixinTip(androidUrl);
                        return
                    }
                },
                weixinTip: function(url) {
                    var btn2 = document.getElementById('android'); //下载二
                    var ua = navigator.userAgent;
                    if (/MicroMessenger/.test(window.navigator.userAgent)) {
                        window.event ? window.event.returnValue = false : e.preventDefault();
                        document.getElementById('JweixinTip').style.display = 'block';
                        document.getElementById('JweixinTip').onclick = function () {
                            this.style.display = 'none';
                        }
                    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
                        window.event ? window.event.returnValue = false : e.preventDefault();
                        document.getElementById('JweixinTip').style.display = 'block';
                        
                        document.getElementById('JweixinTip').onclick = function () {
                            this.style.display = 'none';
                        }
                    } else if (ua.match(/QQ\/[0-9]/i) == "qq") {
                        window.event ? window.event.returnValue = false : e.preventDefault();
                        document.getElementById('JweixinTip').style.display = 'block';
                        document.getElementById('JweixinTip').onclick = function () {
                            this.style.display = 'none';
                        }
                    } else {
                        window.open(url);
                    }
                }
            }
            // $scope.method.init();
        }])
    });
}, 'down');