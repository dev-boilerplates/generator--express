export default {
    id: null,
    data: null,
    hasStorage: function() {
        return (this.data != null)
    },
    init: function(id) {
        this.id = id
        let store = localStorage.getItem(id)
        if(store) this.data = JSON.parse(store)
    },
    retrieve: function() {
        return this.data
    },
    sync: function(data) {
        localStorage.setItem(this.id, JSON.stringify(data))
    }
}