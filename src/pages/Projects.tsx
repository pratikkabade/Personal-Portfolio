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
                bg-gradient-to-r from-black via-slate-500 to-black bg-clip-text text-transparent">
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