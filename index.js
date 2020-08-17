function takeUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: 5});
    }, 2000);
  });
};

function checkUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({to: '10diieggos@gmail.com'})
    }, 2000);
  });
};

function sendEmail(body) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (error) {
        reject("A fila está cheia, envio falhou");
      } else {
        resolve({time: 7, body});
      };
    }, 3000);
  });
};

takeUser().then(({ id }) => {
  checkUser(id).then(({ to }) => {
    sendEmail('Parabéns, você conseguiu', to).then(({ time, body }) => {
      console.log(`
      Enviado após ${time} seg.
      -------
      Para: ${to}
      -------
      Mensagem:
      ${body}
      -------
      Id do usuário: ${id}
      `);
    }).catch((error) => {console.log(error)})
  })
});

console.log('Enviando email...')