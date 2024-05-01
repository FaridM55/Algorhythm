const InfoCard = ({ title, description }) => {
  return (
    <div className='col-md-4 mt-3'>
      <div className='card info-card'>
        <h2>{title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
};

export default InfoCard;
