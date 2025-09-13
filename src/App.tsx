import { Link, Routes, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Projects from "./routes/Projects.tsx";
import Career from "./routes/Career.tsx";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/career", label: "Career" },
];

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold">Tom Strahan</Link>
          <nav className="flex gap-6 text-sm">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main spans full width (bg), content centered */}
      <main className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="career" element={<Career />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}