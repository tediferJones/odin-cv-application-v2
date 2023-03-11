import { v4 as uuidv4 } from 'uuid';
const currentYear = new Date().getFullYear();

function AcademicExperience(props) {
  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => {
    return (
      <option key={uuidv4()} value={month}>
        {month}
      </option>
    );
  });

  const yearOptions = [...Array(100).keys()].map(i => {
    return (
      <option key={uuidv4()} value={currentYear - i}>
        {currentYear - i}
      </option>
    );
  });

  const academicExperienceDisplay = props.academicData.saved.map(listItem => {
    return (
      <li key={uuidv4()}>
        <h3>{listItem.name}</h3>
        <h4>{listItem.startMonth} {listItem.startYear} - {listItem.endMonth} {listItem.endYear}</h4>
        <p>{listItem.description}</p>
      </li>
    );
  });

  const academicExperienceForm = (
    <form>
      <label htmlFor='name'>Name of Institution</label>
      <input id='name' name='name' type='text' componentname='academicInfo' onChange={props.changeHandler} value={props.academicData.inputs.name}></input>

      <label htmlFor='description'>Description of Studies</label>
      <textarea id='description' name='description' rows={5} componentname='academicInfo' onChange={props.changeHandler} value={props.academicData.inputs.description}></textarea>

      <label htmlFor='startMonth'>Start Month</label>
      <select id='startMonth' name='startMonth' componentname='academicInfo' onChange={props.changeHandler} value={props.academicData.inputs.startMonth}>{monthOptions}</select>

      <label htmlFor='startYear'>Start Year</label>
      <select id='startYear' name='startYear' componentname='academicInfo' onChange={props.changeHandler} value={props.academicData.inputs.startYear}>{yearOptions}</select>

      <label htmlFor='endMonth'>End Month</label>
      <select id='endMonth' name='endMonth' componentname='academicInfo' onChange={props.changeHandler} value={props.academicData.inputs.endMonth}>{monthOptions}</select>

      <label htmlFor='endYear'>End Year</label>
      <select id='endYear' name='endYear' componentname='academicInfo' onChange={props.changeHandler} value={props.academicData.inputs.endYear}>{yearOptions}</select>

      <button onClick={props.submitHandler} componentname='academicInfo'>Add Entry</button>
    </form>
  )

  return (
    <div>
      {props.academicData.saved.length ? academicExperienceDisplay : []}
      {props.academicData.displayPretty ? [] : academicExperienceForm}
      <button onClick={props.toggleForm} componentname='academicInfo'>Toggle Form</button>
    </div>
  )
}

export default AcademicExperience;
