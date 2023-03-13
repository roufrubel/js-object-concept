const ayman = {
    id: 101,
    name: 'Ayman Sadiq',
    money: 5000,
    treatDey: function(expense, tip, tax){
        this.money = this.money - expense - tip - tax;
        console.log(this)
        return this.money;
    }
};
const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000
};
// call
ayman.treatDey.call(heroBalam, 2000, 200, 20);
// apply
ayman.treatDey.apply(heroBalam, [2000, 200, 20])
