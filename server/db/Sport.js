const conn = require('./conn');
const { UUID, UUIDV4, STRING } = conn.Sequelize;

const Sport = conn.define('sport', {
    id: {
        type: UUID,
        primaryKey: true, 
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
    }
});

module.exports = Sport;