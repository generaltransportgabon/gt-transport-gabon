import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-blue-950 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-yellow-400" />
            <span>+241 65 92 13 33</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-yellow-400" />
            <span>info@generaltransport-gabon.com</span>
          </div>

        </div>

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-yellow-400" />
            <span>Libreville, Gabon</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} className="text-yellow-400" />
            <span>Lun - Ven : 07h00 - 15h30</span>
          </div>

        </div>

      </div>
    </div>
  );
}