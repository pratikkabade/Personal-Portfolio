import { MoveDownSection } from "../components/Animations"
import { imageURL, myName } from "../constants/NameData"

export const Home = () => {
    return (
        <div className="h-screen curved-gradient-bottom">
            <div className="h-screen flex flex-col justify-center lg:justify-end items-center">
                <img
                    src={imageURL}
                    className="w-64 h-64 rounded-xl shadow-2xl shadow-slate-700 hover:scale-105 hover:brightness-110 mx-auto"
                    draggable="false"
                    alt="banner" />
                <MoveDownSection>
                    <h1 className="text-7xl max-md:text-5xl !text-center font-bold mt-20 my-3
                    hover:brightness-105
                    bg-gradient-to-r from-orange-600 to-indigo-600 bg-clip-text text-transparent">
                        {myName}
                    </h1>
                </MoveDownSection>
            </div>
        </div>
    )
}