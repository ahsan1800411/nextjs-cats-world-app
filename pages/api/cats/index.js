import { cats } from './../../../data';

export default (req, res) => {
  res.status(200).json(cats);
};
