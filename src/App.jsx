import { Camera } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";

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
    </div>
  );
}

export default App;
