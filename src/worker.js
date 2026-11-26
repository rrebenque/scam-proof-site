// Sends every visitor to https://scamproofmoney.com, then serves the static site.
const HOST = 'scamproofmoney.com';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Wrong host (www, workers.dev) or plain http: send one permanent redirect to https://scamproofmoney.com.
    if (url.hostname !== 'localhost' && (url.hostname !== HOST || url.protocol === 'http:')) {
      url.hostname = HOST;
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const res = await env.ASSETS.fetch(request);
    // Brand images (logo) may be loaded by other sites' tools, e.g. the AdSense consent-message editor.
    if (url.pathname.startsWith('/brand/')) {
      const out = new Response(res.body, res);
      out.headers.set('Access-Control-Allow-Origin', '*');
      return out;
    }
    return res;
  },
};
