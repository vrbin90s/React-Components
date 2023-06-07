import PROGRAMS_DATA from '../../../Data/ProgramsData';
import ProgramItem from '../ProgramItem/ProgramItem';
import './ProgramsList.css';

function ProgramsList() {
    return (
        <div className="programs-list">
            {PROGRAMS_DATA.map((program, index) => {
                return(
                    <ProgramItem
                    key = {index}
                    url = '#'
                    imageSrc = {program.image}
                    title = {program.title}
                    body = {program.description}
                    features = {program.features}
                    extraText = {program.extra}
    
                    />
                )

            })}
        </div>
    )
}

export default ProgramsList;