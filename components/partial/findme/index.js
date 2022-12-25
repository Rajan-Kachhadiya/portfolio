import Link from "next/link"
import {
    LinkedinIcon,
    GithubIcon,
    SkypeIcon,
} from "/components/icons"

export default function FindMe() {

    const findMeItem = [
        {
            icon: <LinkedinIcon />,
            url: "https://www.linkedin.com/in/rajan-kachhadiya-67839722a",
        },
        {
            icon: <GithubIcon />,
            url: "https://github.com/Rajan-Kachhadiya",
        },
        {
            icon: <SkypeIcon />,
            url: "https://join.skype.com/invite/vZlSKybejJ6h",
        },
    ]
    return (
        <div>
            <div className="uppercase mb-20 font-medium text-[14px] leading-[19px]">
                Find With Me
            </div>
            <div className="flex items-center gap-30">
                {findMeItem.map((item, key) => (
                    <Link key={key} target="_blank" href={item.url} className="findme-box w-[60px] h-[60px] inline-flex items-center justify-center rounded-md bg-gradient-box shadow-shadow-white relative z-[2] transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white hover:translate-y-[-3px]">
                        {item.icon}
                    </Link>
                ))}
            </div>
            <style>{`
                .findme-box svg path{
                    transition: 0.4s all ease-in-out;
                }
                .findme-box:hover svg path{
                    fill: white;
                }
            `}</style>
        </div>
    )
}