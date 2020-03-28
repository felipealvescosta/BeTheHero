const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', ()=>{
  describe('Generata a unique ID', ()=>{
    it('should genereate a unique id', ()=> {
      const id = generateUniqueId();
      expect(id).toHaveLength(8);
    })
  })
});