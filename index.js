function sendEmail(body, To) {
  setTimeout(() => {
    console.log(`
    Para: ${To}
    ----------------------------
    ${body}
    ----------------------------
    `);
  }, 8000);
}

console.log('Enviando e-mail');
sendEmail("Seja bem vindo ao IAmDev", "Macielly")
console.log('Seu email deve chegar em minutos');
