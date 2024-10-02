import { FadeInSection, MoveDownSection } from "../components/Animations"
import { AboutData } from "../constants/AboutData"

export const About = () => {
    return (
        <div className="h-screen flex flex-col items-center">
            <div className="flex flex-col items-center">
                <MoveDownSection>
                    <div className="text-7xl max-md:text-5xl font-bold
                 px-7 py-3 rounded-full text-center w-fit
                 hover:brightness-105
                 bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                        About Me
                    </div>
                </MoveDownSection>

                <div className="flex flex-row flex-wrap justify-center">

                    {
                        AboutData.map((data) => {
                            return (
                                <a rel="noreferrer" target="_blank" className="group w-64 max-lg:w-48 max-md:w-fit m-5"
                                    key={data.link}
                                    href={data.link}>
                                    <FadeInSection>
                                        <div className="flex flex-col rounded-xl p-5 hover:scale-105 bg-slate-50 border-2 border-neutral-600 hover:shadow-lg">
                                            <div className="text-3xl max-lg:text-xl font-bold">
                                                {data.title}
                                                <i className="fas fa-external-link-alt ml-2 opacity-0 group-hover:opacity-100 max-md:opacity-100 z-20"></i>
                                            </div>
                                            <h3 className="text-xl max-lg:text-sm max-md:hidden font-medium mt-3">
                                                {data.description}
                                            </h3>
                                            <h3 className="hidden text-sm max-md:block font-medium mt-3">
                                                {data.description.split(',')[0]}...
                                            </h3>
                                        </div>
                                    </FadeInSection>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}