<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <img src="../assets/todologo.png" />
    <div class="navbar-nav mr-auto">
      <li>
        <a @click="logOut" class="btn btn-primary">logout</a>
      </li>
    </div>
  </nav>
  <form @submit="onSubmit">
    <div class="form-group">
      <label for="taskName">Name</label>
      <input
        type="text"
        v-model="form.name"
        class="form-control"
        id="taskName"
        placeholder="Enter name of the task"
      />
      <h6 style="color: red">{{ nameError }}</h6>
    </div>
    <div class="form-group">
      <label for="taskPriority">priority</label>
      <input
        type="text"
        v-model="form.priority"
        class="form-control"
        id="taskPriority"
        placeholder="Enter priority of the task"
      />
      <h6 style="color: red">{{ priorityError }}</h6>
    </div>
    <div class="form-group">
      <label for="taskStatus">Status</label>
      <input
        type="text"
        v-model="form.status"
        class="form-control"
        id="taskStatus"
        placeholder="Enter status of the task"
      />
      <h6 style="color: red">{{ statusError }}</h6>
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>
  
  <script lang="ts">
import router from "@/router";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Add",
  data() {
    return {
      email: "",
      nameError: "",
      priorityError: "",
      statusError: "",

      form: { name: "", priority: "", status: "" },
    };
  },
  methods: {
    onSubmit(event: SubmitEvent) {
      event.preventDefault();
      const user: any = localStorage.getItem("user");
      const parsedUser: any = JSON.parse(user);
      if (this.form.name == "") {
        this.nameError = "Please provide name of the task";
      }
      if (this.form.priority == "") {
        this.statusError == "";
        this.nameError == "";

        this.priorityError = "Please provide priority of the task";
      }
      if (this.form.status == "") {
        this.nameError == "";
        this.priorityError == "";

        this.statusError = "Please provide status of the task";
      }

      if (
        this.form.name != "" &&
        this.form.priority != "" &&
        this.form.status != ""
      ) {
        this.nameError = "";
        this.statusError = "";
        this.priorityError = "";
        if (!parsedUser.task) {
          parsedUser.task = [];
        }

        parsedUser.task.push({
          name: this.form.name,
          priority: this.form.priority,
          status: this.form.status,
        });
        axios.put(`http://localhost:3000/users/${parsedUser.id}`, parsedUser);
        localStorage.setItem("user", JSON.stringify(parsedUser));
        router.push("/todo");
      }
    },

    logOut() {
      router.push("/");
      localStorage.removeItem("email");
    },
  },
  mounted() {
    const email: any = localStorage.getItem("email");
    this.email = email;
  },
});
</script>
  <style>
</style>