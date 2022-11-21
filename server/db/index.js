const conn = require('./conn');
const User = require('./User');
const Activity = require('./Activity');

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, ethyl, activity1] = await Promise.all([
    User.create({ username: 'moe', password: '123'}),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    Activity.create({title: 'Afternoon Run', description: 'Quick 4 miles after class'})
  ]);

  return {
    users: {
      moe,
      lucy,
      larry
    },
    activities: {
      activity1
    }
  };
};

module.exports = {
  syncAndSeed,
  User,
  Activity
};
