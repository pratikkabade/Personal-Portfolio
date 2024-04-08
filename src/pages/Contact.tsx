import { FadeInSection, MoveDownSection } from "../components/Animations"
import { ContactData } from "../constants/ContactData"

export const Contact = () => {
    return (
        <div className="h-screen flex flex-col items-center bg-gradient-to-r from-sky-300 via-emerald-200 to-blue-300">
            <div className="flex flex-col items-center">
                <MoveDownSection>
                    <div className="text-7xl max-md:text-5xl font-bold
                 px-7 py-3 rounded-full text-center w-fit
                 hover:brightness-105
                 bg-gradient-to-r from-sky-700 via-emerald-700 to-blue-700 bg-clip-text text-transparent">
                        Contact me
                    </div>
                </MoveDownSection>

                <div className="flex flex-row flex-wrap justify-center w-4/5">
                    {
                        ContactData.map((data) => {
                            return (
                                <a rel="noreferrer" target="_blank" className="group m-5"
                                    key={data.title}
                                    href={data.url}
                                >
                                    <FadeInSection>
                                        <div className="flex flex-col rounded-xl p-5 max-lg:p-3 max-md:p-2 max-sm:p-1 hover:scale-105 bg-slate-50 border-2 border-neutral-600 hover:shadow-lg w-64 max-lg:w-48 text-center justify-center">
                                            <div className="text-3xl max-lg:text-xl font-bold group-hover:underline">
                                                {data.icon}
                                                {data.title}
                                                <i className="fas fa-external-link-alt ml-2 opacity-0 group-hover:opacity-100 z-20"></i>
                                            </div>
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