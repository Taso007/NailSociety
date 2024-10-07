import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import {db} from '../../firebaseConfig';

const useChange = (item) => { 
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, item),      
      orderBy('createdAt', 'desc')
    );
  
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsArray);
    });

    return () => unsubscribe();
  }, [item]); 

  return items;
};

export default useChange;
