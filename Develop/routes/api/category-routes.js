const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product, { model: Product }],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product, {model: Product}],
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(404).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((data) => {
    res.status(200).json(data)
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id,
    },
  })
  .then((data) => res.json(data))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value


});

module.exports = router;
