import { AllGitHubProjects } from "./AllGitHubProjects"
import { MoveDownSection } from "../../components/Animations"
import { Link } from "react-router-dom"

export const AllProjectsPage = () => {
    return (
        <div className="flex flex-col justify-between max-lg:justify-center bg-gradient-to-b from-lime-200 via-emerald-200 to-teal-200">
            <div className="flex flex-col items-center">
                <MoveDownSection>
                    <div className="cursor-default text-7xl max-md:text-5xl max-lg:text-center font-bold px-7 py-3 rounded-full w-fit hover:brightness-105 bg-gradient-to-r from-slate-500 via-black to-gray-500 bg-clip-text text-transparent">
                        <Link to='/'>
                            <i className="fa fa-arrow-left text-white bg-slate-600 px-2 rounded-3xl mr-4 hover:bg-slate-400 cursor-pointer" aria-hidden="true"></i>
                        </Link>
                        All of my Open-Sourced Projects
                    </div>
                </MoveDownSection>
            </div>

            <div className="">
                <AllGitHubProjects />
            </div>
        </div>
    )
}