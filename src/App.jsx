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
    <div className="m-0 p-0 max-w-100 overflow-x-hidden">
      <div className="bg-primary px-4 md:px-10 w-full flex flex-wrap justify-between">
        <h2 className="text-white p-4 font-semibold text-sm md:text-base">
          We're Leading Educational Consultancy in Bangladesh.
        </h2>
        <div className="text-white flex flex-wrap items-center gap-2 md:gap-5 p-4 text-xs md:text-sm">
          <h2 className="">Office Hours: 10:00AM- 07:00PM</h2>
          <div className="flex gap-2">
            <Facebook />
            <Instagram />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>
      <div className="bg-white py-6 px-4 md:px-20 flex flex-wrap justify-between items-center gap-6">
        <img src="/dsi-logo.png" alt="logo" className="w-48 md:w-80" />

        <div className="flex items-center gap-3">
          <Phone className="text-secondary w-6 md:w-10" />
          <div className="flex flex-col font-bold text-xs md:text-base">
            <span>Call Us:</span>
            <span>+880 14066 99551-4</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-secondary w-6 md:w-10" />
          <div className="flex flex-col font-bold text-xs md:text-base">
            <span>Email Us:</span>
            <span className="break-all">dreamstudyinternational@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-secondary w-6 md:w-10" />
          <div className="flex flex-col font-bold text-xs md:text-base">
            <span>Location:</span>
            <span>Gulshan 2</span>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 bg-primary w-full flex flex-wrap justify-between items-center px-4 md:px-10 py-4 lg:w-[80%] mx-auto rounded-lg">
        <div className="flex flex-wrap gap-4 text-white font-semibold text-sm md:text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Countries</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
        <button className="mt-4 md:mt-0 bg-secondary text-sm md:text-lg font-bold text-white rounded-lg px-4 md:px-6 py-2 md:py-3">
          Apply Now
        </button>
      </div>

      <div>
        <img
          src="/dsi-logo.png"
          className="mx-auto px-1 py-6 w-64 h-auto"
          alt="Logo"
        />
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center py-10 px-4 lg:w-[80%] mx-auto gap-5">
          <div className="w-full lg:w-[55%]">
            <img
              src="/hero-left.jpg"
              className="shadow-lg w-full h-auto"
              alt="Hero Left"
            />
          </div>

          <div className="w-full lg:w-[35%]">
            <div className="bg-secondary px-6 py-4 rounded-t-lg">
              <h1 className="text-white text-2xl font-bold">Apply Now!</h1>
            </div>

            <form className="space-y-4 bg-white p-6 rounded-b-lg shadow-lg">
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

              <button type="submit" className="form_submit_btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-screen bg-blue-50 mx-auto py-4 flex flex-col">
        <div className="py-6 mx-auto">
          <img
            src="/one-stop-1024x133.png"
            alt="One Stop"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 w-[95%] mx-auto">
          <div className="dark flex flex-col text-xl font-semibold text-secondary dark:bg-gray-700 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <NotebookPen className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black text-center dark:text-white group-hover:text-secondary transition-colors duration-300">
              Eligibility Assessment
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="flex flex-col text-xl font-semibold text-secondary hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <Landmark className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black text-center group-hover:text-secondary transition-colors duration-300">
              University & Program Selection
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="dark flex flex-col text-xl font-semibold dark:bg-gray-700 text-secondary hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <Receipt className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black text-center dark:text-white group-hover:text-secondary transition-colors duration-300">
              Scholarship Application
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="flex flex-col text-xl font-semibold text-secondary hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <FileUser className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black text-center group-hover:text-secondary transition-colors duration-300">
              Sponsor Document Support
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="dark flex flex-col text-xl font-semibold text-secondary dark:bg-gray-700 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <Banknote className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="dark:text-white mx-auto text-black text-center group-hover:text-secondary transition-colors duration-300">
              Bank Statement Support
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="flex flex-col text-xl font-semibold text-secondary hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <SquarePen className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black text-center group-hover:text-secondary transition-colors duration-300">
              SOP Letter Writing
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="dark flex flex-col text-xl font-semibold text-secondary dark:bg-gray-700 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <ScrollText className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="dark:text-white mx-auto text-black text-center group-hover:text-secondary transition-colors duration-300">
              Visa Application Support
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="flex flex-col text-xl font-semibold text-secondary hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group p-4 rounded-lg bg-white">
            <div className="items-center mx-auto p-3 text-xl">
              <Plane className="w-16 h-auto group-hover:text-secondary transition-all duration-300" />
            </div>
            <h2 className="mx-auto text-black text-center group-hover:text-secondary transition-colors duration-300">
              Pre-Departure Information
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 transform scale-x-0 group-hover:scale-150 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100  mx-auto py-10 px-4 md:px-10">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 mx-auto">
            <div className="flex flex-col gap-6 md:w-[45%] lg:w-[20%] text-lg px-3">
              <img src="/dsi-logo.png" className="w-48 h-auto" alt="DSI Logo" />
              <h3>
                We are renowned education consultancy for prospective students
                who would like to study in CANADA, UK, USA, Australia, Sweden,
                Netherlands, Denmark & other European Countries.
              </h3>
              <div className="flex gap-3 text-secondary">
                <Facebook />
                <Linkedin />
                <Instagram />
                <Youtube />
              </div>
            </div>

            <div className="md:w-[45%] lg:w-[20%] flex flex-col gap-6 py-4">
              <h2 className="text-black font-bold text-xl">Sitemap</h2>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Countries", "Contact"].map(
                  (item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="md:w-[45%] lg:w-[20%] flex flex-col gap-6 py-4">
              <h2 className="text-black font-bold text-xl">Countries</h2>
              <ul className="space-y-3">
                {["Australia", "UK", "USA", "Canada", "New Zealand"].map(
                  (country) => (
                    <li key={country} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="text-gray-700">{country}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-white w-full shadow-lg rounded-lg py-4 px-4 md:px-6 lg:w-[30%] ">
              <div className="flex flex-col gap-4">
                <Building2 className="text-secondary w-16 h-auto" />
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="text-secondary w-8 h-8" />
                  Gulshan-02: House-12B, Lift-04, Flat-4A, Kamal Attaturk
                  Avenue, Gulshan-02, Dhaka-1212.
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MessageCircleHeart className="text-green-600 w-6 h-6" />
                  WhatsApp: +880 14066 99551-4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary w-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-4 w-[90%] mx-auto space-y-4 md:space-y-0">
          <div className="text-white font-semibold text-center md:text-left">
            © 2023 Dream Study Int.. Designed By *hirebirds Team.
          </div>
          <div>
            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
              <span className="text-white font-medium">About</span>
              <div className="dot-glow"></div>
              <span className="text-white font-medium">FAQ</span>
              <div className="dot-glow"></div>
              <span className="text-white font-medium">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
