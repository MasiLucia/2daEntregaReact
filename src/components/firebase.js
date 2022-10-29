import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";


export const getProductById = (id) => {
  const db = getFirestore();
  const itemId = doc(db, "items", id);
  return getDoc(itemId);
};

// Funcion para guardar los productos que traigo de FakeStoreApi
// Recibe los datos de la api
// Guarda en una nueva coleccion 'items' en firestore
export const setAllProducts = async (data) => {
  const db = getFirestore();
  const ref = await getDocs(collection(db, "items"));
  if (typeof ref === "undefined") {
    addDoc(collection(db, "items"), {
      title: data.title,
      category: data.category,
      price: data.price,
      description: data.description,
      image: data.image,
      stock: 50,
    });
  }
};

// Funcion para crear las ordenes
// Recibe un objeto con el comprador, el producto, la fecha, estado y total
// Guarda en una nueva coleccion 'orders' en firestore
// Devuelve el id de la orden
export const setOrder = async (buyer, cart, total) => {
  const db = getFirestore();
  let order = {
    buyer: {
      name: buyer.name,
      email: buyer.email,
      phone: buyer.phone,
    },
    total: total(),
    date: serverTimestamp(),
    items: [...cart],
  };
  const resolve = await addDoc(collection(db, "orders"), order);
  return resolve.id;
};


// Funcion que trae mis ordenes de firestore
export const getAllOrders = () => {
  const db = getFirestore();
  const orderCollecition = collection(db, "orders");
  return getDocs(orderCollecition);
};
