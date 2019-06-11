const moment = require('moment')

describe('HIPAA Training', () => {
    test('is current for all project memebers', () => {
        const members = [
            {name: 'Gabriel Ramirez', training_date: new Date(2019, 5, 31), role: "Developer"},
        ]

        const lastYearToday = moment().subtract(1, 'years');

        members.forEach(member => {
            expect(member.training_date > lastYearToday, `${member.name}'s training is expired`).toBe(true)
        })
    })
})

