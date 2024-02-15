window.addEventListener("load", function() {
    var qrCodeContainer = document.getElementById("qr-code");
    
    // URL de destino al escanear el código QR
    var redirectURL = "https://www.google.com";
    
    // Generar el código QR y redirigir a la URL
    var qrCode = generateQRCode(redirectURL);
    qrCodeContainer.appendChild(qrCode);
  });
  
  function generateQRCode(url) {
    var qrCode = document.createElement("img");
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(url);
    qrCode.alt = "Código QR";
    
    // Redirigir al hacer clic en el código QR
    qrCode.addEventListener("click", function() {
      window.location.href = url;
    });
    
    return qrCode;
  }
  