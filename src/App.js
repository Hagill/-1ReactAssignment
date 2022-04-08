import PropTypes from "prop-types";

function Character({name, picture, rating}) {
  return (
  <div>
    <h2> I like {name} </h2>
    <h4> {rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}


const charILike = [
  {
    id: 1,
    name: 'Roland',
    image: 'https://file.namu.moe/file/f4edeffb67f5bc4422a128b8a3dd8dd618204e0ce45a89ee22795c6e6849236b1a990b1afcfb3953a8b44dc4bc99c3ef',
    rating: 5
  },
  {
    id: 2,
    name: 'Angelica',
    image: 'https://w.namu.la/s/22c61e8f1c1e199e5ca556d84a06bf27f39a4e9387560e644bb4f789c5323c6132cfe5b169798db7c4d80aad77d50bf4fc23e6180c71bd4f9d0bb754732fca676af6fec3eb3f2ff94b00fa2124898a0bfa46608af39e838844a8c097705f6af766baed7804b331c3726e4ef29a7e2db9',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Argalia',
    image: 'https://ww.namu.la/s/927c4096ede6d08e2fa27b1587682e1ec18cb6780777ecaf0100ccc4db3d3a2445f008023f213b130422336f32064a8307f5adb79cc717bde57596ad8951de186e0780f039def43c3c0ae3e7211908ea3e1ae0846e83ca5685a4e9a62f860b8d',
    rating: 4.6
  },
  {
    id: 4,
    name: 'Xiao',
    image: 'https://w.namu.la/s/a3d3683c49d63b19aae9ef48eb0c84336065e191a85799f1405d832ea6593f7474d3c6cf9efd098e72ef3bb3a50769336cdf96b0506ac566d29dbc5c5debc123a08ac97a157e5ccfe0148b221bf62871d88917f5a529598f016c65b826dab83a4e81693767f52d31a5fbbe4258338e99',
    rating: 4.4
  },
  {
    id: 5,
    name: 'Yesod',
    image: 'https://w.namu.la/s/feff96864af546cd2ac3d8d02ab9299f425b4d1ba2cbe184de217b6ad1d43f1b5c0096a4d22450c78806db5210d0e5aaa6d1476dcc58bdc647f8ea548e4ff17924387b914d9361148d5cff57b5f9b749fcef197dc9a0a2f12827648324e5c34e10051fa27fc87ead5df5838f9c9db998',
    rating: 4.7
  }
];

function App() {
  return (
  <div>
    {charILike.map(LOR => <Character key={LOR.id} name={LOR.name} picture={LOR.image} rating={LOR.rating} />)}
  </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
export default App;
