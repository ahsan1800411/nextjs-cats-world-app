import { cats } from './../../../data';

export default (req, res) => {
  const { id } = req.query;
  const cat = cats.find((cat) => cat.id === Number(id));
  res.status(200).json(cat);
};
