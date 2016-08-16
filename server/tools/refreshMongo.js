import mongoose from 'mongoose';
import rawData from './fixture/raw-data';
import Menus from '../models/Menus';


const modelsMap = {
  Menus
};

let docs = Object.keys(rawData);

mongoose.connect('mongodb://localhost/todos');

Object.keys(rawData).forEach(v => {
  modelsMap[v].remove(()=> {
    modelsMap[v].create(rawData[v], ()=> {
      docs = docs.filter(doc => doc !== v);
      console.log(`The data of ${v} created`);// eslint-disable-line no-console
      if (docs.length === 0) {
        console.log('All data refreshed');// eslint-disable-line no-console
        process.exit(0);
      }
    });
  });
});

