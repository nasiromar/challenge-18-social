const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    reactionid: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId(),
    },

    username: {
      type: String,
      required: true,

    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    
    
      
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

  

module.exports = reactionSchema;

