const conn = require('./conn');
const { UUID, UUIDV4, STRING, DECIMAL, NUMBER, TEXT } = conn.Sequelize;

const Activity = conn.define('activity', {
    id: {
        type: UUID,
        primaryKey: true, 
        defaultValue: UUIDV4
    },
    // distance: {
    //     type: DECIMAL,
    // },
    // Duration: {
    //     type: NUMBER
    // },
    // Elevation: {
    //     type: NUMBER
    // },
    // Sport: {
    //     type: STRING
    // },
    // Date: {

    // },
    // Time {
        
    // }
    description: {
        type: TEXT
    }
});

module.exports = Activity;