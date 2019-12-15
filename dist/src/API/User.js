var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const expressModule = require('express');
const User = require('../DB/User');
const route = expressModule.Router();
route.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { firstName, lastName } = req.body;
    let userModel = new User({ firstName, lastName });
    yield userModel.save();
    res.json(userModel);
}));
route.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    User.find({}).then(users => {
        res.json(users);
    }).catch(err => {
        res.status(400).json(`Error: ${err}`);
    });
}));
route.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    })
        .catch(err => {
        res.status(400).json(`Error: ${err}`);
    });
}));
route.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    User.findByIdAndDelete(req.params.id).then(user => {
        res.json(`Successfully deleted item`);
    }).catch(err => {
        res.status(500).json(`Error: ${err}`);
    });
}));
route.post('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    User.findById(req.params.id).then(user => {
        let { firstName, lastName } = req.body;
        console.log(user);
        user.firstName = firstName;
        user.lastName = lastName;
        user.save()
            .then(() => {
            res.json('User details updated');
        }).catch(err => {
            res.status(400).json(`Error: ${err}`);
        });
        res.json(`Successfully updated the item`);
    }).catch(err => {
        res.status(500).json(`Error: ${err}`);
    });
}));
module.exports = route;
