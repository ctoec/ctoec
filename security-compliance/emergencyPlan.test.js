const fs = require('fs')
const path = require("path")
const moment = require('moment')

describe('Emergency Operation Plan', () => {
    test('has been reviewed recently', async () => {
        const pathToEmergencyPlan = path.resolve('./security-compliance/EMERGENCY_OPERATION_PLAN.md')
        const regex = /Last Reviewed: (\d{4}-\d{1,2}-\d{1,2})/ig;
        const fileText = getFileText(pathToEmergencyPlan)
        const dateMatch = regex.exec(fileText);
        const emergencyPlanReviewDate = new Date(dateMatch[1])
        const threeMonthsAgo = moment().subtract(3, 'months');

        expect(emergencyPlanReviewDate > threeMonthsAgo, `Plan has not been reviewed for over 3 months`).toBe(true)

    })
})

function getFileText(pathToEmergencyPlan) {
    try {
        return fs.readFileSync(pathToEmergencyPlan, 'utf8')
    } catch (err) {
        console.error(err)
    }
}