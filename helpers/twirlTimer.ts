export const twirlTimer = (function() {
  var P = ["\\", "|", "/", "-"];
  var x = 0;
  return function(msg: string) {
    process.stdout.write(`\r[${P[x++]}] ${msg}`);
    if(x > P.length - 1) {
      x = 0
    }
  };
})();