let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://thatsthespir.it/api', true)
xhr.onload = function() {
            if (this.status === 200){
                document.getElementById("quote").innerHTML=JSON.parse(this.responseText).quote;
            } else {
                document.getElementById("quote").innerHTML="There is a error but there isn't a error in the spirit"
            }
        }

xhr.send()