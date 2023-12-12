/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
// Init
import React, { useState } from 'react';
import moment from 'moment';
import Popup from './popup/Popup';
import { Store, UpdateStore } from '../StoreContext';

// Component
export default function Upcome() {
  const { savedData } = Store();
  const { handleSaveChanges } = Store();
  console.log('Store', savedData);
  // eslint-disable-next-line no-unused-vars
  const updateStore = UpdateStore();
  const [task, setTask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  console.log('edit', editIndex);
  const handleMenu = () => {
    setEditIndex(null);
    setTask(!task);
  };

  // eslint-disable-next-line no-shadow
  const filterAfter = (savedData) => {
    console.log('savedata', savedData);
    const filterArray = savedData?.filter((item) => {
      const itemDate = moment(item.date, 'yyyy MM DD');
      console.log('item data', itemDate);
      const today = moment();
      console.log('today', today);
      return itemDate.isAfter(today);
    });
    console.log('filterArray', filterArray);
    return filterArray;
  };

  return (
    <>
      <div className="upcome">
        <div className="upcome_inner">
          <div className="upcome_inner_top">
            <h1>Upcoming</h1>
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
              {filterAfter(savedData)?.map((item, index) => (
                <div className="upcome_box3" key={index}>
                  <div className="upcome_box3_part">
                    <div className="upcome_box3_first">
                      <input type="checkbox" className="checkbox" />
                      <div className="upcome_box3_text">
                        <p>{item?.text}</p>
                      </div>
                    </div>

                    <div className="Check_box_icon">
                      <i className="fa-solid fa-trash" onClick={() => handleDelete(index)} />
                      <i className="fa-solid fa-pencil" onClick={() => handleEdit(index)} />
                      <i className="fa-solid fa-angle-down" onClick={() => handleClick(index)} />
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
          <div className="upcome_boxes2">
            <div className="upcome_box2_box1">
              <div className="upcome_sub1">
                <div className="upcome_sub1_headeing">
                  <h2>Tommorow</h2>
                </div>
                <div className="upcome_sub2_task">
                  <div className="sub2task_icon">
                    <i className="fa-solid fa-plus" />
                  </div>
                  <p>Add New Task</p>
                </div>
                <div className="sub1_box1">
                  <div className="sub1_box1_first">
                    <input type="checkbox" className="checkbox" />
                    <div className="sub1_box1_text">
                      <p>Reasearch Content Ideas</p>
                    </div>
                  </div>

                  <i className="fa-solid fa-angle-right" />
                </div>
              </div>
            </div>
            <div className="upcome_box2_box2">
              <div className="upcome_sub2">
                <div className="upcome_sub2_headeing">
                  <h2>This Week</h2>
                </div>
                <div className="upcome_sub2_task">
                  <div className="sub2task_icon">
                    <i className="fa-solid fa-plus" />
                  </div>
                  <p>Add New Task</p>
                </div>
                <div className="sub2_box2">
                  <div className="sub2_box2_first">
                    <input type="checkbox" className="checkbox" />
                    <div className="sub2_box2_text">
                      <p>Reasearch Content Ideas</p>
                    </div>
                  </div>

                  <i className="fa-solid fa-angle-right" />
                </div>
              </div>
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
