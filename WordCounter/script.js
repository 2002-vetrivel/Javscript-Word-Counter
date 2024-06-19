const count = () =>
{
    let text = document.getElementById("input").value;
    text = text.split(/\s+/);
    const length = text.length;
    const result = document.getElementById("result");
    
    if(length == 1)
    {
        result.innerHTML = "Input is empty!";
    }
    else 
    {
        result.innerHTML = length + " words"
    }
}