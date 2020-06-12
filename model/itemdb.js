//db관련
const mongoose = require('mongoose');

//DB 연결
//let url = "mongodb+srv://minkuen:" + encodeURIComponent("qkr5663035") + "@cluster0-qpndb.mongodb.net/clusterproject";
let url = "mongodb://minkuen:" + encodeURIComponent("qkr5663035") + "@cluster0-shard-00-00-qpndb.mongodb.net:27017,cluster0-shard-00-01-qpndb.mongodb.net:27017,cluster0-shard-00-02-qpndb.mongodb.net:27017/clusterproject?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(url, { dbName: 'clusterproject', useNewUrlParser: true }, function(err) {
    console.log('err ::' + err);
});




var ItemSchema = new mongoose.Schema(
    {name : {type :String},
        expression : {type :String},
        quantity : {type :Number},
        price : {type :Number},
        updated_at : {type: Date, default: Date.now},
    });

//나를 호출할때 요렇게 갖다써!
module.exports = mongoose.model('Item', ItemSchema, 'clusterproject');