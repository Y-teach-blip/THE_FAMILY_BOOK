var members = 
[
    "7.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "gif.gif"
];

var names = 
[
    "Rajendra Kumar Sharma (NANU)",
    "Kailash Devi (NANI)",
    "Tarun Chaturvedi (MAMA)",
    "Vishal Chaturvedi (MAMA)",
    "Priyanka Chaturvedi (MAMI)",
    "Gudiya Chaturvedi (MAMI)",
    "Vamika Chaturvedi (CUTE LIL SIS)",
    "THANK YOU"
];

var i = 0;

function nextslide() 
{

document.getElementById("members").src = members[i];

document.getElementById("names").innerHTML = names[i];

i++;

if (i == 8) 
{

i = 0;

}

}