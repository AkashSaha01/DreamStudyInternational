import { Camera } from "lucide-react";
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

import { Phone, Mail, MapPin } from "lucide-react";

function App() {
  return (
    <div className="m-0 p-0">
      <div className="bg-primary px-10 m-0 w-full flex justify-between">
        <h2 className="text-white p-4 font-semibold">
          We're Leading Educational Consultancy in Bangladesh.
        </h2>
        <div className="text-white  flex gap-5">
          <h2 className="text-white p-4">Office Hours: 10:00AM- 07:00PM</h2>
          <div className="text-white p-4 flex gap-2 text-sm">
            <Facebook />
            <Instagram />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>
      <div className="bg-white py-6 px-6 md:px-20 flex justify-between items-center w-full md:w-[85%] mx-auto">
        <div>
          <img src="/dsi-logo.png" alt="logo" className="w-80" />
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex justify-center flex-col text-center align-middle text-lg">
            <Phone className="font-extrabold text-secondary w-10 h-auto" />
          </div>
          <div className="flex flex-col font-bold">
            <h2 className="text-lg">Call Us:</h2>
            <h3>+880 14066 99551-4</h3>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex justify-center flex-col text-center align-middle text-lg">
            <Mail className="font-extrabold text-secondary w-10 h-auto" />
          </div>
          <div className="flex flex-col font-bold">
            <h2 className="text-lg">Email Us:</h2>
            <h3>dreamstudyinternational@gmail.com</h3>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex justify-center flex-col text-center align-middle text-lg">
            <MapPin className="font-extrabold text-secondary w-10 h-auto" />
          </div>
          <div className="flex flex-col font-bold">
            <h2 className="text-lg">Location:</h2>
            <h3>Gulshan 2</h3>
          </div>
        </div>
      </div>
      <div className="bg-primary w-[80%] flex mx-auto rounded-lg  justify-between  px-10">
        <div className="flex items-center gap-6 text-white font-semibold text-lg px-10 py-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Countries</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col justify-center align-middle items-center">
          <button className="bg-secondary text-lg font-bold text-white rounded-lg px-6 py-3">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
