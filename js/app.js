let sum = 0;

function Sum(x, y) {
    if (isNaN(x)===true || isNaN(y)===true){
        alert('invalid number')
    }
    else{
        while (x<=y){
            sum+=x
            x++;
        }
        console.log(sum);
    }
}

Sum(10,15);



function increasediv(){
    let div = document.querySelector(".box")
    let initialwidth = div.clientWidth;
    div.style.width = initialwidth + 50 + "px";
    let initialheight = div.clientHeight;
    div.style.height = initialheight + 20 + "px"
}
