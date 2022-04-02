function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}

function removeDuplicate(string1, string2) {
    var l1 = string1.length;
    var i;
    for (i = 0; i < l1; i++){
        var char = string1.charAt(i);
        if (string2.indexOf(char) > -1){
            string1 = string1.replace(char, '2');
            string2 = string2.replace(char, '2');
        }
    }
    return (string1.replaceAll('2','') + string2.replaceAll('2','')).length;
}

function fullform(ch) {
    var ff;
    switch(ch) {
        case "f":
          ff = "Friendship";
          break;
        case "l":
          ff = "Love";
          break;
        case "a":
          ff = "Affection";
          break;
        case "m":
          ff = "Marriage";
          break;
        case "e":
          ff = "Enemy";
          break;
        case "s":
          ff = "Sister";
          break;
        default:
          ff = "same name";
    }
    return ff;
}

async function flames_cal(str, len) {
    var j = 0;
    var str1 = "";
    var len1 = len;
    var fl = str.length;

    for (var k = 0; k < fl-1; k++) {
        fl = str.length;
        len = len1;

        for (i = 0; i < len; i++){
            if (j==fl){
                j = 0;
            }

            if (str1.indexOf(str.charAt(j)) == -1){
                const span = document.getElementById(str.charAt(j));
                span.style.textShadow = "0 0 7px #c608d1, 0 0 10px #c608d1, 0 0 21px #c608d1, 0 0 42px #c608d1, 0 0 82px #FF009E, 0 0 92px #FF009E, 0 0 102px #C597C4, 0 0 151px #C597C4";
                await sleep(250);
                span.style.textShadow = "0 0 0px";
            } else {
                len++;
            }

            j++;
        }

        var ch = str.charAt(j-1);
        str1 = ch + str1;
        document.getElementById(ch).style.color = "red";
    }

    for (i = 0; i < str.length; i++) {
        if (str1.indexOf(str.charAt(i)) == -1){
            var char = str.charAt(i);
            var span1 = document.getElementById(char);
            break;
        }
    }

    span1.style.color = "blue";
    span1.style.textShadow = "0 0 7px #c608d1, 0 0 10px #c608d1, 0 0 21px #c608d1, 0 0 42px #c608d1, 0 0 82px #FF009E, 0 0 92px #FF009E, 0 0 102px #C597C4, 0 0 151px #C597C4";
    
    result(char);
}

function result(char) {
    var element = document.getElementById("rs");
    var text = document.createTextNode(fullform(char));
    element.appendChild(text);
    document.getElementById("start").disabled = false;
}

function display() {
    document.getElementById("start").disabled = true;
    var bn = document.getElementById("boy").value;
    var gn = document.getElementById("girl").value;

    document.getElementById("rs").innerHTML = "";
    var str = "flames";
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        var span = document.getElementById(char);
        span.style.color = "#A7db32";
        span.style.textShadow = "0 0 0px"
    }

    var len = removeDuplicate(bn.toLowerCase().replaceAll(" ", ""), gn.toLowerCase().replaceAll(" ", ""));
    var flames = "flames";

    if (len != 0) {
        flames_cal(flames, len);
    } else {
        result("same name");
        document.getElementById("start").disabled = false;
    }
}