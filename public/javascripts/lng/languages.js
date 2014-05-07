$(document).ready(function () {
	var qsParm = new Array();
    function qs() {
        var query = window.location.search.substring(1);
        var parms = query.split('&');
        for (var i=0; i<parms.length; i++) {
            var pos = parms[i].indexOf('=');
            if (pos > 0) {
                var key = parms[i].substring(0,pos);
                var val = parms[i].substring(pos+1);
                qsParm[key] = val;
            }
        }
    };

    qs();

    var options = {
        ns: { namespaces: ['ns.common', 'ns.special'], defaultNs: 'ns.special'},
        useLocalStorage: false,
        resGetPath: 'locales/resources.json?lng=__lng__&ns=__ns__',
        dynamicLoad: true,
        sendMissing: true,
        sendMissingTo: 'current'
    };

    if (qsParm.setLng) options.lng = qsParm.setLng;

    $.i18n.init(options, function() {
        // $('#appname').text($.t('app.name')); example
        // $('.nav').i18n(); example
        $('.searsh').i18n();
        $('.prev-btn').i18n();
        $('.next-btn').i18n();
        $('.product-box-dotted').i18n();
        $('.product-box-striped').i18n();
        $('.footer').i18n();
    });
        

});