/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useContext, useState, createContext } from 'react';

// const storeContext = createContext();
// const storeUpdateContext = createContext();

// export function Store() {
//   return useContext(storeContext);
// }

// export function UpdateStore() {
//   return useContext(storeUpdateContext);
// }

// export function StoreProvider({ children }) {
//   const [store, setStore] = useState({
//     loggedIn: false,
//     user: {},
//     savedData: [
//       {
//         text: 'Create a database of get authors',
//         text3: '',
//         date: 'date',
//         text2: 'list',
//         text1: 'color',
//       },
//     ],
//   });

//   const updateStore = (data) => {
//     setStore((prev) => ({
//       ...prev,
//       ...data,
//     }));
//   };
//   const [editIndex, setEditIndex] = useState(null);

//   const handleSaveChanges = (formData, editIndex) => {
//     if (editIndex !== null) {
//       const updatedData = [...store.savedData];
//       updatedData[editIndex] = {
//         text: formData.taskName,
//         date: formData.dueDateValue,
//         text2: formData.listValue,
//         text1: formData.color,
//         text3: formData.taskDescription,
//       };
//       updateStore({
//         savedData: updatedData,
//       });
//     } else {
//       updateStore({
//         savedData: [
//           ...store.savedData,
//           {
//             text: formData.taskName,
//             date: formData.dueDateValue,
//             text2: formData.listValue,
//             text1: formData.color,
//             text3: formData.taskDescription,
//           },
//         ],
//       });
//     }

//     setTask(false);
//     setEditIndex(null);
//   };

//   return (
//     <storeContext.Provider value={{ ...store, handleSaveChanges }}>
//       <storeUpdateContext.Provider value={updateStore}>{children}</storeUpdateContext.Provider>
//     </storeContext.Provider>
//   );
// }

import React, { useContext, useState, createContext } from 'react';

const storeContext = createContext();
const storeUpdateContext = createContext();

export function Store() {
  return useContext(storeContext);
}

export function UpdateStore() {
  return useContext(storeUpdateContext);
}

export function StoreProvider({ children }) {
  const [store, setStore] = useState({
    loggedIn: false,
    user: {},
    savedData: [
      {
        text: '',
        text3: '',
        date: 'date',
        text2: 'list',
        text1: 'color',
      },
    ],
    task: false,
    editIndex: null,
  });

  const updateStore = (data) => {
    setStore((prev) => ({
      ...prev,
      ...data,
    }));
  };

  // const handleSaveChanges = (formData, editIndex) => {
  //   const { task, editIndex: currentEditIndex } = store;

  //   const updatedData = [...store.savedData];
  //   if (currentEditIndex !== null) {
  //     updatedData[currentEditIndex] = {
  //       text: formData.taskName,
  //       date: formData.dueDateValue,
  //       text2: formData.listValue,
  //       text1: formData.color,
  //       text3: formData.taskDescription,
  //     };
  //     updateStore({
  //       savedData: updatedData,
  //       editIndex: null,
  //     });
  //   } else {
  //     updateStore({
  //       savedData: [
  //         ...store.savedData,
  //         {
  //           text: formData.taskName,
  //           date: formData.dueDateValue,
  //           text2: formData.listValue,
  //           text1: formData.color,
  //           text3: formData.taskDescription,
  //         },
  //       ],
  //       task: false,
  //     });
  //   }
  // };
  const handleSaveChanges = (formData, editIndex) => {
    const updatedData = [...store.savedData];
    if (editIndex !== null) {
      updatedData[editIndex] = {
        text: formData.taskName,
        date: formData.dueDateValue,
        text2: formData.listValue,
        text1: formData.color,
        text3: formData.taskDescription,
      };
      updateStore({
        savedData: updatedData,
        editIndex: null,
      });
    } else {
      updateStore({
        savedData: [
          ...store.savedData,
          {
            text: formData.taskName,
            date: formData.dueDateValue,
            text2: formData.listValue,
            text1: formData.color,
            text3: formData.taskDescription,
          },
        ],
        task: false,
      });
    }
  };

  return (
    <storeContext.Provider value={{ ...store, handleSaveChanges }}>
      <storeUpdateContext.Provider value={updateStore}>{children}</storeUpdateContext.Provider>
    </storeContext.Provider>
  );
}
