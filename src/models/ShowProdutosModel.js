import Model from "./Model";

export default class Produtos extends Model {
    resource() {
        return "stock/byPiece";
    }
}