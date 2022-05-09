const name = 'Greg';
const age = 33;
const job = 'Web Developer';
const passions = ['fishing', 'ukulele', 'coding'];

function displayPassions() {
    console.log('My passions are:');
    for (let i = 0; i < passions.length; i++) {
        console.log(`- ${passions[i]}`);
    }
}

module.exports = { name: name, age: age, job: job, displayPassions: displayPassions };