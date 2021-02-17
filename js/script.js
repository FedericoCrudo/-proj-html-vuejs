
var app = new Vue({
    el: '#app',
    data: {
        menu:["Home","Pages","Courses","Features","Blog","Shop"],
        count:0,
        stats:[ 
            {number:"1.926",infonumber:"finished"},{number:"100%",infonumber:"satisfaction rate"},
            {number:"3092+",infonumber:"enrolled learners"}, {number:"200",infonumber:"online instructors"},
            ],
        courses:[
            {
                price:"30.00",
                title:"How to be SuccessFul:Create a Growth Mindset For Success",
                students:50,
                lessons:3,
            },
            {
                price:"30.00",
                title:"How to Build Confidence in Your Abilities",
                students:50,
                lessons:1,
            },
            {
                price:"20.00",
                title:"Productivity Machine-Focus in a Distracated World",
                students:50,
                lessons:5,
            },
            {
                price:"20.00",
                title:"Effective Time Management Mastery - Complete Guide",
                students:50,
                lessons:18,
            },
            {
                price:"30.00",
                title:"Body Language Secrets for Enterpreneurs",
                students:50,
                lessons:19,
            },
            {
                price:"19.99",
                title:"Management Skills:The Science of Leadership",
                students:50,
                lessons:17,
            },
        ],
        testimonial:[
            {
                name:"Luca Licci",
                img:"img/testimonial-avata-01.jpg",
                descriptions:"Ciao Sono luca lorem lorem lorem lorem",
                work:"Manager"
            },
            {
                name:"Marco Licci",
                img:"img/testimonial-avata-02.jpg",
                descriptions:"Ciao Sono Marco ",
                work:"Manager"
            },
            {
                name:"Mina Licci",
                img:"img/testimonial-avata-03.jpg",
                descriptions:"Ciao Sono Mina",
                work:"Manager"
            },
            {
                name:"Nicola Licci",
                img:"img/testimonial-avata-04.jpg",
                descriptions:"Ciao Sono Nicola",
                work:"Manager"
            },
        ],
        blog:[
            {
                data:"May 13,2020",
                title:"How to Stay True to Your Personal Brand",
                img:"img/motivation-blog-01-480x325.jpg",
                descriptions:"When it comes to your business or career, you want...",
            },
            {
                data:"May 13,2020",
                title:"How to Stay True to Your Personal Brand",
                img:"img/motivation-blog-02-480x325.jpg",
                descriptions:"When it comes to your business or career, you want...",
            },
            {
                data:"May 13,2020",
                title:"How to Stay True to Your Personal Brand",
                img:"img/motivation-blog-03-480x325.jpg",
                descriptions:"When it comes to your business or career, you want...",
            },
            {
                data:"May 13,2020",
                title:"How to Stay True to Your Personal Brand",
                img:"img/motivation-blog-04-480x325.jpg",
                descriptions:"When it comes to your business or career, you want...",
            },
        ],
        address:["382 NE 19lst St #87394 Miami,FL 33179-3899",
            "+1(305)547-9909(9am-5pm EST,Monday-Friday)",
            "support@maxciach.com"
    ],
    explore:[
        "start here","blog","about us"
    ],
    information:[
        "Membership","Purchase guide","privacy policy","Terms of service"
    ]

    },
    methods:{
       
       next(){
           
        (this.count==this.testimonial.length-1)? this.count=0 : this.count++;
        
       },
       prev(){
        (this.count<=0)? this.count=this.testimonial.length-1 : this.count--;
       }


   
    },
   

  });