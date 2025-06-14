class BaseRepository {
    constructor() {
        this.items = new Map();
    }

    getAll() {
        return Array.from(this.items.values());
    }

    getById(id) {
        return this.items.get(id);
    }

    create(item) {
        this.items.set(item.id, item);
        return item;
    }

    update(id, data) {
        const item = this.items.get(id);
        if (!item) return null;
        
        item.update(data);
        return item;
    }

    delete(id) {
        return this.items.delete(id);
    }
}

module.exports = BaseRepository; 