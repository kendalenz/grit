const conn = require('./conn');
const User = require('./User');
const Activity = require('./Activity');

User.hasMany(Activity);
Activity.belongsTo(User);

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123'}),
    User.create({ username: 'kendalenz', password: '123', firstName: 'Kendal', lastName: 'Enz', profileImage: 'https://images.squarespace-cdn.com/content/v1/5643b494e4b0cca19eae8be8/1634582282828-N9YAI4EE7AZOZZAVC626/Running+7.jpeg' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);
  const [activity1, activity2, activity3] = await Promise.all([
    Activity.create({ userId: lucy.id, title: 'Afternoon Run', description: 'Quick 4 miles after class', distance: '6.0', measurement: 'miles'}),
    Activity.create({ userId: lucy.id, title: 'Morning Run', description: 'Not even tired', distance: '900.02', measurement: 'miles'}),
    Activity.create({ userId: lucy.id, title: 'Night Run', description: 'Saw a ghost', distance: '10.2', measurement: 'miles'})
  ]);

  return {
    users: {
      moe,
      lucy,
      larry
    },
    activities: {
      activity1,
      activity2,
      activity3
    }
  };
};

module.exports = {
  syncAndSeed,
  User,
  Activity
};
