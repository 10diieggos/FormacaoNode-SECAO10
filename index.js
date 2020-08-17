function sendEmail(body, to) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {
        reject("A fila está cheia, envio falhou");//Aceita um único parêmetro, que pode ser um objeto
      } else {
        resolve({time: 3, to: '10diieggos@gmail.com'});//Aceita um único parêmetro, que pode ser um objeto
      };
    }, 3000);
  });
};

sendEmail("Olá Diego", "Diego").then(({ time, to }) => {//Aqui os parâmetros foram passados utilizando o operador de desestruturação.
  console.log(`
  Enviado após ${time} seg
  ------------------------
  Para ${to}  
  `);
}).catch(() => {
  console.log('Promise rejeitada');  
});

console.log('Enviando email em 3 seg ...');