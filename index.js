/* Quando usamos callback, as falhas são tratadas com parâmetros */
function sendEmail(body, To, callback) {
  setTimeout(() => {
    //lógica do envio do e-mail...
    let error = true;
    
    if (error) {
      callback(3, 'Falhou');      
    } else {
      callback(3, 'Enviado com sucesso');
    }
  }, 3000);
}
//successMessage é uma função que é passada como parâmetro na chamada da função sendEmail
let successMessage = (time, error) => {
  console.log(`${error} após ${time} seg`)
};

sendEmail("Seja bem vindo ao IAmDev", "Macielly", successMessage)
console.log('Enviando e-mail...');//esta menssagem é assincrona. Ela é executada antes do término da execução de sendEmail

