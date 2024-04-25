import { FadeInSection, MoveDownSection } from "../components/Animations"
import { EducationData, SkillsData } from "./EducationData"

export const Education = () => {
    return (
        <div className="h-screen flex flex-col items-center bg-gradient-to-r from-emerald-300 via-green-200 to-lime-300">
            <div className="flex flex-col items-center">
                <MoveDownSection>
                    <div className="text-7xl max-md:text-5xl font-bold
                 px-7 py-3 rounded-full text-center w-fit
                 hover:brightness-105
                 bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
                        Education & Skills
                    </div>
                </MoveDownSection>

                <div className="flex flex-row flex-wrap justify-center">

                    {
                        EducationData.map((data) => {
                            return (
                                <div className="w-full m-5"
                                    key={data.name}>
                                    <FadeInSection>
                                        <div className="flex flex-row rounded-xl p-5 bg-slate-50 border-2 border-neutral-600 hover:shadow-lg">
                                            <div>
                                                <img
                                                    className="h-32 rounded-xl mr-5"
                                                    src={data.logo}
                                                    alt="logo" />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="text-3xl max-lg:text-xl font-bold">
                                                    {data.name}
                                                </div>
                                                <h3 className="text-xl max-lg:text-sm font-medium mt-3">
                                                    {data.description}
                                                </h3>
                                                <h3 className="text-xl max-lg:text-sm font-medium mt-1">
                                                    {data.score}
                                                </h3>
                                                <h3 className="text-xl max-lg:text-sm font-normal mt-1">
                                                    {data.time}
                                                </h3>
                                            </div>
                                        </div>
                                    </FadeInSection>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex flex-row flex-wrap justify-center">

                    {
                        SkillsData.map((data) => {
                            return (
                                <div className="m-5"
                                    key={data.name}>
                                    <FadeInSection>
                                        <div className="flex flex-col items-center rounded-xl p-5 bg-slate-50 border-2 border-neutral-600 hover:shadow-lg">
                                            <div className="text-3xl max-lg:text-xl text-center font-bold">
                                                {data.name}
                                            </div>
                                            <img
                                                className="h-32 max-lg:h-16 max-md:h-10 max-md:w-10 max-sm:hidden rounded-xl"
                                                src={data.logo}
                                                alt="logo" />
                                        </div>
                                    </FadeInSection>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}