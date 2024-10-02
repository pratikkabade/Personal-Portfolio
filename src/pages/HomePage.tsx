import { Contact } from "./Contact"
import { Lander } from "./Lander"
import { Projects } from "./Projects"

export const HomePage = () => {
    return (
        <div className='fullpage h-screen select-none'>
            <Lander />

            <Projects />

            <Contact />
        </div>
    )
}