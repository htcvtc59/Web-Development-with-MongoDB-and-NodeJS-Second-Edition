var sidebar = require('../helpers/sidebar'),
    ImageModel = require('../models').Image;


module.exports = {
    index: function (req, res) {
        //res.render('index', viewModel);
        var viewModel = { images: [] };
        ImageModel.find({}, null, { sort: { 'timestamp': -1 } },
            function (err, images) {
                if (err) { throw err; }
                viewModel.images = images;
                sidebar(viewModel, function (viewModel) {
                    res.render('index', viewModel);
                });
            });
    }
};