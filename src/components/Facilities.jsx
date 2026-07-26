import {
  FaBook,
  FaDesktop,
  FaFlask,
  FaBasketballBall,
  FaBus,
  FaMusic,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaBook />,
    title: "Modern Library",
  },
  {
    icon: <FaDesktop />,
    title: "Computer Lab",
  },
  {
    icon: <FaFlask />,
    title: "Science Lab",
  },
  {
    icon: <FaBasketballBall />,
    title: "Sports Complex",
  },
  {
    icon: <FaBus />,
    title: "Transport Facility",
  },
  {
    icon: <FaMusic />,
    title: "Auditorium",
  },
];

const Facilities = () => {
  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center">
          Campus Facilities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-10 text-center hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <div className="flex justify-center text-5xl">
                {facility.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {facility.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;