'use strict';

const mongoose = require('mongoose'),
  Store = mongoose.model('Stores');

exports.index = (req,res) => res.render('index.html');

exports.test = function(req, res) {
  res.render('index.html');
};

//모든 store의 list 출력
exports.list_all_stores = function(req, res) {
  Store.find({}, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};

//store 생성
exports.create_store = function(req, res) {
  var new_store = new Store({name:"song"}); // todo: 어떻게 생성되는지?
  new_store.save(function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};

//store 하나의 정보를 읽기
exports.read_store = function(req, res) {
  Store.findById(req.params.storeId, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};

//store 수정
exports.update_store = function(req, res) {
  Store.findOneAndUpdate({_id: req.params.storeId}, req.body, {new: true}, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};

//store 삭제
exports.delete_store = function(req, res) {
  Store.remove({
    _id: req.params.storeId
  }, function(err, store) {
    if (err)
      res.send(err);
    res.json({ message: 'Store successfully deleted' });
  });
};
