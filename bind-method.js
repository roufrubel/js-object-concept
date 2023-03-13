const ayman = {
    id: 101,
    name: 'Ayman Sadiq',
    money: 5000,
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this)
        return this.money;
    }
};
// ayman.treatDey(100);
const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000
};
// bind
const heroTreatDey = ayman.treatDey.bind(heroBalam);
heroTreatDey(500);

