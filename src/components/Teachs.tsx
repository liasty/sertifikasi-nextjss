import TechCard from "./TechCard";

export default function Tech() {
    return (
        <div className="bg-slate-800 w-screen min-h-[300px] p-8">
            <h1 className="text-4xl text-white font-bold mb-4"> Techs</h1>
            <div className="w-32 border-2 mb-8 "/>
            <div className="flex justify-center items w-full gap-4 ">
               
                <TechCard imageURL="/img/java.png" techStack="Javascript" />
                <TechCard imageURL="/img/PHP.jpg" techStack="PHP" />
                <TechCard imageURL="/img/CA.jpg" techStack="C+++" />
            </div>
        </div>
    )
}
