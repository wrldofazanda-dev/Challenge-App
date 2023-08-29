'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      {
        schema: 'brands', 
        tableName: 'companies', 
      },
      [
        {
          id: '6e15a8c6-02f1-4a3d-8c76-5c64b59e1b1a',
          company_name: 'bbc',
          img_location: 'Assets/Images/Brands/bbc.png',
          created_at: new Date(),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 'ca0c7c38-128e-44f9-91a7-20f48c3c7e02',
          company_name: 'engen',
          img_location: 'Assets/Images/Brands/engen.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '3b901697-e1e6-45c7-8a87-aaae56d794db',
          company_name: 'microsoft',
          img_location: 'Assets/Images/Brands/microsoft.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'd68efcc2-8a82-46fc-aa27-843f6f1303d2',
          company_name: 'nike',
          img_location: 'Assets/Images/Brands/nike.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '0cbbfa62-5d70-415f-b09f-eb04e329c4f0',
          company_name: 'picknpay',
          img_location: 'Assets/Images/Brands/picknpay.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'd7c11964-6c2a-4c3f-aa86-7a3e1bc76310',
          company_name: 'sanlam',
          img_location: 'Assets/Images/Brands/sanlam.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '9793a3de-4fc0-41b0-98b3-8e0e2b2c6dd3',
          company_name: 'spotify',
          img_location: 'Assets/Images/Brands/spotify.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e32b89e6-0f13-41fe-82e9-14ea036d58f2',
          company_name: 'tfg',
          img_location: 'Assets/Images/Brands/tfg.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'd8bde1ac-245f-46af-b4e5-0c3a12c99cf2',
          company_name: 'tymebank',
          img_location: 'Assets/Images/Brands/tymebank.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e8d67301-d02e-475d-bfd7-23f6f843f91d',
          company_name: 'visa',
          img_location: 'Assets/Images/Brands/visa.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      {
        schema: 'brands', 
        tableName: 'companies',
      },
      null,
      {}
    );
  },
};
