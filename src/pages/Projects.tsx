import { MoveDownSection } from "../components/Animations"
import { GithubProjects } from "../components/GitHubProjects"

export const Projects = () => {
    return (
        <div className="flex flex-col justify-between max-lg:justify-center h-screen bg-gradient-to-b from-lime-200 to-teal-200">
            <div className="flex flex-col items-center">
                <MoveDownSection>
                    <div className="text-7xl max-md:text-5xl max-lg:text-center font-bold px-7 py-3 rounded-full w-fit hover:brightness-105 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                        Open-Sourced Projects
                    </div>
                </MoveDownSection>
            </div>

            <div className="caraosel">
                <GithubProjects />
            </div>
        </div>
    )
}