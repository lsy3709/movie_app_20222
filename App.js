import { render } from '@testing-library/react';
import React from 'react';

function Food({ name, picture }) {
  console.log({ name, picture });
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://post-phinf.pstatic.net/MjAyMDA0MTZfMjY3/MDAxNTg2OTk5MzYwOTMw.YZk3XJCkJqOrZmSzXTGfnXcfoj5CoLQfY9kEBhBmlyYg.WdEgjt1SmPLlCfi8nmVMB79FymTDi3ApEfQJrGF57Acg.JPEG/1.jpg?type=w1200',
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EA%25B9%2580%25EB%25B0%25A5&psig=AOvVaw2rQ1Fdx3W9VSmP8MIxZMF2&ust=1664950960401000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDp1ub3xfoCFQAAAAAdAAAAABAD',
  }
];


function App() {

  return (
    <div>
      <div>Hello React</div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
