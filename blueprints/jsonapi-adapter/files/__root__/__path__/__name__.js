<%= importStatement %>
import config from '../config/environment';

export default <%= baseClass %>.extend({
  type: '<%= entity %>',

  url: config.APP.API_PATH + '/<%= resource %>',

  /*fetchUrl: function(url) {
    const proxy = config.APP.API_HOST_PROXY;
    const host = config.APP.API_HOST;
    if (proxy && host) {
      url = url.replace(proxy, host);
    }
    return url;
  }*/
});
