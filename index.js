function takeUsers() {
  return new Promise((resolve, reject) => {
    resolve([{ name: 'Diego', lang: 'JS' },
      { name: 'Richard', lang: 'Python' },
      { name: 'Lemos', lang: 'PHP' }
    ]);
  });
};

async function principal() {
  let users = await takeUsers()
  console.log(users)
  console.log('Esta foi bloqueada até o fim da principal')
}

principal()

console.log('Esta mensagem não foi bloqueada')