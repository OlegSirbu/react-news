

export default function (){
    return new Promise((resolve, reject) =>{
        var data = require('./data.json');
        if(!!data){
            return resolve(data.news);
        }
        return reject('not load data.json');
    });
}