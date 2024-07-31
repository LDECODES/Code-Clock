document.addEventListener("DOMContentLoaded", function() {

    let timestamp = document.getElementById('timestamp')
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      

    function getGMTTime(date = new Date()) {
        return [
          padTo2Digits(date.getUTCHours()),
          padTo2Digits(date.getUTCMinutes()),
          padTo2Digits(date.getUTCSeconds()),
        ].join(':');
      }
      
      
    
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
        
        let date =  Date.now();;
        console.log(date)
        let astString = convert(date);
        console.log(astString)
        let last = localStorage.setItem(result, astString);
        console.log(result);
        let life = localStorage.getItem(result); 
        console.log(life)
        var input = document.querySelector("#genI");
        input.value = `${result}`;
        return result
        
        
        
    }


        function convert(timestamp) {
            let utcDate = timestamp ;

           
            const options = {
            timeZone: 'America/St_Lucia', 
            hour12: true,                
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
            };

            
            const formatter = new Intl.DateTimeFormat('en-US', options);

            
            const formattedTime = formatter.format(utcDate);
            console.log(formattedTime);
            return formattedTime
                
    }
    

    function Submit(textareaValue) {
        checkCode = localStorage.getItem(textareaValue);
        if (checkCode == null) {
            timestamp.textContent = "Code not Found"
        }else {
            timestamp.textContent = `${checkCode}`;
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
