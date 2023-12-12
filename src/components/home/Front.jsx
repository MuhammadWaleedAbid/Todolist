/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Init
import React, { useState } from 'react';
import moment from 'moment';
import Popup from '../popup/Popup';
import { Store, UpdateStore } from '../../StoreContext';

// Component
export default function Front() {
  const [task, setTask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const { savedData } = Store();
  const updateStore = UpdateStore();
  // console.log('edit', editIndex);
  const handleMenu = () => {
    setEditIndex(null);
    setTask(!task);
  };

  const dumydata = [
    {
      text3: '',
      date: Date.now(),
      text2: '',
      text1: 'color',
    },
  ];
  // const [saveData, setSavedData] = useState(dumydata);
  const [visibleDescriptions, setVisibleDescriptions] = useState(
    Array(dumydata.length).fill(false),
  );
  const handleSaveChanges = (formData) => {
    if (editIndex !== null) {
      const updatedData = [...savedData];
      updatedData[editIndex] = {
        text: formData.taskName,
        date: formData.dueDateValue,
        text2: formData.listValue,
        text1: formData.color,
        text3: formData.taskDescription,
      };
      updateStore({
        savedData: updatedData,
      });
      savedData(updatedData);
    } else {
      updateStore({
        savedData: [
          ...savedData,
          {
            text: formData.taskName,
            date: formData.dueDateValue,
            text2: formData.listValue,
            text1: formData.color,
            text3: formData.taskDescription,
          },
        ],
      });
    }

    setTask(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setTask(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = savedData.filter((_, i) => i !== index);
    updateStore({
      savedData: updatedData,
    });
    // setSavedData(updatedData);
  };

  const handleClick = (index) => {
    const newVisibleDescriptions = [...visibleDescriptions];
    newVisibleDescriptions[index] = !newVisibleDescriptions[index];
    setVisibleDescriptions(newVisibleDescriptions);
  };

  // eslint-disable-next-line no-shadow
  const filterToday = (savedData) => {
    // eslint-disable-next-line no-console
    console.log('savedata', savedData);
    const filterArray = savedData?.filter((item) => {
      const itemDate = moment(item.date, 'yyyy MM DD');
      // eslint-disable-next-line no-console
      console.log('item data', itemDate);
      const today = moment();
      // eslint-disable-next-line no-console
      console.log('todat', today);
      return itemDate.isSame(today, 'day');
    });
    // eslint-disable-next-line no-console
    console.log('filterArray', filterArray);
    return filterArray;
  };

  return (
    <>
      <div className="front">
        <div className="front_inner">
          <div className="Front_inner_top">
            <h1>Today</h1>
            <div className="today_box">
              <span>{savedData?.length}</span>
            </div>
          </div>
          <div className="new_task">
            <div className="newtask_detail">
              <div className="newtask_icon">
                <i className="fa-solid fa-plus" onClick={handleMenu} />
              </div>
              <p>Add New Task</p>
            </div>
          </div>

          <div className="check_box_part">
            {filterToday(savedData)?.map((item, index) => (
              <div className="check_box1" key={index}>
                <div className="check_box1_detail">
                  <div className="check_box1_first">
                    <input type="checkbox" className="checkbox" />
                    <div className="check_box1_text">
                      <p>{item?.text}</p>
                    </div>
                  </div>

                  <div className="Check_box_icon">
                    <i className="fa-solid fa-trash" onClick={() => handleDelete(index)} />
                    <i className="fa-solid fa-pencil" onClick={() => handleEdit(index)} />
                    <i className="fa-solid fa-angle-down" onClick={() => handleClick(index)} />
                  </div>
                </div>
                {visibleDescriptions[index] && (
                  <div className="check_box6_detail">
                    <div className="check_box6_first">
                      <p>{item?.text3}</p>
                    </div>
                  </div>
                )}
                <div className="check_box3_details">
                  <div className="check3_date">
                    <i className="fa-solid fa-calendar-check" />
                    <div className="calender_date">
                      <p>{item?.date}</p>
                    </div>
                  </div>

                  <div className="subtask">
                    <div className="subtaskbox">
                      <span>2</span>
                    </div>
                    <div className="subtask_detail">
                      <p>{item?.text2}</p>
                    </div>
                  </div>

                  <div className="persnl">
                    <div className="persnlbox" style={{ background: item?.text1 }} />

                    <div className="persnl_detail">
                      <p>{item?.text1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {task && (
        <Popup
          task={savedData[editIndex]}
          editIndex={editIndex}
          setTask={setTask}
          onSaveChanges={(formData) => handleSaveChanges(formData, editIndex)}
          initialFormData={
            editIndex !== null
              ? {
                  taskName: savedData[editIndex]?.text,
                  dueDateValue: savedData[editIndex]?.date,
                  listValue: savedData[editIndex]?.text2,
                  color: savedData[editIndex]?.text1,
                  taskDescription: savedData[editIndex]?.text3,
                }
              : null
          }
        />
      )}
      {task && (
        <div
          className="side_bar_background"
          onClick={() => {
            setTask(false);
            setEditIndex(null);
          }}
        />
      )}
    </>
  );
}
