const connection = require('../database/connection');

module.exports = {
  async create(req, res){

    const {email} = req.body;

    const ong = await connection('ongs')
      .where('email', email)
      .select('name', 'id')
      .first();

      if(!ong){
        return res.status(401).json({error:'Nenhuma ONG encontrada para esse ID'});
      }
       return res.json(ong);

  }
};