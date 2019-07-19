const fs = require('fs')
const path = require("path")
const moment = require('moment')

describe('System logs', () => {
    test('have been reviewed recently', async () => {
        const pathToSystemLoggingDocs = path.resolve('./security-compliance/SYSTEM_LOGGING.md')
        const regex = /Application logs: Last reviewed - (\d{4}-\d{1,2}-\d{1,2})/ig;
        const fileText = getFileText(pathToSystemLoggingDocs)
        const dateMatch = regex.exec(fileText);
        const lastReviewDate = new Date(dateMatch[1])
        const threeMonthsAgo = moment().subtract(3, 'months');

        expect(lastReviewDate > threeMonthsAgo, `System logs have not been reviewed for over 3 months see SYSTEM_LOGGING.md`).toBe(true)

    })
})

function getFileText(pathToSystemLoggingDocs) {
    try {
        return fs.readFileSync(pathToSystemLoggingDocs, 'utf8')
    } catch (err) {
        console.error(err)
    }
}