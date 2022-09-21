'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      role: 'administrator',
    }], {});

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
