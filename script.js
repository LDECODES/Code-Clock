document.addEventListener("DOMContentLoaded", async function () {
    const initSqlJs = window.initSqlJs;

    const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.11.0/sql-wasm.wasm`
    });
    const generated_codes = new SQL.Database();


    const createCodesQuery = `CREATE TABLE codes (code TEXT, date BIGINT);`;
    generated_codes.run(createCodesQuery);

    console.log(generated_codes);

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

        let date = Date.now();
        console.log(date);
       
        const insertQuery = `INSERT INTO codes (code, date) VALUES (?, ?);`;
        generated_codes.run(insertQuery, [result, date]);
        console.log(generated_codes)
        console.log(result);
        var input = document.querySelector("#genI");
        input.value = `${result}`;

        return result;
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

    function checkDb(textareaValue) {
       let checkCode = `SELECT date FROM codes WHERE code = ?;`
     let  codeValidity = generated_codes.exec(checkCode, [textareaValue])

     if (codeValidity.length > 0) {
        let date = codeValidity[0].values[0][0]; 
        return date;
    } else {
        return null;
    }
    
       
    }

    function Submit(textareaValue) {
        let checkCode = checkDb(textareaValue)
        if (checkCode == null) {
            timestamp.textContent = "Code not Found";
        } else {
            let converted = convert(checkCode);
            timestamp.textContent = `${converted}`;
        }
    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", function (event) {
            const target = event.target;
            switch (target.id) {
                case "generate":
                    generate();
                    break;
                case "submit":
                    let textareaValue = document.getElementById("submit-input").value;
                    Submit(textareaValue);
                    break;
                case "delete":
                    localStorage.clear();
                    break;
            }
        });
    });
});
