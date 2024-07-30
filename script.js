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
        
        let date = new Date()
        localStorage.setItem(result, date);
        console.log(result);
        let life = localStorage.getItem(result); 
        console.log(life)
        var input = document.querySelector("#genI");
        input.value = `${result}`;
        return result
        
        
        
    }
    

    function Submit() {
        
    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", function(event) {
            const target = event.target;
            switch (target.id) {
                case "generate":
                    generate();
                    break;
                case "submit":
                    Submit();
                    break;
            }
        });
    });
});
