const conn = require('./conn');
const User = require('./User');
const Sport = require('./Sport');

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123'}),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);
  const [run, ride, swim, hike, walk] = await Promise.all([
    Sport.create({name: 'Run'}),
    Sport.create({name: 'Ride'}),
    Sport.create({name: 'Swim'}),
    Sport.create({name: 'Hike'}),
    Sport.create({name: 'Walk'}),
  ])

  return {
    users: {
      moe,
      lucy,
      larry
    },
    sports: {
     run,
     ride,
     swim,
     hike,
     walk
    }
  };
};


module.exports = {
  syncAndSeed,
  User,
};
