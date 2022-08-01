const usersAPI = {
    users: [
        {
            id: 1,
            name: "Daniel Venegas",
            project: "All"
        },
        {
            id: 2,
            name: "Jose Garfias",
            project: "All"
        },
        {
            id: 3,
            name: "Susana Casasola",
            project: "Kboard"
        },
        {
            id: 4,
            name: "Javier Chaparro",
            project: "Kmetrics"
        },
        {
            id: 5,
            name: "Miguel Avendaño",
            project: "Kmetrics"
        }
    ],
    all: function() {
        return this.users;
    },
    get: function(id) {
        return this.users.find(u => u.id === id);
    }
};

export default usersAPI;
