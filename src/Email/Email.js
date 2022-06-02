function Email(props) {

    return (
        <div className="container mx-auto">
       <div className="flex">
           {/* <div className="w-1/5"><div className="flex justify-between pr-[16px] py-[9.5px]"><div className="1"><span className="text-[16px]">Free SEO Analysis</span></div><div className="2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></div></div>
           <div className="flex justify-between pr-[16px] py-[9.5px]"><div className="1"><span className="text-[16px]">Free SEO Analysis</span></div><div className="2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></div></div>
           <div className="flex justify-between pr-[16px] py-[9.5px]"><div className="1"><span className="text-[16px]">Free SEO Analysis</span></div><div className="2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></div></div>
           <div className="flex justify-between pr-[16px] py-[9.5px]"><div className="1"><span className="text-[16px]">Free SEO Analysis</span></div><div className="2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></div></div>
           <div className="flex justify-between  pr-[16px] py-[9.5px]"><div className="1"><span className="text-[16px]">Free SEO Analysis</span></div><div className="2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></div></div> 
           </div> */}
           <div className="w-3/5 flex">
               <div className="w-2/5 flex-col">
                   <div className="flex-col">
                       <div className=""><span className="text-[20px] font-bold ">{props.header}</span></div>
                   <div className="mb-[17px]"><span className="text-[14px]">{props.subheader}</span></div>
                   </div>
                   <div className="mb-[26px]"><span className="font-semibold text-[14px]">{props.paragraph}</span></div>
                <div className="flex justify-between"><div className="w-1/2">
                    <ul>
                        <li className="font-semibold text-[14px]">Ecommerce SEO</li>
                        <li className="font-semibold text-[14px]">Shopify SEO</li>
                        <li className="font-semibold text-[14px]">Woocommerce SEO</li>
                 </ul>
                 </div>
               
                <div className="w-1/2">
                <ul>
                        <li className="font-semibold text-[14px]">Amazon SEO</li>
                        <li className="font-semibold text-[14px]">Magento SEO</li>
                        
                 </ul>
                </div>
                </div>
               </div>

               {/* FORM */}
               <div className="w-4/5 flex-col">
        
               <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
         Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Company Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
</form>
              
<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
         Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Phone Number
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
</form>        


<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Website
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>


    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    {props.buttontext}
</button>
 
               </div>
           </div>
       </div>
        </div>
    )


}
export default Email