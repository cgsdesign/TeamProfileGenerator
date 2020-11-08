const render =  employees => {


    for (let i = 0; i < employees.length; i++) {
    console.log("INDI", employees[i].getRole())        
    }
}

module.exports = render;