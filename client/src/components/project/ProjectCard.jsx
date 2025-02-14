import { useNavigate } from "react-router-dom";


const ProjectCard = ({ setProject, project }) => {
    const navigateTo = useNavigate();

    return (
        <div
            className="max-w-[450px] min-w-[400px] m-[10px] rounded shadow-sm border-2 divide-y-2 cursor-pointer duration-200"
        >
            <div
                className="p-4 hover:bg-slate-200"
                onClick={() => {
                    navigateTo("/project", { state: { project} });
                }}
            >
                <div
                    className="flex pb-3"
                >
                    <div className="max-w-[70px] mx-2 p-0 rounded-[100%] border-[#CCCC19] border-2 overflow-hidden">
                        <img src="https://images-platform.99static.com//mh-2eBkhpKIAbon0e9-u0BixeSI=/0x0:1580x1580/fit-in/500x500/99designs-contests-attachments/64/64128/attachment_64128700" alt="" />
                    </div>
                    <div
                        className="text-[#303030] mx-2 p-2 text-[500] text-[22px]">{project.name}</div>
                </div>
                <div
                    className="pl-4 pr-2 h-10 text-[16px]"
                >
                    {project.description}
                </div>
            </div>

            <div className="p-2 text-right">

                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DELETE"
                    onClick={() => {
                        setProject(project)
                    }}
                >🍄
                </button>
                <button className="btn btn-success" data-bs-toggle="modal" 
                  onClick={() => {
                    navigateTo("/edit", { state: { project} });
                }}
                >🔧
                </button>
            </div>
        </div >
    )
}

export default ProjectCard
