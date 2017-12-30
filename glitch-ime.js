
var GlitchIME = function(text) {
	this.text = text
}
GlitchIME.prototype.generate = function(callback) {
	var script = document.createElement("script")
	var head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement
	var jsonpCallback = "GlitchIME_" + (""+Math.random()).replace(/\D/g, "")
	window[jsonpCallback] = function(data) {
		var text = ""
		for(var i = 0; i < data.length; i++) {
			var l = data[i][1].length
			var r = Math.floor(Math.random()*l)
			text += data[i][1][r]
		}
		callback(text)
	}
	script.src = [
		"http://www.google.com/transliterate?langpair=ja-Hira|ja",
		"&text=", encodeURI(this.text),
		"&jsonp=", jsonpCallback
	].join("")
	head.insertBefore(script, head.firstChild)
}
