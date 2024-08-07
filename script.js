document.addEventListener("DOMContentLoaded", function() {
      
      
    
    function generate() {
        let length = 6;
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
            
        }
        
        let date =  Date.now();
        console.log(date)
        localStorage.setItem(result, date);
        console.log(result);
        var input = document.querySelector("#genI");
        input.value = `${result}`;
        

        return result
        
        
        
    }
    
    function convert(timestamp) {
        let d = new Date(parseInt(timestamp));
    
    let options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };

    let dateTime = d.toLocaleString('en-US', options);
    let newDateTime = dateTime.replace("at", ",")
    return newDateTime;

    }
    
    

    function Submit(textareaValue) {
        checkCode = localStorage.getItem(textareaValue);
        if (checkCode == null) {
            timestamp.textContent = "Code not Found"
        }else {
         let converted = convert(checkCode)
         timestamp.textContent = `${converted}`
        }
        
       

    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", function(event) {
            const target = event.target;
            switch (target.id) {
                case "generate":
                    generate();
                    break;
                case "submit":
                let textareaValue = document.getElementById("submit-input").value;
                    Submit(textareaValue);
                    break;
                case "delete" :
                    localStorage.clear();
                    break
            }
        });
    });
});
