<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <img src="../assets/todologo.png" />

    <div class="navbar-nav mr-auto">
      <li>
        <a @click="logOut" class="btn btn-primary">logout</a>
      </li>
    </div>
  </nav>
  <button type="button" @click="addTask" class="btn btn-primary">Add</button>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Sr.No</th>
        <th scope="col">Name</th>
        <th scope="col">Priority</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in Task" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ task.name }}</td>
        <td>{{ task.priority }}</td>
        <td>{{ task.status }}</td>
        <td>
          <button type="button" @click="onEditClick(index)">Edit</button>
          <button type="button" @click="onRemoveClick(index)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
  
  <script lang="ts">
import router from "@/router";

import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoHome",

  data() {
    return {
      Task: [],
    };
  },
  methods: {
    onEditClick(index: string) {
      localStorage.setItem("index", index);
      router.push("/update");
    },
    addTask() {
      router.push("/add");
    },
    logOut() {
      router.push("/");
      localStorage.removeItem("email");
    },

    onRemoveClick(index: any) {
      const user: any = localStorage.getItem("user");
      const parsedUser: any = JSON.parse(user);
      parsedUser.task.splice(index, 1);
      this.Task = parsedUser.task;
      axios.put(`http://localhost:3000/users/${parsedUser.id}`, parsedUser);
      localStorage.setItem("user", JSON.stringify(parsedUser));
    },
  },
  mounted() {
    let user: any = "";
    let parsedUser: any = {};
    user = localStorage.getItem("user");
    parsedUser = JSON.parse(user);
    this.Task = parsedUser.task;
    //console.log(this.Task[0]);
  },
});
</script>
  <style>
</style>