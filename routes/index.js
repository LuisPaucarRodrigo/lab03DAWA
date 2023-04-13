var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/modules', function(req, res, next) {
  lenguajes = req.body.lenguajes;
  res.render('modules',{lenguajes});
});

router.post('/modules-check', function(req, res, next) {
  var valoresSeleccionados = req.body.module;
  modules = Array.isArray(valoresSeleccionados) ? valoresSeleccionados : [valoresSeleccionados]; // Convertir a un array si es necesario
  // Imprimir el array con los valores seleccionados
  console.log(modules[0]);
  if (modules[0] === undefined) {
    console.log(modules.length);
    res.render('modules');
  }else{
    console.log(modules);
    res.render('pago');
  }
});

router.post('/pago', function(req, res, next) {
  pago = req.body.pago;
  java = 1200
  php = 800
  net = 1500
  descuento = 0
  if (pago == "Efectivo") {
    imagen = "https://www.casosexitosos.com/wp-content/uploads/2022/03/logo_pagoefectivo.jpg"
    if (lenguajes == "JAVA"){
      lenguajesimagen = "https://i.blogs.es/8d2420/650_1000_java/1366_2000.png"
      subtotal = java * modules.length
      descuento = subtotal * 0.1
      total = subtotal-descuento
    }else if (lenguajes == "PHP"){
      lenguajesimagen = "https://programacion.net/files/article/20211124101110_php-mysql.png"
      subtotal = php * modules.length
      descuento = subtotal * 0.1
      total = subtotal-descuento
    }else{
      lenguajesimagen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEVRK9T///9EEtLMxfBKHtOai+M/ANFCDdLk4PfSy/LZ0/RPKNRYM9bx7/tHGdLJwvCgkeWyp+mVhOLt6vpMI9Pf2vZ+aN2qnOiOfOCrn+iHc9/n4/jBt+7b1fWKd+B1XdtkRti6r+z5+P1yWNtePdeTguJ6YtxnS9htUtr29P23q+upneeDbt7xWqHzAAADn0lEQVR4nO3a7VraMBiA4bSUFKgUxagoooKfOM//+KaMvgk0NFxOXM2e+yeWJc+sTWlQCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H+SpSJrOMxUB5Xuq2XaaOONQaV/5L8OvOx31vrj3WOYq+qwE+egct5p0n9PNJN+4zGO18Mkpv3EOip2HZYdV8fMcvtqPk0a6ff/hMvmQxy9fNfoX1c40OHCgVvYCxde7F149g2Fyc2uP8VoChfpjvM0msLkesco8RQm9yb2wlP/xebzhe26ln648K5KocLhyKOzWg87W6/a39nW0SffsB6ueBfFUGFf73lPk2cy0HjrPQe6p6kXznznaahwsO8ZVhzJQN2mu8SvUy9MJp6RoyiU2S6y+nkaReFYhvYsilEU3tjztb4oRlHYtWMPaxebKAovtF2cL9Otw6IovCz1UEZ/2LrYRFJobmX0s63zNIrC95um/FqGf9y8w4ilsEgXMv7mohhLocpuZPzRxnkaTaHSA5nAk7soxlNY7FgU4ylUpaQkJ86iGP70VOd9WvDvC5W2z0Dv7MUmVLg4rRle+RJbUGieZQrOoviZpxi+T2FtKFTpq8zBPuaPqlDl9ubNVOdpXIXmSSbRqc7TuAqVts/DztdXi8gKCyOzWK57IitU2aNM4/XPoviZwscWFyo9k3ncrc7TUGFv3N12/Ox78NqWQmcevdXFJnxPk9V4t7HaUuhuqHQ/Xo/ovrTi3LypIspC8yIz6esoC1U+l6mcZ1EWKr2sfvK+KGbdCAuzN5nLPI+yUOmOTOa5HMdYWBQymamexFio7C8u6T5FWaj0mUznJc7C4kGmM4qzUKX174q0vrAwZuOOuLlQ6dMfVljkxfnbg/skM1Bo7n9WoTla9UxvbUyg0N2Oair0fXryfoA6bKGRC8dEakKFRWm3oxoKe5OxR3d7o/XQhc5jQnmcHSpU2dU+hTuc1x57H7Qwm9ihR9WeRLBQ6c3vFLW5sHT+pGRjKVxYqB9TmNrHoMli/0JVdt1Jt7mwPLFDy3c59yhU2g1pc2FxZ4c+rv71fQqN88ZWFzq7SlPZN9unUKXOb3/W5kKl5+tZ2qU4HS2HK8tfDQPq6XBt2XF2htPBcthk8eQpXFQ/HB/iri1/uZ6djd60sxCn1aZ043i57F1vfB8s9WxuBza6C/nhYW68TZnnqf/r+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Ei/AfHYTPUXy/PDAAAAAElFTkSuQmCC"
      subtotal = net * modules.length
      descuento = subtotal * 0.1
      total = subtotal-descuento
    }
  }else{
    imagen = "https://www.bbva.com/wp-content/uploads/2022/05/tarjetas_bbva.jpg";
    if (lenguajes == "JAVA"){
      lenguajesimagen = "https://i.blogs.es/8d2420/650_1000_java/1366_2000.png"
      subtotal = java * modules.length
      total = subtotal-descuento
    }else if (lenguajes == "PHP"){
      lenguajesimagen = "https://programacion.net/files/article/20211124101110_php-mysql.png"
      subtotal = php * modules.length
      total = subtotal-descuento
    }else{
      lenguajesimagen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEVRK9T///9EEtLMxfBKHtOai+M/ANFCDdLk4PfSy/LZ0/RPKNRYM9bx7/tHGdLJwvCgkeWyp+mVhOLt6vpMI9Pf2vZ+aN2qnOiOfOCrn+iHc9/n4/jBt+7b1fWKd+B1XdtkRti6r+z5+P1yWNtePdeTguJ6YtxnS9htUtr29P23q+upneeDbt7xWqHzAAADn0lEQVR4nO3a7VraMBiA4bSUFKgUxagoooKfOM//+KaMvgk0NFxOXM2e+yeWJc+sTWlQCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H+SpSJrOMxUB5Xuq2XaaOONQaV/5L8OvOx31vrj3WOYq+qwE+egct5p0n9PNJN+4zGO18Mkpv3EOip2HZYdV8fMcvtqPk0a6ff/hMvmQxy9fNfoX1c40OHCgVvYCxde7F149g2Fyc2uP8VoChfpjvM0msLkesco8RQm9yb2wlP/xebzhe26ln648K5KocLhyKOzWg87W6/a39nW0SffsB6ueBfFUGFf73lPk2cy0HjrPQe6p6kXznznaahwsO8ZVhzJQN2mu8SvUy9MJp6RoyiU2S6y+nkaReFYhvYsilEU3tjztb4oRlHYtWMPaxebKAovtF2cL9Otw6IovCz1UEZ/2LrYRFJobmX0s63zNIrC95um/FqGf9y8w4ilsEgXMv7mohhLocpuZPzRxnkaTaHSA5nAk7soxlNY7FgU4ylUpaQkJ86iGP70VOd9WvDvC5W2z0Dv7MUmVLg4rRle+RJbUGieZQrOoviZpxi+T2FtKFTpq8zBPuaPqlDl9ubNVOdpXIXmSSbRqc7TuAqVts/DztdXi8gKCyOzWK57IitU2aNM4/XPoviZwscWFyo9k3ncrc7TUGFv3N12/Ox78NqWQmcevdXFJnxPk9V4t7HaUuhuqHQ/Xo/ovrTi3LypIspC8yIz6esoC1U+l6mcZ1EWKr2sfvK+KGbdCAuzN5nLPI+yUOmOTOa5HMdYWBQymamexFio7C8u6T5FWaj0mUznJc7C4kGmM4qzUKX174q0vrAwZuOOuLlQ6dMfVljkxfnbg/skM1Bo7n9WoTla9UxvbUyg0N2Oair0fXryfoA6bKGRC8dEakKFRWm3oxoKe5OxR3d7o/XQhc5jQnmcHSpU2dU+hTuc1x57H7Qwm9ihR9WeRLBQ6c3vFLW5sHT+pGRjKVxYqB9TmNrHoMli/0JVdt1Jt7mwPLFDy3c59yhU2g1pc2FxZ4c+rv71fQqN88ZWFzq7SlPZN9unUKXOb3/W5kKl5+tZ2qU4HS2HK8tfDQPq6XBt2XF2htPBcthk8eQpXFQ/HB/iri1/uZ6djd60sxCn1aZ043i57F1vfB8s9WxuBza6C/nhYW68TZnnqf/r+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Ei/AfHYTPUXy/PDAAAAAElFTkSuQmCC"
      subtotal = net * modules.length
      total = subtotal-descuento
    }
  }
  console.log(pago);
  res.render('config'),{lenguajes,modules,pago,imagen,lenguajesimagen,total,descuento,subtotal};
  
});

module.exports = router;
