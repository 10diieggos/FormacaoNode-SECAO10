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


async function exec () {
  let id = await takeUser();
  let to = await checkUser();
  
  try {
    let email = await sendEmail('Parabéns, você conseguiu');
    console.log(`
        Enviado após ${email.time} seg.
        -------
        Para: ${to.to}
        -------
        Mensagem:
        ${email.body}
        -------
        Id do usuário: ${id.id}
        `);
  } catch (error) {
    console.log(error);
  }
  
};

exec();

console.log('Enviando email...');