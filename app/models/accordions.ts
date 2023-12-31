import mongoose from "mongoose";

export interface Accordions extends mongoose.Document {
  _id: string;
  title: string;
  image: string;
  text: string;
}

const accordionsSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
});

export default mongoose.models.accordions ||
  mongoose.model<Accordions>("accordions", accordionsSchema);
