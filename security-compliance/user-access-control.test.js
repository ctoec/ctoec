const fs = require('fs')
const path = require("path")
const moment = require('moment')

describe('User Access Control', () => {
    test('users have been audited', async () => {
        const pathToDoc = path.resolve('./security-compliance/USER_MANAGEMENT.md')
        const regex = /## User Auditing: Last reviewed - (\d{4}-\d{1,2}-\d{1,2})/ig;
        const fileText = getFileText(pathToDoc)
        const dateMatch = regex.exec(fileText);
        const lastReviewDate = new Date(dateMatch[1])
        const threeMonthsAgo = moment().subtract(3, 'months');

        expect(lastReviewDate > threeMonthsAgo, `Users have not been audited for 3 months see USER_MANAGEMENT.md`).toBe(true)

    })

    test('users have been trained', async () => {
        const pathToDoc = path.resolve('./security-compliance/USER_MANAGEMENT.md')
        const regex = /## Training: Last reviewed - (\d{4}-\d{1,2}-\d{1,2})/ig;
        const fileText = getFileText(pathToDoc)
        const dateMatch = regex.exec(fileText);
        const lastReviewDate = new Date(dateMatch[1])
        const threeMonthsAgo = moment().subtract(3, 'months');

        expect(lastReviewDate > threeMonthsAgo, `Users have not been trained see USER_MANAGEMENT.md`).toBe(true)

    })
})

function getFileText(pathToDoc) {
    try {
        return fs.readFileSync(pathToDoc, 'utf8')
    } catch (err) {
        console.error(err)
    }
}