window.addEventListener("load", () => {
  new Vue({
    el: "#wrapper",
    data: {
      pageConfig: {
        showFooter: false,
      },
      todoData: [],
      reactiveValue: "Deneme",
    },
    methods: {
      showAlert(name) {
        var item = this.todoData.find((x) => x.name == name);
        item.independent = !item.independent;
      },
      removeTodo(name) {
        var filtered = this.todoData.filter((x) => x.name !== name);
        this.todoData = filtered;
        console.log(this.todoData);
      },
    },
    created() {
      fetch("https://restcountries.com/v2/all")
        .then((res) => {
          return res.json();
        })
        .then((jsonResponse) => {
          this.todoData = jsonResponse;
          console.log(jsonResponse);
        });
    },
  });
});
