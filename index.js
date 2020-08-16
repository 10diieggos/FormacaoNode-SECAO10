function sendEmail(body, To, callback) {
  setTimeout(() => {
    console.log(`
    Para: ${To}
    ----------------------------
    ${body}
    ----------------------------
    `)
    callback('sucesso', 5, '3 segundos');
  }, 3000);
}

let successMessage = (status, amount, time) => {
  console.log(`
  Enviado com ${status}
  ---
  para ${amount} destinatários
  ---
  após ${time}
  `)
};

console.log('Enviando e-mail...');
sendEmail("Seja bem vindo ao IAmDev", "Macielly", successMessage)

