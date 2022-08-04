const digimon = [
    {id: 125223, digiman: 'Cyberdramon', digivolved: true},
    {id: 127904, digiman: 'BanchoLeomon', digivolved: false},
    {id: 139608, digiman: 'Beelzemon', digivolved: false},
    {id: 061533, digiman: 'Indramon', digivolved: false},
    {id: 666000, digiman: 'Myotismon', digivolved: true},
    {id: 756394, digiman: 'WereGarurumon', digivolved: false}
  ];
  
  module.exports = {
    getAll,
	getOne,
	create,
    deleteOne
  };

  function deleteOne(id){
    const idx = digimon.findIndex(digiman => digiman.id === parseInt(id));
    digimon.splice(idx, 1);
  };
  
  function getOne(id) {
	return digimon.find(digiman => digiman.id === parseInt(id));
  };
  function getAll() {
	return digimon;
  };

  function create(digiman) {

	digiman.id = Date.now() % 1000000;
	digiman.done = false;
	digimon.push(digiman);
  };