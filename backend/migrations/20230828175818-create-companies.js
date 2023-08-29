'use strict';
const createSchemaIfNotExists = async (queryInterface, schemaName) => {
  try {
    await queryInterface.sequelize.query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}"`);
  } catch (error) {
    console.error(`Error creating schema ${schemaName}: ${error.message}`);
    throw error;
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const schemaName = 'brands';
    
    // Create the schema if it doesn't exist
    await createSchemaIfNotExists(queryInterface, schemaName);
    
    await queryInterface.createTable(
      'companies',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID, 
          defaultValue: Sequelize.UUIDV4,
        },
        company_name: {
          type: Sequelize.STRING,
        },
        img_location: {
          type: Sequelize.STRING,
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        schema: schemaName, 
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    const schemaName = 'brands';

    // Drop the table within the schema
    await queryInterface.dropTable(
      'companies',
      {
        schema: schemaName, 
      }
    );

    // Drop the schema
    try {
      await queryInterface.sequelize.query(`DROP SCHEMA IF EXISTS "${schemaName}" CASCADE`);
    } catch (error) {
      console.error(`Error dropping schema ${schemaName}: ${error.message}`);
      throw error;
    }
  },
};
