function validateName(user) {
  const min = 12;

  if (!user.name) {
    return ({
      type: 'error', message: 'Erro: necessário preencher o campo "name"!' });
  }
  if (user.name.length < min) {
    return ({
      type: 'error', message: 'Erro: "name" precisa ter no mínimo 12 caracteres' });
  }
}
function validateEmail(user) {
  if (!user.email) {
    return ({
      type: 'error', message: 'Erro: necessário preencher o campo "email"!' });
  }
}
