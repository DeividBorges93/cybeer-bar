'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('products', [{
      name: 'Skol Lata 350ml',
      price: 2.20,
      url_image: 'public/images/public/skol_lata_350ml.jpg',
    },
    {
      name: 'Heineken 600ml',
      price: 7.50,
      url_image: 'public/images/public/heineken_600ml.jpg',
    }
  ], {});

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
