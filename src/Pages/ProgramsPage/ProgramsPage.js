import Container from "../../Components/Core/Container/Container";
import Banner from "../../Components/ProgramsPage/Banner/Banner";
import ProgramsWrapper from "../../Components/ProgramsPage/ProgramsWrapper/ProgramsWrapper";
import './ProgramsPage.css';

function ProgramsPage() {
    return (
        <Container title = 'Programos'>
            <div className="page-content">
                <Banner 
                title1 = 'Nežinai ką pasirinkti?'
                title2 = 'Spręsk IT testą'
                url = '#'
                />
                <ProgramsWrapper />
            </div>
        </Container>
    );
}

export default ProgramsPage;
