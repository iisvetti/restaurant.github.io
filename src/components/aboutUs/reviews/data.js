import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Jane',
    rating: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
      <FaStar key={5} />,
    ],
    image:
      'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    text: 'This restaurant stands out for its delicious Indian dishes, which are prepared in an authentic and tasty way. In addition, the friendly atmosphere and service make me always happy to come back here.',
  },
  {
    id: 2,
    name: 'Daniel',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'When I want to eat something tasty and nutritious, I always choose this restaurant. A menu offers a wide range of vegetarian dishes made with f I recommend it to anyone who appreciates healthy food.',
  },
  {
    id: 3,
    name: 'Bella',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'I love this restaurant for its unique atmosphere. It feels like a real tea house, and the drinks are very tasty. I highly recommend it to lovers of matcha tea and relaxing atmosphere..',
  },
  {
    id: 4,
    name: 'James',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.2.1682525672.1678217274&semt=sph',
    text: 'This restaurant is a real paradise for meat lovers. Their meat dishes are delicious and made from the highest quality ingredients. In addition, the service is very professional and attentive to every detail. ',
  },
  {
    id: 5,
    name: 'Helen',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'This is my favourite place for breakfast. The latte with cookies are delicious and fresh,  aromatic and hot. In addition, the interior design allows you to instantly relax and unwind. ',
  },
  {
    id: 6,
    name: 'Nicolas',
    rating: [<FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'This restaurant serves some of the best Japaneese tea I have ever tasted. The ingredients are fresh and flavourful. Plus, the prices are very reasonable and the service is friendly and helpful.',
  },
];

export default reviews;
