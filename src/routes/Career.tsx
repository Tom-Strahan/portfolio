const careerHistory = [
    {
        company: "StoneX",
        role: "Front Office Lead Developer",
        tenure: "2022 - Present",
        technologies: ["Java", "Chronicle", "OpenHFT", "Python", "React", "TypeScript", "Node", "Spring Boot", "WebFlux", "ClickHouse", "Azure", "Kubernetes"]
    },
    {
        company: "Rightmove",
        role: "Senior Engineer",
        tenure: "2021 - 2022",
        technologies: ["Java", "React", "Spring Boot", "TypeScript"]
    },
    {
        company: "Amazon",
        role: "Software Development Engineer",
        tenure: "2020 - 2021",
        technologies: ["Java", "AWS", "Python", "PySpark", "Lambda", "Dynamo", "API Gateway"]
    },
    {
        company: "Mizuho",
        role: "Front Office Engineer",
        tenure: "2019 - 2020",
        technologies: ["Java", "Angular", "Python", "VBA", "Spring Boot"]
    }
]

export default function Career() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">Career History</h1>
            {careerHistory.map(({ company, role, tenure, technologies }) => (
                <div>
                <div className="flex flex-col gap-2  sm:flex-row sm:items-center sm:gap-6">
                    <h2 className="text-2xl tracking-tight">{company}</h2>
                    <p className="text-slate-600">{tenure}</p>
                </div>
                <h3 className="text-xl">{role}</h3>
                <p className="text-slate-600">{technologies.join(" • ")}</p>
                </div>
            ))}
        </div>
    )
}