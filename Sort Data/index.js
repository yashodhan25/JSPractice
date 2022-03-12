const userdata = [
    {'ID': 3, 'name': 'Tanay Kulkarni', 'Mobile Number': 9834672892 },
    {'ID': 2, 'name': 'Abhinav Kulkarni', 'Mobile Number': 8237218202 },
    {'ID': 5, 'name': 'prashant Joshi', 'Mobile Number': 7837456734 },
    {'ID': 4, 'name': 'Nishant Patil', 'Mobile Number': 3456789303 },
    {'ID': 1, 'name': 'Yashodhan Kulkarni', 'Mobile Number': 9011278202 },
    {'ID': 6, 'name': 'Nilesh Singh', 'Mobile Number': 1234567898 }
]


sortbyIDAse();
sortbyIDDse();

function sortbyIDAse(){
    userdata.sort(
        function(a, b){
            if(a['ID'] < b['ID']){
                return -1;
            }
        }
    );
}

function sortbyIDDse(){
    userdata.sort(
        function(a, b){
            if(a['ID'] > b['ID']){
                return -1;
            }
        }
    );
}

function sortbyNameAse(){
    userdata.sort(
        function(a, b){
            return sortedAse(a, b, 'name')
        }
    );
}
function sortedAse(object1, object2, key){
    const obj1 = object1[key].toUpperCase()
    const obj2 = object2[key].toUpperCase()
    if (obj1 < obj2) {
        return -1
    }
}

function sortbyNameDse(){
    userdata.sort(
        function(a, b){
            return sortedDse(a, b, 'name')
        }
    );
}
function sortedDse(object1, object2, key){
    const obj1 = object1[key].toUpperCase()
    const obj2 = object2[key].toUpperCase()
    if (obj1 > obj2) {
        return -1
    }
}