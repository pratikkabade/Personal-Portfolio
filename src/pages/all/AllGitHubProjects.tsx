import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { FadeInSection, MoveDownSection } from "../../components/Animations";
import { GitHubUserName, IMAGE_BASE_URL } from "../../constants/NameData";

export const AllGitHubProjects = () => {
    const [projects, setProjects] = useState([]);
    const [rprojects, setRProjects] = useState([]);
    const [dprojects, setDProjects] = useState([]);
    const [loading, setLoading] = useState(false); // Track loading state

    const url = `https://api.github.com/users/${GitHubUserName}/repos`;

    const fetchData = async () => {
        console.log("Fetching data...");
        const response = await fetch(url);
        const data = await response.json();

        const projectData = data
            .filter((project: any) => !project.topics.includes("my-depricated-projects"))
            .map((project: any) => ({
                name: project.name,
                href: project.homepage || project.html_url,
                git: project.html_url,
                description: project.description,
                image: `${IMAGE_BASE_URL}${project.name}.png`,
                language: project.language,
                tag: project.topics[0],
                tagcolor: "border-rose-800 text-rose-800 bg-rose-50 hover:text-rose-50 hover:bg-rose-800",
            }));

        const rprojectData = data
            .filter((project: any) => project.topics.includes("my-react-projects"))
            .map((project: any) => ({
                name: project.name,
                href: project.homepage || project.html_url,
                git: project.html_url,
                description: project.description,
                image: `${IMAGE_BASE_URL}${project.name}.png`,
                language: project.language,
                tag: "react",
                tagcolor: "border-indigo-800 text-indigo-800 bg-indigo-50 hover:text-indigo-50 hover:bg-indigo-800",
            }))
            .reverse();

        const dprojectData = data
            .filter((project: any) => project.topics.includes("my-dotnet-projects"))
            .map((project: any) => ({
                name: project.name,
                href: project.homepage || project.html_url,
                git: project.html_url,
                description: project.description,
                image: `${IMAGE_BASE_URL}${project.name}.png`,
                language: project.language,
                tag: "dotnet",
                tagcolor: "border-green-800 text-green-800 bg-green-50 hover:text-green-50 hover:bg-green-800",
            }))
            .reverse();

        // Save to localStorage
        localStorage.setItem("projects", JSON.stringify(projectData));
        localStorage.setItem("rprojects", JSON.stringify(rprojectData));
        localStorage.setItem("dprojects", JSON.stringify(dprojectData));

        // Update state
        setProjects(projectData);
        setRProjects(rprojectData);
        setDProjects(dprojectData);
    };

    useEffect(() => {
        const storedProjects = localStorage.getItem("projects");
        const storedRProjects = localStorage.getItem("rprojects");
        const storedDProjects = localStorage.getItem("dprojects");

        if (storedProjects && storedRProjects && storedDProjects) {
            // Load from localStorage
            setProjects(JSON.parse(storedProjects));
            setRProjects(JSON.parse(storedRProjects));
            setDProjects(JSON.parse(storedDProjects));
            setTimeout(() => setLoading(false), 0); // Show spinner for 3 seconds
        } else {
            // Fetch and save data
            fetchData().then(() => setTimeout(() => setLoading(false), 1000));
        }
    }, []);

    return (
        <FadeInSection>
            <div className="flex flex-col">
                {loading ? (
                    <div className="spinner">Loading...</div> // Replace with your spinner component
                ) : (
                    <>
                        <div className="flex flex-col justify-center items-center mt-16">
                            <MoveDownSection>
                                <div className="cursor-default text-7xl max-md:text-5xl max-lg:text-center font-bold px-7 py-3 rounded-full w-fit hover:brightness-105 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                                    Non Depreciated
                                </div>
                            </MoveDownSection>
                            <div className="flex flex-row flex-wrap align-middle items-center justify-center">
                                {projects.map((project: any) => (
                                    <Card {...project} key={project.name} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center mt-16">
                            <MoveDownSection>
                                <div className="cursor-default text-7xl max-md:text-5xl max-lg:text-center font-bold px-7 py-3 rounded-full w-fit hover:brightness-105 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                                    React Projects
                                </div>
                            </MoveDownSection>
                            <div className="flex flex-row flex-wrap align-middle items-center justify-center">
                                {rprojects.map((project: any) => (
                                    <Card {...project} key={project.name} />
                                ))}
                            </div>
                        </div>


                        <div className="flex flex-col justify-center items-center mt-16">
                            <MoveDownSection>
                                <div className="cursor-default text-7xl max-md:text-5xl max-lg:text-center font-bold px-7 py-3 rounded-full w-fit hover:brightness-105 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                                    dotNET Projects
                                </div>
                            </MoveDownSection>
                            <div className="flex flex-row flex-wrap align-middle items-center justify-center">
                                {dprojects.map((project: any) => (
                                    <Card {...project} key={project.name} />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </FadeInSection>
    );
};
