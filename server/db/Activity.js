const conn = require('./conn');
const { UUID, UUIDV4, STRING, DECIMAL, NUMBER, TEXT } = conn.Sequelize;

const Activity = conn.define('activity', {
    id: {
        type: UUID,
        primaryKey: true, 
        defaultValue: UUIDV4
    },
    title: {
        type: STRING
    },
    distance: {
        type: DECIMAL,
    },
    measurement: {
        type: STRING
    },
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