import React from "react";

function Contact() {
  return (
    <div className=" contact w-full bg-[#F3F8FF]  min-h-full pb-20  flex flex-col justify-start  items-center  lg:px-[10%] px-[5%] ">
      <div className="flex flex-col items-center w-full lg:mt-30 mt-10 ">
        <h1 className="lg:text-[46px] text-[34px]  font-bold tracking-wider">Get in Touch</h1>
        <p className="lg:text-[16px] text-[14px] font-medium mt-1">We'd love to hear from you!</p>
        <div className="mt-5">
          <form className="flex flex-col  font-normal gap-4">
            <label htmlFor="" className="flex flex-col">
              Name
              <input type="text" className="inp outline-blue-400 lg:w-sm w-[280px] py-1.5 px-2" />
            </label>
            <label htmlFor="" className="flex flex-col">
              Email
              <input type="text" className="inp outline-blue-400 lg:w-sm w-[280px] py-1.5 px-2" />
            </label>
            <label htmlFor="" className="flex flex-col">
              Message
              <textarea className="inp outline-blue-400 py-1.5 px-2 " name="" id="" cols="10" rows="5"></textarea>
            </label>
          <div className="w-full mt-0.5 "> 
          <button className="w-full px-3 text-[18px] cursor-pointer tracking-wider py-2 bg-[#2980FF] text-white rounded-lg">Submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
