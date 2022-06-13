new Vue({
    el: "#app",

    data: {
        listToDo: [
            {
                text: "Pulire camera",
                done: false,
            },
            {
                text: "Appendere staffe",
                done: false,
            },
            {
                text: "Tagliare prato",
                done: false,
            },
        ]
    },

    methods : {
        itsDone: function(index) {
            this.listToDo[index].done === true;
        },
    }

})