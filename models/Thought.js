const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//const dateFormat = require('../utils/dateFormat');
const thoughtSchema = new Schema(
  {
    thoughttext: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,

    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    
    reactions: [ reactionSchema ],
      
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

