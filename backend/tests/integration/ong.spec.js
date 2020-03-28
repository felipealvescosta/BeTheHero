const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
  beforeEach( async ()=>{
    await connection.migrate.rollback(); 
    await connection.migrate.latest(); 
  });

  afterEach( async ()=>{
    await connection.destroy(); 
  });

  it('should be able to create a ong', async ()=>{
      const response = await request(app)
      .post('/ongs')
      .send({
        name:"Felipe Alves",
        email:"felipe@alves.com",
        whatsapp:"8899339399",
        city:"Quixeramobim",
        uf:"CE"
      }); 
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
})