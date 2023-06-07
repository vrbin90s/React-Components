import Header from "../Header/Header";
import "./Container.css";

function Container(props) {
    const { classes, children, title } = props;
    const addClasses = classes ? classes : '';
    return (
        <div className={`container ${addClasses}`}>
            <Header />
            <main className="content-wrapper">
                { title && <h2 className="section-title">{title}</h2> }
                { children }
            </main> 
        </div>
    );
}
export default Container;
