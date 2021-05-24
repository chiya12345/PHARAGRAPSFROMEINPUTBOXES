var input = [];

function jointext() {
    for (var i = 1 ; i <=6;i++)
        {
            input.push(document.getElementById("textinput"+i).value);
            input.join(",");
        }
    document.getElementById("result").innerHTML=input;
}
