let input = document.getElementById("inp1")
let output = document.getElementById("oup1")

document.getElementById("bt").addEventListener("click", ot)
function ot()
{
    var x = input.value * 83.237915;
    output.value = `Rs. ${x.toFixed(2)}`;
}