const conn = require('./conn');
const User = require('./User');
const Distance = require('./Distance');

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123'}),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);
  // const [miles, kilometers, meters, yards] = await Promise.all([
  //   Distance.create({measurement: 'miles'}),
  //   Distance.create({measurement: 'kilometers'}),
  //   Distance.create({measurement: 'meters'}),
  //   Distance.create({measurement: 'yards'}),
  // ])

  return {
    users: {
      moe,
      lucy,
      larry
    },
    // distances: {
    //   miles,
    //   kilometers,
    //   meters,
    //   yards
    // }
  };
};


module.exports = {
  syncAndSeed,
  User,
};
