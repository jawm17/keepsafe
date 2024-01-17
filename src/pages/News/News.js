import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Article from "../../components/Article";
import texasArticles from "../../assets/texasArticles.json";
import nationwideArticles from "../../assets/nationwideArticles.json";
import "./newsStyle.css";

export default function News() {

    return (
        <div>
            <Header />

            {/* you can remove this bee tee dubs */}
            <div id="space">

            </div>

            <div className="articleSectionTitle">
                Texas
            </div>
            <div id="articleGridOuter">
                <div id="articleGrid">
                    {texasArticles.map((data) => {
                        return (
                            <Article data={data} />
                        );
                    })}
                </div>
            </div>
            <div className="articleSectionTitle">
                Nationwide
            </div>
            <div id="articleGridOuter">
                <div id="articleGrid">
                    {nationwideArticles.map((data) => {
                        return (
                            <Article data={data} />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}