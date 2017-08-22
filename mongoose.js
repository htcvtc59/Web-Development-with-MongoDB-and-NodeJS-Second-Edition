var mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect('mongodb://tron:GTj5xX7Z@ds157980.mlab.com:57980/mongo', {
    useMongoClient: true,
});
mongoose.connection.on('open', function () {
    console.log('Mongoose connected.');
});
var Account = new Schema({
    username: { type: String },
    date_created: { type: Date, default: Date.now },
    visits: { type: Number, default: 0 },
    active: { type: Boolean, default: false },
    age: { type: Number, required: true, min: 13, max: 120 }
});

Account.statics.findByAgeRange = function (min, max, callback) {
    this.find({ age: { $gt: min, $lte: max } }, callback);
};
var AccountModel = mongoose.model('Account', Account);
AccountModel.findByAgeRange(18, 30, function (err, accounts) {
    console.log(accounts.length);
});
Account.virtual('fullname').get(function () {
    return this.firstname + ' ' + this.lastname;
}).set(function(fullname){
    var parts=fullname.split(' ');
    this.firtname=pasts[0];
    this.lastname=pasts[1];
});
var newUser = new AccountModel({ username: 'randomUser', age: 15 });
newUser.validate(function (err) {
    console.log(err);
});
newUser.save();
console.log(newUser.username);
console.log(newUser.date_created);
console.log(newUser.visits);
console.log(newUser.active);