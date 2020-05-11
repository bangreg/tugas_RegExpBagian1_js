function panggilRegexp(value) {
  let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

  var y = str.split("").sort((a,b) =>{
    return a.toLowerCase().localeCompare(b.toLowerCase())
  }).join()
  //The localeCompare method returns a number indicating
  //whether str1 comes before, after or is the same as str2
  //in sort order.

  var regex = /c|l|k/gi;

  var tempSetA = [];
  var tempSetB = [];
  var tempSetC = [];

  while (match = regex.exec(y)) {
    if(match[0]==='c' || match[0]==='C'){
      tempSetA.push(match[0])
    }
    if(match[0]==='l' || match[0]==='L'){
      tempSetB.push(match[0])
    }
    if(match[0]==='k' || match[0]==='K'){
      tempSetC.push(match[0])
    }
  }
  console.log(tempSetA)
  console.log(tempSetB)
  console.log(tempSetC)
}

panggilRegexp()
