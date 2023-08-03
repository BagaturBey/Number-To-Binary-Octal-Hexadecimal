document.getElementById("convertBtn").addEventListener("click", function () {
    const inputNumber = parseInt(document.getElementById("number").value);
    
    if (!isNaN(inputNumber)) {
      const binary = inputNumber.toString(2);
      const octal = inputNumber.toString(8);
      const hexadecimal = inputNumber.toString(16).toUpperCase();
      
      const resultText = `
        Binary: ${binary}<br>
        Octal: ${octal}<br>
        Hexadecimal: ${hexadecimal}
      `;
      
      document.getElementById("result").innerHTML = resultText;
    } else {
      document.getElementById("result").innerHTML = "Lütfen geçerli bir sayı girin.";
    }
  });
  