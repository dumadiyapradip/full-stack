import mongoose from 'mongoose'

const orderSchema=new mongoose.Schema({
  orderid:{
    type:Number,
    require:true
  },
  payment:{
    type:String,
    default:"Cash",
    require:true
  },
  orderdate:{
    type:Date,
    default:Date.now(),
    require:true
  },
  deliverydate:{
    type:Date,
  },
  total:{
    type:Number,
    require:true,
  },
  name:{
    type:String,
    require:true,
  },
  pincode:{
    type:Number,
    require:true,
  },
  contact:{
    type:Number,
    require:true,
  },
  locality:{
    type:String,
    require:true,
  },
  address:{
    type:String,
    require:true,
  },
  city:{
    type:String,
    require:true,
  },
  state:{
    type:String,
    require:true,
  },
  orderproduct:{
    type:Array,
    default:[]
  }
})

export default mongoose.model('order',orderSchema);