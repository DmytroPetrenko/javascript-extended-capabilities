import { openDB } from 'idb';

document.addEventListener("DOMContentLoaded", (e) => {
  if (!window.indexedDB) {
    console.log("This browser does not support IndexedDB");
  }

  const dbPromise = openDB('StudentsDB', 1, {
    upgrade(db) {
      const Students = db.createObjectStore('Students', {
          keyPath: "e-mail",
      });
    },
  });
  
  const idbStudents = {
    async get(key) {
      return (await dbPromise).get('Students', key);
    },
    async set(key, val) {
      return (await dbPromise).put('Students', val, key);
    },
    async delete(key) {
      return (await dbPromise).delete('Students', key);
    },
    async clear() {
      return (await dbPromise).clear('Students');
    },
    async keys() {
      return (await dbPromise).getAllKeys('Students');
    },
  };

  Students.createIndex("Phone", "phone", {
    unique: true,
  });

  Student.createIndex("Surname", "surname", {
    unique: false,
  });

  Student.createIndex("Name", "name", {
    unique: false,
  });

  let Notes = db.createObjectStore("Notes", {
    keyPath: "id",
  });










//   const db = openDB("StudentsDB", 1, {
//     upgrade(db, oldVersion, newVersion, transaction) {
//         var Students = db.createObjectStore("Students collection", {
//             keyPath: "email"
//           });
      
//           Students.createIndex("Phone", "phone", {
//             unique: true,
//           });
      
//           Student.createIndex("Surname", "surname", {
//             unique: false,
//           });
      
//           Student.createIndex("Name", "name", {
//             unique: false,
//           });
      
//           let Notes = db.createObjectStore("Notes collection", {
//             keyPath: "id",
//           });
//     },
// });

//   var DB = idb.openDB("StudentsDB", 1, (upgrade) => {
//     var Students = upgrade.createObjectStore("Students collection", {
//       keyPath: "email"
//     });

//     Students.createIndex("Phone", "phone", {
//       unique: true,
//     });

//     Student.createIndex("Surname", "surname", {
//       unique: false,
//     });

//     Student.createIndex("Name", "name", {
//       unique: false,
//     });

//     let Notes = upgradeDB.createObjectStore("Notes collection", {
//       keyPath: "id",
//     });
//   })



//   DB.then((db) => {
//     let transaction = db.transaction("Students collection", "readwrite");
//     let store = transaction.objectStore("Students collection");
//     var student = {
//       surname: "fds",
//       name: "dasd",
//       email: "email@gmail.com",
//       phone: "0564666",
//       dueDate: "17.09.2020",
//     };
//     store.add(student);
//   })
    // .then((e) => {
    //   console.log("success", e);
    // })
    // .catch((e) => console.error("error", e));

  //   let btnAddNewStudent = document.querySelector("#addNewStudent");

  //   btnAddNewStudent.onclick = () => {
  //     let transaction = DB.transaction("Students collection", "readwrite");
  //     let store = transaction.objectStore("Students collection");
  //     var student = {
  //       surname: "fds",
  //       name: "dasd",
  //       email: "email@gmail.com",
  //       phone: "0564666",
  //       dueDate: "17.09.2020",
  //     };
  //     store.add(student);
  //   };
});
