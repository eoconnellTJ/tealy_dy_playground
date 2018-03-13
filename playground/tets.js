if (utag === undefined) {
  utag = {};
}
if (utag.ut === undefined) {
  utag.ut = {};
}
if (utag.ut.loader === undefined) {
  u.loader = function(o) {
    var a, b, c, l;
    a = document;
    if (o.type === "iframe") {
      b = a.createElement("iframe");
      b.setAttribute("height", "1");
      b.setAttribute("width", "1");
      b.setAttribute("style", "display:none");
      b.setAttribute("src", o.src);
    } else if (o.type === "img") {
      utag.DB("Attach img: " + o.src);
      b = new Image();
      b.src = o.src;
      return;
    } else {
      b = a.createElement("script");
      b.language = "javascript";
      b.type = "text/javascript";
      b.async = 1;
      b.charset = "utf-8";
      b.src = o.src;
    }
    if (o.id) {
      b.id = o.id;
    }
    if (typeof o.cb === "function") {
      if (b.addEventListener) {
        b.addEventListener(
          "load",
          function() {
            o.cb();
          },
          false
        );
      } else {
        b.onreadystatechange = function() {
          if (this.readyState === "complete" || this.readyState === "loaded") {
            this.onreadystatechange = null;
            o.cb();
          }
        };
      }
    }
    l = o.loc || "head";
    c = a.getElementsByTagName(l)[0];
    if (c) {
      utag.DB("Attach to " + l + ": " + o.src);
      if (l === "script") {
        c.parentNode.insertBefore(b, c);
      } else {
        c.appendChild(b);
      }
    }
  };
} else {
  u.loader = utag.ut.loader;
}
