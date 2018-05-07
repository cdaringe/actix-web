(function() {var implementors = {};
implementors["actix_web"] = ["impl&lt;A, M, S&gt; ToEnvelope&lt;Syn, A, M&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpContext.html\" title=\"struct actix_web::HttpContext\">HttpContext</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Actor&lt;Context = <a class=\"struct\" href=\"actix_web/struct.HttpContext.html\" title=\"struct actix_web::HttpContext\">HttpContext</a>&lt;A, S&gt;&gt; + Handler&lt;M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Message + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::Result: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","impl&lt;A, M, S&gt; ToEnvelope&lt;Syn, A, M&gt; for <a class=\"struct\" href=\"actix_web/ws/struct.WebsocketContext.html\" title=\"struct actix_web::ws::WebsocketContext\">WebsocketContext</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Actor&lt;Context = <a class=\"struct\" href=\"actix_web/ws/struct.WebsocketContext.html\" title=\"struct actix_web::ws::WebsocketContext\">WebsocketContext</a>&lt;A, S&gt;&gt; + Handler&lt;M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Message + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::Result: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
