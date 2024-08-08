
const SQL = await initSqlJs ({
    locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
})
const code_clock = new SQL.Database()
code_clock.run("CREATE TABLE generated_codes (code varchar(100),time BIGINT UNSIGNED);")
console.log(code_clock)



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
    
        let day = d.getDate();
        let month = d.toLocaleString('en-US', { month: 'long' });
        let year = d.getFullYear();
    
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? '0' + minutes : minutes; 
    
        return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
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
