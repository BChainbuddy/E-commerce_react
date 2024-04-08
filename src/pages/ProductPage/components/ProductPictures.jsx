export default function ProductPictures({ pictures }) {
  return (
    <div>
      <img src={pictures[0]} />
      {/* {pictures.map((pic) => (
        <img src="" />
      ))} */}
    </div>
  );
}
