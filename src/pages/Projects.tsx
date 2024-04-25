import { MoveDownSection } from "../components/Animations"
import { GithubProjects } from "../components/GitHubProjects"

export const Projects = () => {
    return (
        <div className="flex flex-col justify-between max-lg:justify-center h-screen curved-gradient-top">
            <div className="flex flex-col items-center">
                <MoveDownSection>
                    <div className="text-7xl max-md:text-5xl max-lg:text-center font-bold
                text-white px-7 py-3 rounded-full w-fit
                hover:brightness-105
                bg-gradient-to-r from-lime-600 via-emerald-500 to-lime-600 bg-clip-text text-transparent">
                        My Open-Sourced Projects
                    </div>
                </MoveDownSection>
            </div>

            <div className="caraosel">
                <GithubProjects />
            </div>
        </div>
    )
}