document.addEventListener("DOMContentLoaded", function(event) {
  var sourceList = document.querySelectorAll('script[type="text/babel"]')
  var sources = Array.prototype.slice.call(sourceList)

  sources.forEach(function (source) {
    var sourceCode = source.innerText
    var output
    try {
      output = Babel.transform(sourceCode, {
        presets: ['es2015', 'react', 'stage-0']
      }).code
    } catch(error) {
      console.log(error);
    }
    var script = document.createElement('script')
    script.innerText = output
    script.type = 'text/javascript'
    document.body.appendChild(script)
  })
  
});
