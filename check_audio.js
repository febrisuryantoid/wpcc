fetch("https://assets.mixkit.co/active_storage/sfx/1397/1397-preview.mp3")
.then(r => r.arrayBuffer())
.then(ab => { console.log(ab.byteLength); })
