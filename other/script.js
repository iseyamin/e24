document.getElementById('btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const pin=document.getElementById('pin').value;
        const pinn=parseInt(pin);
        if(pinn===125354){
            window.location.href="./other/main.html"
           
        }
        else alert('invalid pin');
        document.getElementById("pin").value = "";

    }
)

//main section
document.getElementById('btn-yes').addEventListener('click',
    function(event){
         window.location.href="./nov.html"
    }
)
