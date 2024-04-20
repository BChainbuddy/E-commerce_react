export default function ProductPictures({ path }) {
  console.log(path);
  return (
    <div>
      <img
        src={`http://localhost:8001/uploads/${path.image_path}`}
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
