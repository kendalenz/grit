const conn = require('./conn');
const User = require('./User');
const Activity = require('./Activity');

User.hasMany(Activity);
Activity.belongsTo(User);

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123'}),
    User.create({ username: 'lucy', password: '123', firstName: 'Lucy', lastName: 'Yu', profileImage: 'https://images.squarespace-cdn.com/content/v1/5643b494e4b0cca19eae8be8/1634582360061-ZQZ8LBRNUHC213VMIBRC/Running+6.jpeg?format=1000w' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);
  const [activity1] = await Promise.all([
    Activity.create({ userId: lucy.id, title: 'Afternoon Run', description: 'Quick 4 miles after class', distance: '6.0'})
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
