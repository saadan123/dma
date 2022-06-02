import Insider from "../Email/Insider";
import React, { useState } from "react";
import Email from "../Email/Email";
function Navbar() {
  const [box, setbox] = useState(false);
  const [box1, setbox1] = useState(false);
  const [box2, setbox2] = useState(false);

  const nav = [
    {
      title: "SEO",
      dataList: [
        {
          title: "Free SEO Analysis",
          Component: <Email/>,

        },
        {
          title: "SEO Services",
          Component: <Insider />,
        },
        {
          title: "Content Marketing Services",
          Component: <Insider />,
        },
        {
          title: "Local SEO",
          Component: <></>,
        },
        {
          title: "Ecommerce SEO ",
          Component: <></>,
        },
        {
          title: "Link Building Services",
          Component: <></>,
        },
        {
          title: "Specialized SEO Services",
          Component: <></>,
        },
      ],
    },

    {
      title: "PPC",
      dataList:[
        {
          title: "Free PPC analysis",
          Component: <></>,
        },
        {
          title: "PPC Managment services",
          Component: <></>,
        },
        {
          title: "Remarketing",
          Component: <></>,
        },
        {
          title: "Mobile PPC",
          Component: <></>,
        },
        {
          title: "Specialized PPC services",
          Component: <></>,
        },
      ],
    },

    {
      title: "REPUTATIONS",
      dataList: [
        {
          title: "Free Reputation Managment Analysis",
          Component: <></>,
        },
        {
          title: "Reputation Managment Services",
          Component: <></>,
        },
        {
          title: "Review Managment",
          Component: <></>,
        },
        {
          title: "Free Reputation Managment Services",
          Component: <></>,
        },
      ],
    },
    {
      title: "SCOIAL MEDIA",
      dataList: [
        {
          title: "Free Social Media Analysis",
          Component: <></>,
        },
        {
          title: "Social Media Managment Services",
          Component: <></>,
        },
        {
          title: "Specialized Social Services",
          Component: <></>,
        },
      ],
    },
    {
      title: "WEB",
      dataList: [
        {
          title: "Free website Analysis",
          Component: <></>,
        },
        {
          title: "Web Design Services",
          Component: <></>,
        },
        {
          title: "Web Development Services",
          Component: <></>,
        },
        {
          title: "Mobile Development",
          Component: <></>,
        },
        {
          title: "Website Maintenance",
          Component: <></>,
        },
        {
          title: "Specialized Development Services",
          Component: <></>,
        },
      ],
    },
    {
      title: "MARKETING",
      dataList: [
        {
          title: "Free Marketing Automation Analysis",
          Component: <></>,
        },
        {
          title: "Marketing Automation Services",
          Component: <></>,
        },
        {
          title: "Specialized Marketing Automation Services",
          Component: <></>,
        },
      ],
    },

    {
      title: "INDUSTRIES",
      dataList: [
        {
          title: "Luxury Communities",
          Component: <></>,
        },
        {
          title: "Franchise",
          Component: <></>,
        },
        {
          title: "E-commerce",
          Component: <></>,
        },
        {
          title: "Crypto",
          Component: <></>,
        },
        {
          title: "Assisted Living",
          Component: <></>,
        },
        {
          title: "Other Industries",
          Component: <></>,
        },
      ],
    },
    {
      title: "ABOUT",
      dataList: [
        {
          title: "free PPC analysis",
          Component: <></>,
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 container max-w-screen-2xl flex-col flex items-center justify-around">
      <div className="flex px-[10px] space-x-11 py-[18px] cursor:pointer">
        {nav.map((item, index) => {
          return (
            <div key={index}>
              <span
                className="text-[14px] font-semibold"
                onClick={() => setbox(!box)}
              >
                {item.title}
              </span>
              
              {/* this is box conditioning + datalist acess */}
              {box &&
                item.dataList.map((list, index) => {
                  return (
                    <div key={index}>
                      
                      {/* {list.Component} */}
                      <div  className="">
                        {/* {list.title} */}
                        <h1 className="font-bold hover:border"  onClick={() => setbox1(!box1)}>{list.title}
                        </h1>
                        
                      </div>
                      
                    </div>
                  );
                })}
            </div>
            
          );
        })}
      </div>
      {box1? <Email/> :null}
      {box2? <Insider/> :null}
    </div>
  );
  
}

export default Navbar;

// item.datalist.map()
