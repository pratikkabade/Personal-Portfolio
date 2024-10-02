import { MoveDownSection } from "../components/Animations"
import { imageURL, myName } from "../constants/NameData"

export const Lander = () => {
    return (
        <div className="h-screen bg-gradient-to-b from-teal-200 to-lime-200">
            <div className="h-screen flex flex-row max-sm:flex-col justify-center items-center">
                <div className="flex flex-col !mt-0 max-sm:hidden">
                    <MoveDownSection>
                        <h2 className="text-9xl max-lg:text-8xl !text-end max-sm:!text-center font-bold
                    hover:brightness-105 flex flex-col h-full
                    bg-gradient-to-r from-lime-900 to-stone-900 bg-clip-text text-transparent">
                            <span>{myName.split(' ')[0]}</span>
                            <span>{myName.split(' ')[1]}</span>
                        </h2>
                    </MoveDownSection>
                </div>

                <img
                    src={imageURL}
                    className="w-64 h-64 max-md:w-52 max-md:h-52 mx-20 max-sm:mx-0 sm:my-10 rounded-xl shadow-2xl shadow-slate-700 hover:scale-105 hover:brightness-110"
                    draggable="false"
                    alt="banner" />

                <div className="flex-col mt-20 hidden max-sm:flex">
                    <MoveDownSection>
                        <h2 className="text-9xl max-lg:text-8xl !text-end max-sm:!text-center font-bold
                    hover:brightness-105 flex flex-col h-full
                    bg-gradient-to-r from-lime-900 to-stone-900 bg-clip-text text-transparent">
                            <span>{myName.split(' ')[0]}</span>
                            <span>{myName.split(' ')[1]}</span>
                        </h2>
                    </MoveDownSection>
                </div>

            </div>
        </div>
    )
}