import PROGRAMS_DATA from "../../../../Data/ProgramsFormData";
import FormControlSelect from "../FormControl/FormControl";
import './ProgramsFilter.css';

function ProgramsFilter() {
    return (
        <div className="programs-filter">
            <form className="programs-filter-form">
                <span className="programs-found">Rastos 48 programos</span>
                <FormControlSelect
                    element="select"
                    label="Tema"
                    id="course-select"
                    data={PROGRAMS_DATA[0].courses}
                />
                <FormControlSelect
                    element="select"
                    label="Vieta"
                    id="course-select"
                    data={PROGRAMS_DATA[0].locations}
                />
                <FormControlSelect
                    element="select"
                    label="Tipas"
                    id="course-select"
                    data={PROGRAMS_DATA[0].types}
                />
                <fieldset>
                    <legend>Laikas</legend>
                    <FormControlSelect
                        element="input"
                        type="checkbox"
                        label="Laikas"
                        id="course-select"
                        data={PROGRAMS_DATA[0].times}
                    />
                </fieldset>
                <FormControlSelect
                    element="input"
                    type="submit"
                    value="Filtruoti"
                    id="course-select"
                    data={PROGRAMS_DATA[0].times}
                />
                <FormControlSelect
                    element="input"
                    type="reset"
                    value="Išvalyti"
                    id="course-select"
                    data={PROGRAMS_DATA[0].times}
                />
            </form>
            <button className="button button-filter">Filtruoti</button>
        </div>
    );
}

export default ProgramsFilter;
