import { useEffect, useState } from "react"
import { Card } from "./Card"
import { FadeInSection } from "./Animations"
import { GitHubUserName, IMAGE_BASE_URL } from "../constants/NameData"

export const GithubProjects = () => {
    const [projects, setProjects] = useState([])
    const [rprojects, setRProjects] = useState([])
    const [dprojects, setDProjects] = useState([])
    // const [show, setShow] = useState(false)

    const url = 'https://api.github.com/users/' + GitHubUserName + '/repos'

    const fetchData = async () => {
        console.log('fetching data')
        const response = await fetch(url)
        const data = await response.json()
        const project = data
            .filter((project: any) => project.topics.includes('my-depricated-projects') === false)
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: project.topics[0],
                    tagcolor: 'border-rose-800 text-rose-800 bg-rose-50 hover:text-rose-50 hover:bg-rose-800'
                }
            })
        setProjects(project)

        const rproject = data
            .filter((project: any) => project.topics.includes('my-react-projects'))
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: 'react',
                    tagcolor: 'border-indigo-800 text-indigo-800 bg-indigo-50 hover:text-indigo-50 hover:bg-indigo-800'
                }
            })
            .reverse()  // this will make repos with initial letters go to last
        setRProjects(rproject)

        const dproject = data
            .filter((project: any) => project.topics.includes('my-dotnet-projects'))
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: 'dotnet',
                    tagcolor: 'border-green-800 text-green-800 bg-green-50 hover:text-green-50 hover:bg-green-800'
                }
            })
            .reverse()  // this will make repos with initial letters go to last
        setDProjects(dproject)
    }

    useEffect(() => {
        const storedProjects = localStorage.getItem("projects");
        const storedRProjects = localStorage.getItem("rprojects");
        const storedDProjects = localStorage.getItem("dprojects");

        if (storedProjects && storedRProjects && storedDProjects) {
            // Load from localStorage
            setProjects(JSON.parse(storedProjects));
            setRProjects(JSON.parse(storedRProjects));
            setDProjects(JSON.parse(storedDProjects));
        } else {
            // Fetch and save data
            fetchData();
        }
    }, []);


    return (
        <FadeInSection>
            <div className="flex flex-row align-middle items-center justify-center">
                {projects.map((project: any) => (
                    <Card {...project} key={project.name} />
                ))}
                {rprojects.map((project: any) => (
                    <Card {...project} key={project.name} />
                ))}
                {dprojects.map((project: any) => (
                    <Card {...project} key={project.name} />
                ))}
            </div>
        </FadeInSection>
    )
}