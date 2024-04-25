import Tags from './Tags';

const MyCard = ({ image, name, description, color }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Tags text="Adopt Me!" color={color} />
      </div>
    </div>
  );
};

export default MyCard;
