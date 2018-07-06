// CHALLENGE ONE

let students = [
    {Name: 'Remy', Cohort: 'Jan'},
    {Name: 'Genevieve', Cohort: 'March'},
    {Name: 'Chuck', Cohort: 'Jan'},
    {Name: 'Osmund', Cohort: 'June'},
    {Name: 'Nikki', Cohort: 'June'},
    {Name: 'Boris', Cohort: 'June'}
];
	let x = " ";
	function names(arr){
		for(x = 0; x < arr.length; x++)
			console.log("Name:", arr[x].Name, "," ,"Cohort:", arr[x].Cohort);

	}
	console.log(names(students));


// CHALLENGE TWO

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 	};
	
		function staff(arr){
			let i = "";
			for(x = 0; x < arr.length; x++){
				// console.log(x, " - " + arr[x].first_name + ' ' + arr[x].last_name + " - " , arr[x].first_name.length + arr[x].last_name.length)
				i += x + 1 + " - " + arr[x].first_name + " " + arr[x].last_name + " - " + (arr[x].first_name.length + arr[x].last_name.length) + "\n"
		}
		return i; 
	}
	console.log(staff(users.employees))
	console.log(staff(users.managers));