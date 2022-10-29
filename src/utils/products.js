

import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

// const buyerMock = {
//   name: 'Dua Lipa',
//   phone: '1213142421',
//   email: 'dualipa@gmail.com'
// }


export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  
  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(list);
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))
  return getDocs(collectionQuery)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};


// export const getAllProducts = () => {
//     const promise = new Promise((resolve) => {
//       setTimeout(() => {
//         return resolve(products);
//       }, 2000)
//     })
  
//     return promise
//   };
  
//   export const getProduct = (id) => {
//     const promise = new Promise((resolve) => {
//       const result = products.find((product) => product.id === parseInt(id))
//       setTimeout(() => {
//         return resolve(result);
//       }, 2000)
//     })
  
//     return promise
//   };
  
//   export const getProductsByCategory = (categoryId) => {
//     const promise = new Promise((resolve) => {
//       const results = products.filter((product) => product.category === categoryId);
//       setTimeout(() => {
//         return resolve(results);
//       }, 2000)
//     })
  
//     return promise
//   };