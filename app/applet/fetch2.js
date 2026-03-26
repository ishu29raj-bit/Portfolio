fetch('https://ibb.co/XrX61fpj').then(r=>r.text()).then(t=>console.log(t.match(/<meta property="og:image" content="([^"]+)"/)[1]))
