Meteor.startup(function() {

    Degree = new Meteor.Collection("degree");
    Course = new Meteor.Collection("course");

	if (Degree.find().count() === 0) {
		var data = [{
			degree_id: 'CS_BS_2013',
			degree_name: 'BS Computer Science 2013',
			year: 	'2013',
			department_id: 'CSCI',
			minor_id: '',
			categories: [ { name: 'Computer Science', id: 'CS' }, { name: 'Mathematics', id: 'Math' },
						{ name: 'Science', id: 'Sci' }, { name: 'English', id: 'Eng' }, { name: 'Other', id: 'Other' }],
			courses: [ 'CS_1093','CS_2114','CS_2124','CS_3113', 'CS_3233',
						'CS_4113','CS_4143','CS_4543','CS_4713', 'ENG_1003',
						'ENG_1013','SCOM_1203','MATH_2204','MATH_2183','MATH_2214',
						'MATH_3243','STAT_3233','CHEM_1013', 'CHEM_1011', 'ECON_2333',
						'EE_3333','ENG_3043','PHIL_3723'],
			electives: [
				{ elective_id: 'CS_ELEC1', name: 'CS Elective (Choose 4)', option: ['CS_4043'] },
				{ elective_id: 'CS_ELEC2', name: 'CS Elective (Choose 4)', option: ['CS_4143'] },
				{ elective_id: 'CS_ELEC3', name: 'CS Elective (Choose 4)', option: ['CS_4243'] },
				{ elective_id: 'CS_ELEC4', name: 'CS Elective (Choose 4)', option: ['CS_4343'] },
				{ elective_id: 'LIF_SCI',  name: 'Life Science (Choose 1)', option: ['BIO_1103'] },
				{ elective_id: 'LIF_SCI_LAB', name: 'Life Science Lab (Choose 1)', option: ['BIO_1101'] },
				{ elective_id: 'PHYS_SCI', name: 'Physical Science I', option: ['CS_4043'] },
				{ elective_id: 'PHYS_SCI2', name: 'Physical Science II', option: ['CS_4043'] },
				{ elective_id: 'FINE_ART', name: 'Fine Arts (Choose 1)', option: ['CS_4043'] },
				{ elective_id: 'GBL_ISS', name: 'Global Issues (Choose 1)', option: ['CS_4043'] },
				{ elective_id: 'HIS_GOV', name: 'History/Government (Choose 1)', option: ['CS_4043'] },
				{ elective_id: 'FOR_LAN1', name: 'Foreign Language (Choose 2)', option: ['CS_4043'] },
				{ elective_id: 'FOR_LAN2', name: 'Foreign Language (Choose 2)', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC1', name: 'Free Elective', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC2', name: 'Free Elective', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC3', name: 'Free Elective', option: ['CS_4043'] },
				{ elective_id: 'FREE_ELEC4', name: 'Free Elective', option: ['CS_4043'] }
			]
		},
		
		{
			degree_id: 'CS_BA_2013',
			degree_name: 'BA Computer Science 2013',
			year: 	'2013',
			department_id: 'CSCI',
			minor_id: '',
			catagories: [ { name: 'Computer Science', id: 'CS' }, { name: 'Mathematics', id: 'Math' }, 
						{ name: 'Science', id: 'Sci' }, { name: 'English', id: 'Eng' }, { name: 'Other', id: 'Other' }],
			courses: ['CS_1093', 'ENG_1003', 'ENG_1013', 'SCOM_1203', 'MATH_1023', 'CS_1114', 'CS_2114', 'CS_2124', 'CS_3113',
					   'CS_3233', 'CS_4113', 'CS_4143', 'CS_4313', 'CS_4543', 'CS_4713', 'MATH_2183', 'MATH_2143', 'MATH_2204', 
					   'MATH_3243', 'STAT_3233' ]
		}
		
		]
		for (var i = 0; i < data.length; i++)
		{
			Degree.insert(data[i]);
		}
	}
		
	if (Course.find().count() === 0) {
			var data = [{"course_id":"CS_1093","name":"Making Connection CS","subject":"CS","credit_hours":3,"category":"FYE","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"UC_1013","name":"Making Connection","subject":"UC","credit_hours":3,"category":"FYE","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_1003","name":"Composition I","subject":"ENG","credit_hours":3,"category":"Communication","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_1013","name":"Composition II","subject":"ENG","credit_hours":3,"category":"Communication","corequisite":null,"prerequisite":"ENG_1003","season":"Spring, Fall, Summer","year":""},
{"course_id":"SCOM_1203","name":"Oral Communication","subject":"ENG","credit_hours":3,"category":"Communication","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"MATH_2204","name":"Calculus I","subject":"MATH","credit_hours":4,"category":"Math","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ART_2503","name":"Fine Arts_Visual","subject":"ART","credit_hours":3,"category":"Fine Arts","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"MUS_2503","name":"Fine Arts_Music","subject":"ART","credit_hours":3,"category":"Fine Arts","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"THEA_2503","name":"Fine Arts_Theater","subject":"ART","credit_hours":3,"category":"Fine Arts","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_2003","name":"Intro Literature I","subject":"ENG","credit_hours":3,"category":"Humanities","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ENG_2013","name":"Intro Literature II","subject":"ENG","credit_hours":3,"category":"Humanities","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PHIL_1103","name":"Intro to Philosophy","subject":"PHIL","credit_hours":3,"category":"Humanities","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ECON_2333","name":"Economic Issues & Concept","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"ANTH_2233","name":"Intro to Antropology","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"GEOG_2613","name":"Intro to Geography","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_1013","name":"World Civilization To 1660","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_1023","name":"World Civilization Since 1660","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"JOUR_1003","name":"Mass Communication","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"POSC_1003","name":"Intro to Politics","subject":"SS","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PSY_2013","name":"Intro to Psychology","subject":"SCI","credit_hours":3,"category":"Global Issues","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_2763","name":"The US To 1876","subject":"SS","credit_hours":3,"category":"U.S","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"HIST_2773","name":"The US Since 1876","subject":"SS","credit_hours":3,"category":"U.S","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"POSC_2103","name":"Intro to US Govt","subject":"SS","credit_hours":3,"category":"U.S","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1003","name":"Biological Sciene","subject":"SCI","credit_hours":3,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1033","name":"Biology of Sex","subject":"SCI","credit_hours":3,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1043","name":"Plants and People","subject":"SCI","credit_hours":3,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"BIOL_1001","name":"Biological Science Lab","subject":"SCI","credit_hours":1,"category":"Life Sciences","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PHYS_2034","name":"University Physics I","subject":"SCI","credit_hours":4,"category":"Physical Sciences","corequisite": 'MATH_2204',"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"PHYS_2073","name":"Fundamental Physics I","subject":"SCI","credit_hours":3,"category":"Physical Sciences","corequisite":'MATH_2204',"prerequisite":"","season":"","year":"Demand"},
{"course_id":"PHYS_2071","name":"Fundamental Physics I Lab","subject":"SCI","credit_hours":1,"category":"Physical Sciences","corequisite":null,"prerequisite":"","season":"","year":"Demand"},
{"course_id":"CS_1114","name":"Concept of Programming","subject":"CS","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"CS_2114","name":"Structured Programming","subject":"CS","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"CS_2124","name":"OOP & Fundamental Data Structures","subject":"CS","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"CS_2114","season":"Spring, Fall","year":""},
{"course_id":"CS_3113","name":"Algorithms & Adv Data Structures","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"MATH_2204, CS_2124","season":"Spring, Fall","year":""},
{"course_id":"CS_3123","name":"Programming Languages","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_2124","season":"Spring","year":""},
{"course_id":"CS_3223","name":"Computer Organization","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"MATH_2204, CS_2124","season":"Fall","year":""},
{"course_id":"CS_3233","name":"Operating System","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113","season":"Spring","year":""},
{"course_id":"CS_4113","name":"Software Engineering","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":""},
{"course_id":"CS_4143","name":"Java and Application Development","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3123, CS_3223, CS_3233","season":"Spring","year":""},
{"course_id":"CS_4543","name":"Database Systems","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":""},
{"course_id":"CS_4713","name":"Analysis of Algorithms","subject":"CS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_3113, MATH_2204","season":"Fall","year":""},
{"course_id":"MATH_2183","name":"Discrete Structures","subject":"MATH","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"MATH_2214","name":"Calculus II","subject":"MATH","credit_hours":4,"category":"Core","corequisite":null,"prerequisite":"MATH_2204","season":"Spring, Fall, Summer","year":""},
{"course_id":"MATH_3243","name":"Linear Algebra","subject":"MATH","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"MATH_2214","season":"Spring, Summer","year":""},
{"course_id":"STAT_3233","name":"Applied Statistics_I","subject":"MATH","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"CHEM_1013","name":"General Chemistry I","subject":"SCI","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"CHEM_1011","name":"General Chemistry I Lab","subject":"SCI","credit_hours":1,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring, Fall, Summer","year":""},
{"course_id":"PHYS_2044","name":"University Physics II","subject":"SCI","credit_hours":4,"category":"Core","corequisite":'MATH_2214',"prerequisite":"","season":"Spring, Fall","year":""},
{"course_id":"PHYS_2083","name":"Fundamental Physics II","subject":"SCI","credit_hours":3,"category":"Core","corequisite":'MATH_2214',"prerequisite":"","season":"","year":"Demand"},
{"course_id":"PHYS_2081","name":"Fundamental Physics II Lab","subject":"SCI","credit_hours":1,"category":"Core","corequisite":'MATH_2214',"prerequisite":"","season":"","year":"Demand"},
{"course_id":"EE_3333","name":"Digital Electronics I","subject":"SCI","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"CS_2114","season":"Fall","year":""},
{"course_id":"ENG_3043","name":"Technical Writing","subject":"ENG","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring","year":"Odd"},
{"course_id":"PHIL_3723","name":"Computers, Ethics & Society","subject":"SS","credit_hours":3,"category":"Core","corequisite":null,"prerequisite":"","season":"Spring","year":"Even"},
{"course_id":"CS_4133","name":"Compilers","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":"Even"},
{"course_id":"CS_4223","name":"UNIX Systems Programming","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":""},
{"course_id":"CS_4213","name":"Distributed Computing","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":"Demand"},
{"course_id":"CS_4313","name":"Computer Networking","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3233","season":"Spring","year":""},
{"course_id":"CS_4433","name":"Artificial Intelligence","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Spring","year":"Odd"},
{"course_id":"CS_4413","name":"Computer Graphics I","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Spring","year":""},
{"course_id":"CS_4423","name":"Computer Graphics II","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_4413","season":"","year":"Demand"},
{"course_id":"CS_4723","name":"Automata Theory","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"Fall","year":"Odd"},
{"course_id":"CS_4823","name":"Scripting Languages","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"CS_4811","name":"Computer Science Seminar","subject":"CS","credit_hours":1,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"CS_482V","name":"Special Problems","subject":"CS","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"CS_483V","name":"Internship","subject":"CS","credit_hours":15,"category":"CS_Elective","corequisite":null,"prerequisite":"CS_3113","season":"","year":"Demand"},
{"course_id":"MATH_4533","name":"Numerical Method","subject":"MATH","credit_hours":3,"category":"CS_Elective","corequisite":null,"prerequisite":"MATH_2214, CS_2114","season":"Fall","year":"Odd"},
{"course_id":"MATH_3254","name":"Calculus III","subject":"MATH","credit_hours":4,"category":"CS_Elective","corequisite":null,"prerequisite":"MATH_2214","season":"Spring, Fall, Summer","year":""}]
		for (var i = 0; i < data.length; i++)
		{
			Course.insert(data[i]);
		}
			
	}
})
