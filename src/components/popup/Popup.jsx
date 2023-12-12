/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
// Init
import React, { useEffect, useState } from 'react';

// Component
export default function Popup({ setTask, onSaveChanges, initialFormData }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [listValue, setListValue] = useState('');
  const [dueDateValue, setDueDateValue] = useState('');
  const [subTaskName, setSubTaskName] = useState('');
  const [color, setColor] = useState('');

  const handleClose = () => {
    setTask(false);
    document.body.style.overflow = 'visible';
    setTaskName('');
    setDueDateValue('');
    setColor('');
    setListValue('');
    setTaskDescription('');
    setSubTaskName('');
  };
  const handleSaveChanges = () => {
    // Collect form data

    setColor('');
    const formData = {
      taskName,
      taskDescription,
      listValue,
      dueDateValue,
      subTaskName,
      color,
    };
    // Call the onSaveChanges function from the parent component
    onSaveChanges(formData);
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-console, no-undef
    console.log('upcome', task);
    // Close the popup
    setTask(false);
    document.body.style.overflow = 'visible';
  };
  // eslint-disable-next-line no-console, no-undef
  console.log(task, 'initialFormData');
  useEffect(() => {
    if (initialFormData) {
      setTaskName(initialFormData.taskName || '');
      setDueDateValue(initialFormData.dueDateValue || '');
      setColor(initialFormData.color || '');
      setListValue(initialFormData.listValue || '');
      setTaskDescription(initialFormData.taskDescription || '');
    } else {
      // Set default values or clear the form
      setTaskName('');
      setDueDateValue('');
      setColor('');
      setListValue('');
      setTaskDescription('');
    }
  }, [initialFormData]);

  // useEffect(() => {
  //   if (task) {
  //     setTaskName(task.taskName || '');
  //     setDueDateValue(task.dueDateValue || '');
  //     setColor(task.color || '');
  //     setListValue(task.listValue || '');
  //     setTaskDescription(task.taskDescription || '');
  //   } else {
  //     setTaskName('');
  //     setDueDateValue('');
  //     setColor('');
  //     setListValue('');
  //     setTaskDescription('');
  //   }
  // }, [task]);
  const handleSelectChange = (event) => {
    setListValue(event.target.value);
  };
  return (
    <>
      ;
      <div className="today_popup">
        <div className="today_popup_box">
          <div className="today_popup_top">
            <div className="popup_top_heading">
              <h2>Task:</h2>
            </div>
            <div className="popup_top_icon">
              <i onClick={handleClose} className="fa-solid fa-xmark" />
            </div>
          </div>
          <div className="today_popup_center">
            <input
              type="text"
              placeholder="Renew Drivers Licence"
              value={taskName}
              onChange={(e) => {
                // eslint-disable-next-line no-console
                console.log('e.target.value', e.target.value);

                setTaskName(e.target.value);
              }}
            />
            <textarea
              id=""
              cols="10"
              rows="10"
              placeholder="Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="popup1_center">
            <div className="popup1_center_list">
              <div className="name1">
                <h5>List</h5>
              </div>
              <div className="name1_detail">
                <select className="personal_name" value={listValue} onChange={handleSelectChange}>
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="Personal">Personal</option>
                  <option value="Personal1">Personal1</option>
                  <option value="Personal2">Personal2</option>
                  <option value="Personal3">Personal3</option>
                </select>
              </div>
            </div>
            <div className="popup1_center_date">
              <div className="name2">
                <h5>DueDate</h5>
              </div>
              <div className="name2_detail">
                <input
                  type="date"
                  id="currentDate"
                  name="currentDate"
                  value={dueDateValue}
                  onChange={(e) => setDueDateValue(e.target.value)}
                />
              </div>
            </div>
            <div className="popup1_center_button">
              <div className="name3">
                <h5>Tags</h5>
              </div>
              <div className="name3_detail">
                <div className="name3buttons">
                  <button className="name3_btn1">Tag1</button>
                  <button className="name3_btn2">
                    <i className="fa-solid fa-plus" />
                    Add Tag
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="today_popup_end">
            <div className="popup_end-heading">
              <h2>SubTasks</h2>
            </div>
            <div className="subtask1">
              <div className="sub1">
                <i className="fa-solid fa-plus" />
                <p>Add New SubTask</p>
              </div>
              <div className="sub2">
                <input
                  type="color"
                  className="color_pick"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                <div className="check_sub2">
                  <p>SubTask</p>
                </div>
              </div>
            </div>
          </div>

          <div className="popup_end_button">
            <div className="popup_end_buttons">
              <div className="pop1up">
                <button>Delete Task </button>
              </div>
              <div className="pop2up">
                <button onClick={handleSaveChanges}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
