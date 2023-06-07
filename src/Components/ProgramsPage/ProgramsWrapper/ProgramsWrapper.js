import ProgramsFilter from "../Form/ProgramsFilter/ProgramsFilter";
import ProgramsList from "../ProgramsList/ProgramsList";
import './ProgramsWrapper.css';

function ProgramsWrapper() {
    return(
        <div className="programs-wrapper">
            <ProgramsFilter />
            <ProgramsList />
        </div>
    )
}

export default ProgramsWrapper;