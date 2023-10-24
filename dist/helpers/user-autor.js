"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserAutor = void 0;
const post_1 = __importDefault(require("../model/post"));
const comment_1 = __importDefault(require("../model/comment"));
const dicErrors_1 = __importDefault(require("../errors/dicErrors"));
const isUserAutor = (collection) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const user = req.user;
        let model;
        // const models = {
        //     post: Post,
        //     comment: Comment
        // }
        if (collection === 'post') {
            model = yield post_1.default.findById(id);
        }
        else if (collection === 'comment') {
            model = yield comment_1.default.findById(id);
        }
        if ((model === null || model === void 0 ? void 0 : model.user_id) !== user.id)
            return res.status(401).json({ msg: dicErrors_1.default.USER_UNAUTHORIZED });
        next();
    });
};
exports.isUserAutor = isUserAutor;
//# sourceMappingURL=user-autor.js.map