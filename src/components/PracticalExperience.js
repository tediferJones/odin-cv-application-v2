import { v4 as uuidv4 } from 'uuid';
const currentYear = new Date().getFullYear();

function PracticalExperience(props) {
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

  const practicalExperienceDisplay = props.practicalData.saved.map(listItem => {
    return (
      <li key={uuidv4()}>
        <div className='displayTitle'>
          <h3>{listItem.name}</h3>
          <h4>{listItem.startMonth} {listItem.startYear} - {listItem.endMonth} {listItem.endYear}</h4>
        </div>
        <p>{listItem.description}</p>
        <div className={props.practicalData.displayPretty ? 'hidden' : 'savedTools'}>
          <button onClick={props.updateSaved} componentname='practicalInfo' value={listItem.id}>Edit</button>
          <button onClick={props.deleteSaved} componentname='practicalInfo' value={listItem.id}>Delete</button>
        </div>
      </li>
    );
  });

  const practicalExperienceForm = (
    <form>
      <label htmlFor='name'>Name of Company</label>
      <input id='name' name='name' type='text' componentname='practicalInfo' onChange={props.changeHandler} value={props.practicalData.inputs.name} required></input>

      <label htmlFor='description'>Description of Duties</label>
      <textarea id='description' name='description' rows={5} componentname='practicalInfo' onChange={props.changeHandler} value={props.practicalData.inputs.description}></textarea>

      <label htmlFor='startMonth'>Start Month</label>
      <select id='startMonth' name='startMonth' componentname='practicalInfo' onChange={props.changeHandler} value={props.practicalData.inputs.startMonth}>{monthOptions}</select>

      <label htmlFor='startYear'>Start Year</label>
      <select id='startYear' name='startYear' componentname='practicalInfo' onChange={props.changeHandler} value={props.practicalData.inputs.startYear}>{yearOptions}</select>

      <label htmlFor='endMonth'>End Month</label>
      <select id='endMonth' name='endMonth' componentname='practicalInfo' onChange={props.changeHandler} value={props.practicalData.inputs.endMonth}>{monthOptions}</select>

      <label htmlFor='endYear'> End Year</label>
      <select id='endYear' name='endYear' componentname='practicalInfo' onChange={props.changeHandler} value={props.practicalData.inputs.endYear}>{yearOptions}</select>

      <button onClick={props.submitHandler} componentname='practicalInfo'>Add Entry</button>
    </form>
  )

  return (
    <div className='section'>
      <h2>Practical Experience</h2>
      {props.practicalData.saved.length ? practicalExperienceDisplay : []}
      {props.practicalData.displayPretty ? [] : practicalExperienceForm}
      <button onClick={props.toggleForm} componentname='practicalInfo' className={props.practicalData.displayPretty ? 'editButton' : ''}>{props.practicalData.displayPretty ? 'Edit' : 'Done'}</button>
    </div>
  )
}

export default PracticalExperience;
