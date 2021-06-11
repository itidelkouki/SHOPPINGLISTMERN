const express=require('express');
const router=express.Router();

//Item model
const Item=require('../../models/item');


//@route: GET api/items
//@description: get all items
//@access:

router.get('/',(req,res)=>{
Item.find()
.sort({date: -1})
.then(shoppingitems=> res.json({msg:"data fetched",shoppingitems}))

});



 // @route   POST api/items/addnewitem
 // @desc    Create An Item
 //@access  Private
 
 router.post('/addnewitem',  async (req, res) => {
    const newItem = new Item({
      name: req.body.name
    });
  
    try {
      const item = await newItem.save();
      if (!item) throw Error('Something went wrong saving the item');
  
      res.status(200).json(item);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });



 //@route   DELETE api/items/:id
 //@desc    Delete A Item
 //@access  Private
 

router.delete('/:id',  async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) throw Error('No item found');
  
      const removed = await item.remove();
      if (!removed)
        throw Error('Something went wrong while trying to delete the item');
  
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ msg: e.message, success: false });
    }
  });

  module.exports= router;