import { useState } from "react"
import { Card } from "./Card"
import { FadeInSection } from "./Animations"
import { GitHubUserName } from "../constants/NameData"

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
                    image: project.owner.avatar_url,
                    language: project.language,
                    tag: project.topics.map((topic: any) => topic).join(','),
                    tagcolor: 'hover:bg-rose-800 border-rose-800 text-rose-800'
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
                    image: project.owner.avatar_url,
                    language: project.language,
                    tag: 'react',
                    tagcolor: 'hover:bg-indigo-800 border-indigo-800 text-indigo-800'
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
                    image: project.owner.avatar_url,
                    language: project.language,
                    tag: 'dotnet',
                    tagcolor: 'hover:bg-green-800 border-green-800 text-green-800'
                }
            })
            .reverse()  // this will make repos with initial letters go to last
        setDProjects(dproject)
    }

    // only fetch data once
    if (projects.length === 0) {
        fetchData()
    }


    return (
        <FadeInSection>
            <div className="flex flex-row align-middle items-center justify-center">
                {projects.map((project: any) => {
                    return (
                        <Card
                            name={project.name}
                            git={project.git}
                            href={project.href}
                            description={project.description}
                            image={project.image}
                            language={project.language}
                            tag={project.tag}
                            tagcolor={project.tagcolor}
                            key={project.name}
                        />
                    )
                })}
                {rprojects.map((project: any) => {
                    return (
                        <Card
                            name={project.name}
                            git={project.git}
                            href={project.href}
                            description={project.description}
                            image={project.image}
                            language={project.language}
                            tag={project.tag}
                            tagcolor={project.tagcolor}
                            key={project.name}
                        />
                    )
                })}
                {dprojects.map((project: any) => {
                    return (
                        <Card
                            name={project.name}
                            git={project.git}
                            href={project.href}
                            description={project.description}
                            image={project.image}
                            language={project.language}
                            tag={project.tag}
                            tagcolor={project.tagcolor}
                            key={project.name}
                        />
                    )
                })}
            </div>
        </FadeInSection>
    )
}