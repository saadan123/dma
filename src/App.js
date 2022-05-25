import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Email from "./Email/Email"

export default function App() {
  
    const nav= [ 
     {SEO:[
       {
         title:"Free SEO Analysis",
         Component:<></>
       },
       {
        title:"SEO Services",
        Component:<></>
       },
       {
        title:"Content Marketing Services",
        Component:<></>
       },
       {
        title:"Local SEO",
        Component:<></>
       },
       {
        title:"Ecommerce SEO ",
        Component:<></>
       },
       {
        title:"Link Building Services",
        Component:<></>
       },
       {
        title:"Specialized SEO Services",
        Component:<></>
       }
     ]},


     {PPC:[{
       title:"Free PPC analysis",
       Component:<></>
     },
     {
      title:"PPC Managment services",
      Component:<></>
    },
    {
      title:"Remarketing",
      Component:<></>
    },
    {
      title:"Mobile PPC",
      Component:<></>
    },
    {
      title:"Specialized PPC services",
      Component:<></>
    }]},

    
    
     {REPUTATION:[{
      title:"Free Reputation Managment Analysis",
      Component:<></>
    },
    {
      title:"Reputation Managment Services",
      Component:<></>
    },
    {
      title:"Review Managment",
      Component:<></>
    },
    {
      title:"Free Reputation Managment Services",
      Component:<></>
    }
  ]},
    {SOCIAL:[{
      title:"Free Social Media Analysis",
      Component:<></>
    },
    {
      title:"Social Media Managment Services",
      Component:<></>
    },
    {
      title:"Specialized Social Services",
      Component:<></>
    }
  ]},
    {WEB:[{
      title:"Free website Analysis",
      Component:<></>
    },
    {
      title:"Web Design Services",
      Component:<></>
    },{
      title:"Web Development Services",
      Component:<></>
    },
    {
      title:"Mobile Development",
      Component:<></>
    },
    {
      title:"Website Maintenance",
      Component:<></>
    },
    {
      title:"Specialized Development Services",
      Component:<></>
    }
  ]},
    {MARKETING:[{
      title:"Free Marketing Automation Analysis",
      Component:<></>
    },
    {
      title:"Marketing Automation Services",
      Component:<></>
    },
    {
      title:"Specialized Marketing Automation Services",
      Component:<></>
    }]},
    
    {INDUSTRIES:[{
      title:"Luxury Communities",
      Component:<></>
    },
    {
      title:"Franchise",
      Component:<></>
    },
    {
      title:"E-commerce",
      Component:<></>
    },
    {
      title:"Crypto",
      Component:<></>
    },
    {
      title:"Assisted Living",
      Component:<></>
    },
    {
      title:"Other Industries",
      Component:<></>
    }]},
    {ABOUT:[{
      title:"free PPC analysis",
      Component:<></>
    },]},
   

    ]



  return (

<>
   <Header />
   <Navbar />
   <Email />
 </>
  )
}