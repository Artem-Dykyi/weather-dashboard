import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import s from "../styles/Gallary.module.scss";
import c from "../styles/Container.module.scss";

const API_KEY = "49720943-65d54ece17a872b9e08aac171";

export function Gallary() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(2);

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: API_KEY,
          q: "nature",
          image_type: "photo",
          per_page: 5,
          page: page,
        },
      });

      const newItems = response.data.hits.map((img) => ({
        id: img.id,
        url: img.webformatURL,
      }));

      setItems((prev) => {
        const ids = new Set(prev.map((i) => i.id));
        const filtered = newItems.filter((img) => !ids.has(img.id));
        return [...prev, ...filtered];
      });
    }

    fetchImages();
  }, [page]);

  const ClassItem =(i)=>{
    const total = items.length

    const center = active;
    const right1 = (active + 1) % total;           
    const right2 = (active + 2) % total;           

    const left1 = (active - 1 + total) % total;    
    const left2 = (active - 2 + total) % total;    

    if (i === center) return s.gallery__big;
    if (i === right1) return s.gallery__mediumRight;
    if (i === right2) return s.gallery__smallRight;

    if (i === left1) return s.gallery__mediumLeft;
    if (i === left2) return s.gallery__smallLeft;

    return s.hidden;
  }

  return (
    <>
      <div className={c.container}>
        <div className={s.gallery}>
          <h2 className={s.gallery__title}>Beautiful nature</h2>
          <div className={s.gallery__carousel}>
            {items.map((item, i) => (
              <img key={item.id} src={item.url} alt="" className={ClassItem(i)} />
            ))}
          </div>
          {/* <button className={s.btnLeft} >‹</button>
          <button className={s.btnRight}>›</button> */}
        </div>
      </div>
    </>
  );
}
