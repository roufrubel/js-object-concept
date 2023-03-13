const student = {
    id: 101,
    name: 'Ayman Sadiq',
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'anayet',
        major: 'mathematics'
    },
    takeExam: function(){
        console.log(this.name, 'taking exam');
    },
    treatDey: function(expense, tip){
        this.money = this.money - expense - tip;
        return this.money;
    }
};
student.takeExam();
const remaining = student.treatDey(500, 50);
console.log(remaining)