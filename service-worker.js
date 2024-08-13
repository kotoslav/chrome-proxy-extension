var config = {
  mode: "fixed_servers",
  rules: {
    singleProxy: {
      scheme: "socks5",
      host: "127.0.0.1",
      port: 1080
    },
    bypassList: ["*.ru", "*vk.com", "*.dev", "*userapi.com"]
  }
};
chrome.proxy.settings.set(
  { value: config, scope: 'regular' },
  function() {}
);
chrome.proxy.onProxyError.addListener(
  (err) => {console.log("err")},
)