describe('HIPAA Training', () => {
    test('is current for all project memebers', () => {
        const members = [
            {name: 'Gabriel Ramirez', training_date: new Date(2019, 5, 31), role: "Developer"},
        ]

        const lastYear = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);

        members.forEach(member => {
            expect(member.training_date > lastYear, `${member.name}'s training is expired`).toBe(true)
        })
    })
});