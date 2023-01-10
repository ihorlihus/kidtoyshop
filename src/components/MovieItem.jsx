export const MovieItem = ({ poster_path, title }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="240"
      />
      <p>{title}</p>
    </>
  );
};
