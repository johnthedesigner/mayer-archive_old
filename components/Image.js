const Image = ({
  date_developed,
  envelope_id,
  exposure_number,
  height = 800,
  width = 800
}) => {
  const image_transform = `h_${height},w_${width}`;
  const image_url = `https://res.cloudinary.com/dkpugzzu5/image/upload/${image_transform}/v1590179543/mayer-archive/`;
  const image_filename = `${envelope_id}_${date_developed}_${exposure_number}.jpg`;

  return <img src={`${image_url}${image_filename}`} />;
};

export default Image;
