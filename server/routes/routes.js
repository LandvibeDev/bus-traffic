'use strict';
module.exports = function(app) {
  const store = require('../controllers/storeController');

  // Routes
    app.route('/')
        .get(store.index);

    app.route('/stores')
        .get(store.list_all_stores)
        .post(store.create_store);

    app.route('/stores/:storeId')
        .get(store.read_store)
        .put(store.update_store)
        .delete(store.delete_store);
};