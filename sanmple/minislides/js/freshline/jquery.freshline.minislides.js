(function(a, b) {
    function j(b, c) {
        b.find("ul:first").wrap('<div class="slidesholder"></div>');
        b.find(".slidesholder").css({width: 3 + c.width + "px",height: 3 + c.height + "px",overflow: "visible",position: "relative"});
        c.slideWidth = Math.floor((c.width - (c.slides - 1) * c.padding) / c.slides);
        c.maxsize = 0;
        c.maxslides = 0;
        b.find("ul >li").each(function(d) {
            c.maxslides = c.maxslides + 1;
            var e = a(this);
            e.css({"list-type": "none"});
            e.wrapInner('<div class="slide"></div>');
            var f = e.find(".slide");
            f.data("iidd", d);
            if (c.shadow == 1)
                f.addClass("shadow1");
            else if (c.shadow == 2)
                f.addClass("shadow2");
            else if (c.shadow == 3)
                f.addClass("shadow3");
            f.data("actLeft", d * c.slideWidth + d * c.padding);
            c.maxsize = d * c.slideWidth + d * c.padding;
            f.css({width: c.slideWidth + "px",height: c.height + "px",left: d * c.slideWidth + d * c.padding + "px",top: "0px",position: "absolute",overflow: "hidden"});
            f.data("radiustr", f.css("-moz-border-radius-topright"));
            f.data("radiusbr", f.css("-moz-border-radius-bottomright"));
            var g = e.find(".hover_content");
            g.css({opacity: "0.0",position: "absolute",top: "50px",left: "0px"});
            var h = a('<div class="hovercover" style="opacity:0;position:absolute;top:-100px;left:0px;width:' + c.width + "px;height:" + g.height() + 'px"></div>');
            h.hide();
            f.append('<div class="insideshadow" style="width:' + g.width() + "px;height:" + g.height() + 'px;position:absolute;top:0px;left:0px;"></div>');
            f.append('<div class="frame_custom_reflection" style="width:' + g.width() + "px;height:" + g.height() + 'px;position:absolute;top:0px;left:0px;"></div>');
            if (b.hasClass("minislider_portfolio") || b.hasClass("minislider_vintage") || b.hasClass("minislider_fabric")) {
                f.append(h);
                f.append(g);
                f.hover(function() {
                    var b = a(this);
                    var c = b.find(".hovercover");
                    var d = b.find(".hover_content");
                    c.stop();
                    c.animate({opacity: "1.0",top: "0px"}, {duration: 400,queue: false});
                    c.show();
                    d.stop();
                    d.animate({opacity: "1.0",top: "0px"}, {duration: 400,queue: false})
                }, function() {
                    var b = a(this);
                    var c = b.find(".hovercover");
                    var d = b.find(".hover_content");
                    c.stop();
                    c.animate({opacity: "0.0",top: "-100px"}, {duration: 1,queue: false});
                    d.stop();
                    d.delay(200).animate({opacity: "0.0",top: "50px"}, {duration: 1,queue: false})
                })
            }
            f.find(".shorty_more").click(function() {
                var b = a(this);
                var d = a(this).closest(".slidetop");
                var e = d.find(".slide");
                var f = d.closest("ul");
                e.addClass("shorty_is_on_action");
                f.find(".slide").each(function() {
                    var b = a(this);
                    b.css({"z-index": "100"});
                    b.addClass("shorty_is_not_on_action");
                    if (!b.hasClass("shorty_is_on_action"))
                        b.animate({opacity: "0.0"}, {duration: 400,queue: false})
                });
                e.css({"z-index": "101"});
                e.css({"-webkit-border-top-right-radius": "0px","-moz-border-radius-topright": "0px","border-top-right-radius": "0px","-webkit-border-bottom-right-radius": "0px","-moz-border-radius-bottomright": "0px","border-bottom-right-radius": "0px"});
                e.animate({left: "0px",width: c.width + "px"}, {duration: 400,queue: false,complete: function() {
                        var b = a(this);
                        var c = b.data("radiustr");
                        var d = b.data("radiusbr");
                        e.css({"-webkit-border-top-right-radius": c,"-moz-border-radius-topright": c,"border-top-right-radius": c,"-webkit-border-bottom-right-radius": d,"-moz-border-radius-bottomright": d,"border-bottom-right-radius": d})
                    }});
                e.find(".shorty_short_content").css({width: c.slideWidth + "px"});
                var g = parseInt(e.find(".shorty_full_content").css("padding-left"), 0) + parseInt(e.find(".shorty_full_content").css("padding-right"), 0);
                e.find(".shorty_full_content").css({position: "absolute",top: "0px",left: c.slideWidth + "px",height: c.height + "px",width: c.width - c.slideWidth - g + "px"});
                e.find(".shorty_full_content").show();
                b.hide()
            });
            f.find(".shorty_hide").click(function() {
                var b = a(this);
                var d = a(this).closest(".slidetop");
                var e = d.find(".slide");
                var f = d.closest("ul");
                f.find(".slide").each(function() {
                    var b = a(this);
                    b.css({"z-index": "100"});
                    b.removeClass("shorty_is_not_on_action");
                    if (!b.hasClass("shorty_is_on_action"))
                        b.animate({opacity: "1.0"}, {duration: 400,queue: false})
                });
                e.removeClass("shorty_is_on_action");
                e.css({"z-index": "101"});
                e.css({"-webkit-border-top-right-radius": "0px","-moz-border-radius-topright": "0px","border-top-right-radius": "0px","-webkit-border-bottom-right-radius": "0px","-moz-border-radius-bottomright": "0px","border-bottom-right-radius": "0px"});
                e.animate({left: e.data("actLeft") + "px",width: c.slideWidth + "px"}, {duration: 400,queue: false,complete: function() {
                        var b = a(this);
                        var c = b.data("radiustr");
                        var d = b.data("radiusbr");
                        e.css({"-webkit-border-top-right-radius": c,"-moz-border-radius-topright": c,"border-top-right-radius": c,"-webkit-border-bottom-right-radius": d,"-moz-border-radius-bottomright": d,"border-bottom-right-radius": d})
                    }});
                e.find(".shorty_full_content").hide();
                d.find(".shorty_more").show()
            });
            f.find(".liftme").each(function() {
                var b = a(this);
                b.hover(function() {
                    var b = a(this);
                    b.stop();
                    b.animate({top: -13 + "px"}, {duration: 350,queue: false,easing: "easeInOutQuad"});
                    b.canvas.style.marginTop = 10 + "px"
                }, function() {
                    var b = a(this);
                    b.stop();
                    b.animate({top: 0 + "px"}, {duration: 350,queue: false,easing: "easeOutBack"})
                })
            })
        })
    }
    function i(b, c) {
        b.animate({top: b.height() / 3,opacity: "0.0"}, {duration: c.speed,easing: c.ease,complete: function() {
                c.animation = false;
                var b = a(this);
                b.css({left: b.data("actLeft") + c.slideWidth + c.padding + "px"});
                if (b.position().left > c.maxsize)
                    b.css({left: 0 - c.slideWidth + "px"});
                b.css({top: "0px",opacity: "1.0"});
                b.data("actLeft", b.position().left)
            }})
    }
    function h(b, c) {
        b.animate({top: b.height() / 3,opacity: "0.0"}, {duration: c.speed,easing: c.ease,complete: function() {
                c.animation = false;
                var b = a(this);
                b.css({opacity: "1.0",left: c.maxsize + "px",top: "0px"});
                b.data("actLeft", b.position().left)
            }})
    }
    function g(b, c) {
        del = 0;
        b.delay(del).animate({left: b.data("actLeft") + c.slideWidth + c.padding + "px"}, {duration: c.speed,easing: c.ease,complete: function() {
                c.animation = false;
                var b = a(this);
                if (b.position().left > c.maxsize) {
                    b.css({left: 0 - c.slideWidth + "px"})
                }
                b.data("actLeft", b.position().left)
            }})
    }
    function f(b, c) {
        del = 0;
        b.delay(del).animate({left: b.data("actLeft") - c.slideWidth - c.padding + "px"}, {duration: c.speed,easing: c.ease,complete: function() {
                c.animation = false;
                var b = a(this);
                if (b.position().left < 0) {
                    b.css({left: c.maxsize + "px",top: "0px"})
                }
                b.data("actLeft", b.position().left)
            }})
    }
    function e(b, c, d, e, f) {
        if (!f.animation) {
            e.find(".slide").each(function(b) {
                var c = a(this);
                if (Math.floor(c.position().left) >= Math.floor(f.maxsize)) {
                    c.css({left: 0 - f.slideWidth - f.padding + "px"});
                    c.data("actLeft", c.position().left)
                }
                if (c.hasClass("shorty_is_not_on_action")) {
                    c.stop();
                    c.css({opacity: "1.0"});
                    c.removeClass("shorty_is_not_on_action")
                }
                if (c.hasClass("shorty_is_on_action")) {
                    c.find(".shorty_full_content").hide();
                    c.css({width: f.slideWidth + "px"});
                    c.removeClass("shorty_is_on_action");
                    c.find(".shorty_more").show()
                }
            });
            e.find(".slide").each(function(b) {
                var c = a(this);
                c.stop();
                f.animation = true;
                if (f.animtype == 1) {
                    g(c, f)
                } else {
                    if (f.animtype == 2) {
                        if (Math.abs(f.slideWidth * (f.slides - 1) + f.padding * (f.slides - 1) - Math.floor(c.position().left)) < 30) {
                            i(c, f)
                        } else {
                            g(c, f)
                        }
                    }
                }
            })
        }
    }
    function d(b, c, d, e, g) {
        if (!g.animation) {
            e.find(".slide").each(function() {
                var b = a(this);
                if (b.position().left < 0) {
                    b.css({left: g.maxsize + "px"});
                    b.data("actLeft", b.position().left)
                }
                if (b.hasClass("shorty_is_not_on_action")) {
                    b.stop();
                    b.css({opacity: "1.0"});
                    b.removeClass("shorty_is_not_on_action")
                }
                if (b.hasClass("shorty_is_on_action")) {
                    b.find(".shorty_full_content").hide();
                    b.css({width: g.slideWidth + "px"});
                    b.removeClass("shorty_is_on_action");
                    b.find(".shorty_more").show()
                }
            });
            e.find(".slide").each(function() {
                var b = a(this);
                b.stop();
                g.animation = true;
                if (g.animtype == 1) {
                    f(b, g)
                } else {
                    if (g.animtype == 2) {
                        if (Math.floor(b.position().left) == 0) {
                            h(b, g)
                        } else {
                            f(b, g)
                        }
                    }
                }
            })
        }
    }
    function c(b, c) {
        var f = b.find(".controller");
        f.wrap('<div style="position:relative;"></div>');
        var g = a('<div class="background"></div>');
        var h = a('<div class="leftbutton"></div>');
        var i = a('<div class="rightbutton"></div>');
        f.append(g).append(h).append(i);
        if (c.mousewheel == "on") {
            b.bind("mousewheel", function(a, f) {
                if (f < 0)
                    d(g, h, i, b, c);
                if (f > 0)
                    e(g, h, i, b, c);
                return false
            })
        }
        h.click(function() {
            d(g, h, i, b, c)
        });
        i.click(function() {
            e(g, h, i, b, c)
        });
        b.hover(function() {
            var b = a(this);
            b.data("mouseOver", "0");
            b.data("hideT", 0);
            b.find(".controller").stop(true, true);
            if (a.browser.msie && a.browser.version >= 7 && a.browser.version < 9) {
                b.find(".controller").css({display: "block"})
            } else {
                b.find(".controller").animate({opacity: "1.0"}, {duration: 100})
            }
        }, function() {
            var b = a(this);
            b.data("mouseOver", "1");
            b.data("hideT", 0)
        });
        b.data("hideT", 0);
        if (c.hidetoolbar != 0) {
            setInterval(function() {
                if (b.data("mouseOver") != "0")
                    b.data("hideT", b.data("hideT") + 100);
                if (b.data("hideT") >= c.hidetoolbar) {
                    if (a.browser.msie && a.browser.version >= 7 && a.browser.version < 9) {
                        b.find(".controller").css({display: "none"})
                    } else {
                        b.find(".controller").animate({opacity: "0.0"}, {duration: 400})
                    }
                }
            }, 100)
        }
    }
    a.fn.extend({minislides: function(b) {
            var d = {width: 876,height: 178,slides: 4,padding: 20,shadow: 0,ease: "easeOutQuad",speed: 300,hidetoolbar: 0,animtype: 1,mousewheel: "off"};
            b = a.extend({}, a.fn.minislides.defaults, b);
            return this.each(function() {
                var d = a(this);
                var e = b;
                j(d, e);
                if (e.maxslides > e.slides)
                    c(d, e);
                else
                    d.find(".controller").css({display: "none"});
                d.swipe({data: d,swipeLeft: function() {
                        d.find(".leftbutton").click()
                    },swipeRight: function() {
                        d.find(".rightbutton").click()
                    },allowPageScroll: "auto"})
            })
        }})
})(jQuery)
