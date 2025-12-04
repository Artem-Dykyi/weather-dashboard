import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import s from "../styles/Pets.module.scss";
import c from "../styles/Container.module.scss";

const API_KEY = "49720943-65d54ece17a872b9e08aac171";
//https://pixabay.com/api/?key=49720943-65d54ece17a872b9e08aac171&q=yellow+flowers&image_type=photo

export function Pets() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: API_KEY,
          q: "pets",
          image_type: "photo",
          per_page: 4,
          page: page,
        },
      });

      const newItems = response.data.hits.map((img) => ({
        id: img.id,
        url: img.webformatURL,
      }));

      // додаємо нові картинки до вже існуючих
      setItems((prev) => {
        const ids = new Set(prev.map((i) => i.id));
        const filtered = newItems.filter((img) => !ids.has(img.id));
        return [...prev, ...filtered];
      });
    }

    fetchImages();
  }, [page]);

  return (<>
    <div className={c.container}>
      <div className={s.pet}>
        <h2 className={s.pet__title}>Interacting with our pets</h2>
        <ul className={s.pet__gallery}>
          {items.map((item, index) => (
            <li key={index} className={s.pet__gallery_item}>
              <img
                className={s.pet__gallery_photo}
                src={item.url}
                alt={item.caption}
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={s.pet__btn}
          onClick={() => setPage((prev) => prev + 1)}
        >
          See more
        </button>
      </div>
    </div>
    </>
  );
}
