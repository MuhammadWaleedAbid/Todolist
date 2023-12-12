/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Init
import React, { useState } from 'react';
import moment from 'moment';
import Popup from './popup/Popup';
import { Store } from '../StoreContext';

// Component
export default function Work() {
  const { savedData } = Store();
  // eslint-disable-next-line no-console
  console.log('Store', savedData);
  const { handleSaveChanges } = Store();
  // const updateStore = UpdateStore();
  const [task, setTask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  // eslint-disable-next-line no-console
  console.log('edit', editIndex);
  const handleMenu = () => {
    setEditIndex(null);
    setTask(!task);
  };
  // const filterBefore = (savedData) => {
  const filterBefore = () => {
    // eslint-disable-next-line no-console
    console.log('savedata', savedData);
    const filterArray = savedData?.filter((item) => {
      const itemDate = moment(item.date, 'yyyy MM DD');
      // eslint-disable-next-line no-console
      console.log('item data', itemDate);
      const today = moment();
      // eslint-disable-next-line no-console
      console.log('today', today);
      return itemDate.isBefore(today);
    });
    // eslint-disable-next-line no-console
    console.log('filterArray', filterArray);
    return filterArray;
  };
  return (
    <>
      <div className="upcome">
        <div className="upcome_inner">
          <div className="upcome_inner_top">
            <h1>Work</h1>
            <div className="upcomenum_box">
              <span>{savedData.length}</span>
            </div>
          </div>
          <div className="upcome_boxes1">
            <div className="upcome_boxes1_heading">
              <h3>Today</h3>
            </div>
            <div className="upcome_task">
              <div className="upcometask_detail">
                <div className="upcometask_icon">
                  <i className="fa-solid fa-plus" onClick={handleMenu} />
                </div>
                <p>Add New Task</p>
              </div>
            </div>
            <div className="upcome_box_part">
              {filterBefore(savedData)?.map((item, index) => (
                <div className="upcome_box3" key={index}>
                  <div className="upcome_box3_part">
                    <div className="upcome_box3_first">
                      <input type="checkbox" className="checkbox" />
                      <div className="upcome_box3_text">
                        <p>{item?.text}</p>
                      </div>
                    </div>
                    <div className="upcome_box_icon">
                      <i className="fa-solid fa-angle-right" />
                    </div>
                  </div>
                  <div className="upcome_box3_details">
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
                      <div className="persnlbox" />
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
      </div>
      {task && (
        <Popup
          task={[...savedData]}
          editIndex={editIndex}
          setTask={setTask}
          onSaveChanges={(formData) => handleSaveChanges(formData, editIndex)}
          initialFormData={editIndex !== null ? { taskName: savedData[editIndex]?.text } : null}
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
