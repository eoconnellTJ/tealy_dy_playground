(__attentive_domain = "tommyjohn.attn.tv"),
  (function() {
    window.__attentive = {
      invoked: !1,
      show: function() {
        this.invoked = !0;
      }
    };
    var t = !1;
      function e() {
        if (document.readyState && !/loaded|complete/.test(document.readyState))
          return void setTimeout(e, 10);
        if (!t) return (t = !0), void setTimeout(e, 50);
        var n = document.createElement("script");
        n.setAttribute("async", "true"),
          (n.type = "text/javascript"),
          (n.src = "https://cdn.attn.tv/loader.js"),
          (
            (document.getElementsByTagName("head") || [null])[0] ||
            document.getElementsByTagName("script")[0].parentNode
          ).appendChild(n);
      };
    window.addEventListener
      ? window.addEventListener("load", e, !1)
      : window.attachEvent("onload", e);
  })(),
  window.__attentive.show();
