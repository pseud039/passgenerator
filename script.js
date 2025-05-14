const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const lowercase = "qwertyuiopasdfghkjlZxcvbnm".split('');
const numbers = "1234567890".split('');
const symbols = "!@#$%^&*&(){}[]:<>?/|".split('');

const body = document.body;
const pass_value = document.querySelector(".pass_value");
const copyBtn = document.querySelector(".copyBtn");
const len_value = document.querySelector(".len_value");
const len_range = document.querySelector("#len_range");
const generateBtn = document.querySelector(".generateBtn");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const theme = document.querySelector(".mode");
const theme_text = document.querySelector(".theme");
// let password = ""

generateBtn.addEventListener("click", generate);
len_range.addEventListener("input",function(e){
    e.preventDefault();
    // console.log("hi");
    len_value.innerHTML = parseInt(e.target.value);
});

function generate(){
    let box = [];
    checkboxes.forEach((checkbox)=>{
        if(checkbox.checked){
            if(checkbox.className ==="uppercase"){
                box= box.concat(uppercase);
            }
            if(checkbox.className ==="lowercase"){
                box= box.concat(lowercase);
            }
            if(checkbox.className ==="numbers"){
                box= box.concat(numbers);
            }
            if(checkbox.className ==="symbols"){
                box= box.concat(symbols);
            }
        }
    });

    let password = "";
    for (let i = 0; i < parseInt(len_range.value); i++) {
        let randomIndex = Math.floor(Math.random() * box.length);
        password += box[randomIndex];
    }
    checkboxes.forEach((checkbox)=>{
       if(box.length=="0"){
        pass_value.innerText="Invalid";
        return;
    }
        pass_value.innerText = password;

}
theme.addEventListener('change', function() {
    if (theme.checked) {
      body.classList.add("light-theme");
      theme_text.innerHTML="Light";
    //   theme_text.id.remove("dark");
      theme_text.id="light";
      console.log("hi");
    } else {
      body.classList.remove("light-theme");
      theme_text.innerHTML="Dark";
      theme_text.id="dark";
      
    }
  });
