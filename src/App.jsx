import {
  Banknote,
  Camera,
  FileUser,
  Landmark,
  Plane,
  Receipt,
  ScrollText,
  SquarePen,
  Building2,
} from "lucide-react";
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  NotebookPen,
  MessageCircleHeart,
} from "lucide-react";

import { Phone, Mail, MapPin } from "lucide-react";

function App() {
  return (
    <div className="m-0 p-0 max-w-100">
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
      <div>
        <img
          src="/dsi-logo.png"
          className="mx-auto px-1 py-6 w-64 h-auto"
        ></img>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-auto w-[100%]"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="flex justify-center py-10 px-4 w-[80%] mx-auto gap-5">
          <div className="w-[55%]">
            <img src="/hero-left.jpg" className="shadow-lg"></img>
          </div>
          <div className="w-[35%] ">
            <div className="bg-secondary px-6 py-4 rounded-t-lg">
              <h1 className="text-white text-2xl font-bold">Apply Now!</h1>
            </div>
            <form className="space-y-4 bg-white p-6 ro rounded-b-lg shadow-lg">
              <div className="flex items-center border rounded-lg px-4 py-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full outline-none text-gray-900 font-bold"
                />
              </div>

              <div className="flex items-center border rounded-lg px-4 py-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full outline-none text-gray-900 font-bold"
                />
              </div>

              <div className="flex items-center border rounded-lg px-4 py-3">
                <select className="w-full outline-none text-gray-900 bg-white font-bold">
                  <option value="" className="text-gray-700 font-bold">
                    Last Education:
                  </option>
                  <option value="ssc">SSC</option>
                  <option value="hsc">HSC</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="masters">Masters</option>
                </select>
              </div>

              <div className="flex items-center border rounded-lg px-4 py-3">
                <input
                  type="text"
                  placeholder="Preferred Country"
                  className="w-full outline-none text-gray-900 font-bold"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-3 rounded-lg shadow-md "
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-screen bg-blue-50 mx-auto py-4 flex flex-col ">
        <div className="py-6 mx-auto">
          <img src="/one-stop-1024x133.png"></img>
        </div>
        <div className="grid grid-cols-4 grid-rows-2  p-6 w-[90%] mx-auto ">
          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <NotebookPen className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black items-center align-middle group-hover:text-secondary transition-colors duration-300">
              Eligibility Assessment
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <Landmark className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>

            <h2 className="mx-auto text-black items-center align-middle group-hover:text-secondary transition-colors duration-300">
              University & Program Selection
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <Receipt className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black items-center align-middle group-hover:text-secondary transition-colors duration-300">
              Scholarship Application
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <FileUser className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black items-center align-middle group-hover:text-secondary transition-colors duration-300">
              Sponsor Document Support
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <Banknote className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black items-center align-middle group-hover:text-secondary transition-colors duration-300">
              Bank Statement Support
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <SquarePen className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black items-center align-middle group-hover:text-secondary transition-colors duration-300">
              SOP Letter Writting
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <ScrollText className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black items-center align-middle group-hover:text-secondary transition-colors duration-300">
              Visa Application Support
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <div className="w-80 flex flex-col text-xl font-semibold text-secondary mx-auto hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg">
            <div className="items-center align-middle mx-auto p-3 text-xl">
              <Plane className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black group-hover:text-secondary transition-colors duration-300">
              Pre-Departure Information
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-x-150 transition-transform duration-300"></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 w-screen py-10 flex justify-between px-10 mx-auto">
        <div className="flex flex-col gap-8 w-[26%] text-lg px-3">
          <img src="/dsi-logo.png" className="w-60 h-auto"></img>
          <h3>
            We are renowned education consultancy for prospective students who
            would like to study in CANADA, UK, USA, Australia, Sweden,
            Netherlands, Denmark & other European Countries.
          </h3>
          <div className="flex gap-2 text-secondary">
            <Facebook />
            <Linkedin />
            <Instagram />
            <Youtube />
          </div>
        </div>
        <div className="w-[20%] flex flex-col gap-8 py-4">
          <h2 className="text-black font-bold  text-xl">Sitemap</h2>
          <div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">Home</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">About</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">Services</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">Countries</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">Contact</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[20%] flex flex-col gap-8 py-4">
          <h2 className="text-black font-bold  text-xl">Countries</h2>
          <div>
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">Australia</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">UK</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">USA</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">Canada</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                <span class="text-gray-700">New Zealand</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg py-4 w-[30%]">
          <div className="flex flex-col gap-4 px-4 py-5">
            <Building2 className="text-secondary w-20  h-auto" />
            <div className="flex justify-start gap-3">
              <MapPin className="text-secondary w-12 h-auto" />
              Gulshan-02: House-12B, Lift-04, Flat-4A, Kamal Attaturk Avenue,
              Gulshan-02, Dhaka-1212.
            </div>
            <div className="flex justify-start gap-3">
              <MessageCircleHeart className="text-green-600 w-08 h-auto" />
              WhatsApp: +880 14066 99551-4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
