import potato from "../src/media/potato.jpg";
import banana  from "../src/media/banana.jpg";
import drumstick from "../src/media/drumstick.jpg";
import orange from "../src/media/orange.jpg";



const menu=[ 
{ 
id:1, 
name:'Potato',
img: potato,
price:30, 
category:'Vegetables',
vendor:'Himachal Pvt Ltd', 
available:1, 
amount:0,
}, 
{ 
id:2, 
name:'Banana',
img:  banana, 
price:50, 
category:'Fruits',
vendor:'Organic farms', 
available:1, 
amount:0,
}, 
{ 
id:3, 
name:'Drumsticks', 
img:  drumstick,
price:20, 
category:'Vegetables', 
vendor:'Mallikarjuna farms',
available:0,
amount:0,
}, 
{ 
id:4,
name:'Orange', 
img: orange,
price:25,
category:'Fruits',
vendor:'Nagpur farms', 
available:1, 
amount:0,
},
] 
export default menu;
