function validateName(user) {
  const min = 12;

  if (!user?.name) {
    return ({
      type: 'error', message: 'Erro: necessário preencher o campo "name"!' });
  }
  if (user?.name.length < min) {
    return ({
      type: 'error', message: 'Erro: "name" precisa ter no mínimo 12 caracteres' });
  }
}

function validateEmail(user) {
  if (!user?.email) {
    return ({
      type: 'error', message: 'Erro: necessário preencher o campo "email"!' });
  }

  if (!user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return ({
      type: 'error', message: 'Erro: "email" inválido!' });
  }
}

function validatePassword(user) {
  const min = 6;

  if (!user?.password) {
    return ({
      type: 'error', message: 'Erro: necessário preencher o campo "password"!' });
  }
  if (user?.password.length < min) {
    return ({
      type: 'error', message: 'Erro: "password" precisa ter no mínimo 6 caracteres' });
  }
}

function validateRole(user) {
  if (user?.role === 'none') {
    return ({
      type: 'error', message: 'Erro: necessário selecionar o tipo de usuário' });
  }
}

export default function validate(user, op) {
  const lastElement = 3;
  const errorArray = [
    validateRole(user),
    validateName(user),
    validateEmail(user),
    validatePassword(user),
  ];

  if (op === 'admin-manage') {
    return errorArray;
  }
  if (op === 'login') return errorArray.splice(2, lastElement);
  if (op === 'register') return errorArray.splice(1, lastElement);
}
