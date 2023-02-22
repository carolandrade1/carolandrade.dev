import { Button3d } from "./button3D";
import { info } from "../lib/info";

export const ProjectGallery = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 md:grid-rows-2 ">
            {info.gridProject.map((item) => (
                <div key={item.cardId} className="border rounded-md p-4">
                    <h3 className="mb-4">{item.title}</h3>
                    <p className="mb-4">{item.description}</p>
                    <Button3d href={item.link} text={item.buttonText} primaryBackground={item.primaryBackground} secondaryBackground={item.secondaryBackground}/>
                </div>
            ))}
        </div>
    )
}