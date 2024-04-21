export default function ProductPictures({ path }) {
  return (
    <div>
      <img
        src={`${process.env.REACT_APP_SERVER_URL}/uploads/${path.image_path}`}
        height={400}
        width={400}
        alt={path.image_path}
      />
      {/* {pictures.map((pic) => (
        <img src="" />
      ))} */}
    </div>
  );
}
