function sendEmail(body, To, callback) {
  setTimeout(() => {
    console.log(`
    Para: ${To}
    ----------------------------
    ${body}
    ----------------------------
    `)
    callback();
  }, 3000);
}

let successMessage = () => {
  console.log('Email enviado com sucesso!!!')
};

console.log('Enviando e-mail...');
sendEmail("Seja bem vindo ao IAmDev", "Macielly", successMessage)

