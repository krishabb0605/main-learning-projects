import ImageSlider from "../components/ImageSlider";
import serverSideFunction from "../utils/server-utils"

export default function ServerRoutePage() {
    const result = serverSideFunction();

    return (
        <div>
            <div>Server Route : {result}</div>
            {/* You can move client side code with packages in seperate component and that way you can use in server component. */}
            <ImageSlider />
        </div>
    )
}