import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Config/Config";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productRef = collection(db, "productos");
    // console.log(category);
    const q = category
      ? query(productRef, where("categoria", "==", category))
      : productRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);
  // console.log(productos);
  return (
    <main className="p-3">
      <h1 className="title p-3">{greeting}</h1>
      <ItemList productos={productos} />
    </main>
  );
};

export default ItemListContainer;
