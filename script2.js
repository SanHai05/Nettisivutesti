const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator button");

buttons.forEach(button => {
   button.addEventListener("click", () => {
      const value = button.textContent;

      if(value === "C"){
         display.value="";
      } else if(value==="="){
           try{
              display.value=eval(display.value);
           } catch {
               display.value="Error";
           }
      } else {
          if (display.value === "Error"){
                 display.value="";
      }
          display.value += value;
      }
  });
});

function ratkaise() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    const tulos = document.getElementById("tulos");

    if (a === 0) {
        tulos.textContent = "Ei ole toisen asteen yhtälö (a = 0)";
        return;
    }

    const diskriminantti = b*b - 4*a*c;

    if (diskriminantti < 0) {
        tulos.textContent = "Ei reaalisia ratkaisuja";
    } 
    else if (diskriminantti === 0) {
        const x = -b / (2*a);
        tulos.textContent = "x = " + x;
    } 
    else {
        const x1 = (-b + Math.sqrt(diskriminantti)) / (2*a);
        const x2 = (-b - Math.sqrt(diskriminantti)) / (2*a);
        tulos.textContent = "x₁ = " + x1 + " ja x₂ = " + x2;
    }
}

function tyhjenna() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("tulos").textContent = "Tulos";
}