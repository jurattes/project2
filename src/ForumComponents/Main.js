import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";


const Main = (props) => {
    return <main>
        <LeftComponent {...props} />
        <RightComponent {...props} />
    </main>
}


export default Main;