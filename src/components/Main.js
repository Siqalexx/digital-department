import AboutUs from "./AboutUs";
import Banners from "./Banners";
import Feedback from "./Feedback";
import News from "./News";
import Preview from "./Preview";
import Questions from "./Questions";

function Main() {
    return (
        <main className="main">
            <Preview></Preview>
            <AboutUs></AboutUs>
            <Banners></Banners>
            <News></News>
            <Questions></Questions>
            <Feedback></Feedback>
        </main>
    );
}

export default Main;
