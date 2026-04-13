
import { CampusCard } from "./Campus";

const Hostel = () => (
<div
  className="campus-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  }}
>
    <CampusCard image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" label="Boys Hostel" description="Spacious rooms with 24/7 security, high-speed Wi-Fi, and attached bathrooms." />
    <CampusCard image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304" label="Girls Hostel" description="Safe residence with biometric access, dedicated wardens, and CCTV surveillance." />
     </div>
);
export default Hostel;
