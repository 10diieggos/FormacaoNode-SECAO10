function sendEmail(body, to) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (error) {
        reject();
      } else {
        resolve();
      };
    }, 3000);
  });
};

sendEmail("Olá Diego", "Diego").then(() => {
  console.log('Promise resolvida');
}).catch(() => {
  console.log('Promise rejeitada');  
});

console.log('Enviando email em 3 seg ...');