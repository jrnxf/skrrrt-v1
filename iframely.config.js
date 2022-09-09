;(function () {
  var config = {
    DISABLE_HTTP2: true, // this is necessary to allow for https calls at the minute @ref https://github.com/itteco/iframely/issues/275
    allowedOrigins: ['*'],
    // Customize API calls to oembed endpoints.
    // Must have: please add your `access_token` for Facebook and Instagram API calls
    ADD_OEMBED_PARAMS: [
      {
        re: [
          // Endpoint's URL regexp array.
          /^https:\/\/graph\.facebook\.com\/v\d+\.\d+\/instagram_oembed/i,
          /^https:\/\/graph\.facebook\.com\/v\d+\.\d+\/oembed_/i,
        ],
        params: {
          // Custom query-string params object.
          access_token: `${process.env.FB_APP_ID}|${process.env.FB_APP_SECRET}`,
        },
      },
    ],
  }
  module.exports = config
})()
