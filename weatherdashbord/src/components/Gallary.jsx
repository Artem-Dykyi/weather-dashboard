import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import s from "../styles/Gallary.module.scss";
import c from "../styles/Container.module.scss";

const API_KEY = "49720943-65d54ece17a872b9e08aac171";

export function Gallary() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  // const [active, setActive] = useState(2);
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

  const next = () => {
  setActive(prev => {
    const nextIndex = prev + 1;

    // якщо доходиш до передостаньої — підвантажуємо
    if (nextIndex >= items.length - 2) {
      setPage(p => p + 1);
    }

    return nextIndex;
  });
};

const prev = () => {
  setActive(prev => (prev === 0 ? prev : prev - 1));
};

  const ClassItem = (i) => {
  const diff = i - active;

  if (diff === 0) return s.gallery__big;

  if (diff === 1) return s.gallery__mediumRight;
  if (diff === 2) return s.gallery__smallRight;

  if (diff === -1) return s.gallery__mediumLeft;
  if (diff === -2) return s.gallery__smallLeft;

  return s.hidden;
};

  return (
    <>
      <div className={c.container}>
        <div className={s.gallery}>
          <h2 className={s.gallery__title}>Beautiful nature</h2>
          <button className={s.btnLeft} onClick={prev}>‹</button>
          <button className={s.btnRight} onClick={next}>›</button>
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
