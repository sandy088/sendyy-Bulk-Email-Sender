import React from 'react';
import profile from '../../assets/Profilepics/profile.png';
import { TypeAnimation } from 'react-type-animation';

export const EmailComponent = () => {
  let emailWrite = `Hi there! 👋

    Just wanted to touch base and see how you're doing👨‍💻. Let's catch up soon. 

    Take care!`;
  return (
    <div className="relative file:flex flex-col rounded-3xl bg-slate-200 gap-3 w-[90%] max-w-[400px] mx-auto p-3 z-[10] shadow-custom">

      {/* 1st part */}
      <div className="flex flex-row-reverse gap-3 pt-3">
        <div className="mr-4 flex gap-2">
          <div className="rounded-full bg-orange-600 h-3 w-3"></div>
          <div className="rounded-full bg-green-600 h-3 w-3"></div>
          <div className="rounded-full bg-yellow-600 h-3 w-3"></div>
        </div>
      </div>

      <div className="px-4 py-2 flex gap-4">
        <span className="text-gray-400 font-semibold">From:</span>
        <img src={profile} alt="email pic" width={30} height={20} />
        <p>sandeep@devcom.tech</p>
      </div>
      <div className="h-px bg-slate-300 w-95% mx-auto"></div>
      <div className="px-4 py-2 flex gap-4 justify-between">
        <p className="text-black font-semibold">Bulk E-mail Sender</p>
        <span className="rounded-3xl bg-slate-300 px-2">80</span>
      </div>
      <div className="h-px bg-slate-300 w-95% mx-auto"></div>

      {/* auto write email */}
      <div className="h-40 sm:h-52 p-3 text-gray-500">
        <TypeAnimation
          sequence={[emailWrite, 3000, ""]}
          repeat={Infinity}
          cursor={true}
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};
