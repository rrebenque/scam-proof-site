// Sends every visitor to https://scamproofmoney.com, then serves the static site.
const HOST = 'scamproofmoney.com';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== HOST && url.hostname !== 'localhost') {
      url.hostname = HOST;
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
