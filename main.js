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
        ],

        newTask: ""
    },

    methods : {
        itsDone: function(index) {
            this.listToDo[index].done === true;
        },

        deleteTask: function (index) {
            this.listToDo.splice(index, 1)
        },

        addTask: function() {
            if (this.newTask.trim() === "") {
                return
            }

            this.listToDo.push({
                text: this.newTask,
                done: false,
            });

            this.newTask = ""
        }
    }

})