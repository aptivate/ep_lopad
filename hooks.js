var path = require('path');
var eejs = require('ep_etherpad-lite/node/eejs');
var toolbar = require("ep_etherpad-lite/node/utils/toolbar");
var hooks = require('ep_etherpad-lite/static/js/pluginfw/hooks');
var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.expressCreateServer = function (hook_name, args, cb) {
  args.app.get('/tos.html', function(req, res)
  {
    var filePath = path.normalize(__dirname + "/templates/tos.html");
    res.sendfile(filePath);
  });

  args.app.get('/privacy.html', function(req, res)
  {
    var filePath = path.normalize(__dirname + "/templates/privacy.html");
    res.sendfile(filePath);
  });
}

exports.eejsBlock_indexWrapper = function(hook_name, args, cb) {
    var logo = '<div id="title" class="center">&gt;('+settings.title+')-</div>',
        initial = args.content,
        terms = '<div class="center about"><strong>lopad.org</strong> is a freely available <a href="http://etherpad.org/">etherpad</a> instance hosted by <a class="aptivate" href="http://www.aptivate.org">Aptivate</a> as part of our work to support IT in international development and promote greater participation globally.</div><div id="terms" class="center">By using this site, you accept our <a href="/privacy.html">privacy policy</a> and agree to our <a href="/tos.html">terms and conditions.</a></div>';
    args.content = logo + initial + terms;
    return cb();
};
