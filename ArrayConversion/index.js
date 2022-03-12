let givenArray = [
    {'id': 1, 'date': 01/08/2010, 'Message':'Hi !'},
    {'id': 2, 'date': 01/08/2010, 'Message':'Hello !'},
    {'id': 3, 'date': 08/12/2010, 'Message':'Hey ?'},
    {'id': 4, 'date': 18/02/2012, 'Message':'Yeah !'},
    {'id': 5, 'date': 18/02/2012, 'Message':'Hii !'},
    {'id': 6, 'date': 30/09/2018, 'Message':'How r u ?'},
    {'id': 7, 'date': 30/09/2018, 'Message':'fine ?'},
    {'id': 8, 'date': 30/09/2018, 'Message':'About You ?'}
];
let temproryDateArray = [];
for(var i = 0; i<givenArray.length; i++){
    temproryDateArray.push(givenArray[i].date)
}
let uniqueDate = [new Set(temproryDateArray)];
uniqueDate[0].forEach(date => {
    let messagedata = [];
    for(let i =0; i<givenArray.length; i++){
        if(givenArray[i].date == date){
            messagedata.push({'id':givenArray[i].id, 'Message':givenArray[i].Message})
        }
    }
    formatted(date,messagedata);
})
let formattedData = [];
function formatted(date,data){
    formattedData.push({date: date, data: data})
}
console.log(formattedData)
/*
let question = [
    {'id': 1, 'date': 01/08/2010, 'Message':'Hi !'},
    {'id': 2, 'date': 01/08/2010, 'Message':'Hello !'},
    {'id': 3, 'date': 08/12/2010, 'Message':'Hey ?'},
    {'id': 4, 'date': 18/02/2012, 'Message':'Yeah !'},
    {'id': 5, 'date': 18/02/2012, 'Message':'Hii !'},
    {'id': 6, 'date': 30/09/2018, 'Message':'How r u ?'},
    {'id': 7, 'date': 30/09/2018, 'Message':'fine ?'},
    {'id': 8, 'date': 30/09/2018, 'Message':'About You ?'}
];

// Output
let ans = [
    {'date':01/08/2010, 'data':[{'id':1,'message':'Hi !'},{'id': 2,'Message':'Hello !'}]},
    {'date':08/12/2010, 'date':[{'id':3,'message':'Hey ?'}]},
    {'date':18/02/2012, 'date':[{'id':4,'message':'Yeah !'},{'id':5,'message':'Hii !'}]},
    {'date':30/09/2018, 'date':[{'id':6,'message':'How r u ?'},{'id':7,'message':'fine ?'},{'id':8,'message':'About You ?'}]}
]
*/