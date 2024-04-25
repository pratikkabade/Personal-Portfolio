import { FadeInSection } from "./Animations"

export const Card = (props: any) => {
    return (
        <FadeInSection>
            <a
                key={props.name}
                href={props.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col">
                <div className={`bg-slate-50 w-fit h-fit shrink-0 hover:scale-105 border-2 border-neutral-600 p-5 m-5 hover:shadow-lg z-0 group rounded-lg`}>
                    <h1 className="text-xl font-bold">
                        {props.name}
                        <i className="fas fa-external-link-alt ml-2 opacity-0 group-hover:opacity-100"></i>

                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={props.git}>
                            <i className="fab fa-github ml-2 opacity-0 group-hover:opacity-100 hover:text-blue-700 z-20"></i>
                        </a>
                    </h1>
                    <h2 className="text-lg w-48 mt-3">{props.description}</h2>

                    {
                        props.tag.split(',')
                            .slice(0, 1)
                            .map((tag: any) => {
                                return (
                                    <p
                                        className={`border-2 mt-2 text-sm font-bold rounded-full w-fit px-4 py-0.5 z-10 text-black ${props.tagcolor} hover:text-white hover:opacity-70`}>
                                        {tag}
                                    </p>
                                )
                            })}

                </div>
            </a>
        </FadeInSection>
    )
}