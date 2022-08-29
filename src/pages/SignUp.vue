<template>
  <div style="text-align: center">
    <img src="../assets/todologo.png" />
    <form @submit="onSubmit" @reset="onReset">
      <div class="form-group">
        <label for="input-1">Email :</label>
        <input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        />
        <h6 style="color: red">{{ this.err != "" ? this.err : "" }}</h6>
      </div>

      <div class="form-group">
        <label for="input-2">Name :</label>
        <input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        />
        <h6 style="color: red">{{ this.err != "" ? this.err : "" }}</h6>
      </div>

      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 500px;
          margin-left: 225px;
        "
      >
        <button type="submit" class="pr-10 btn btn-primary">Sign Up</button>

        <button type="button" class="pr-10 btn btn-primary m-10">Reset</button>
      </div>
    </form>
  </div>
</template>
  
  <script lang="ts">
import router from "@/router";
import { objectProperty } from "@babel/types";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignUp",
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    async onSubmit(event: SubmitEvent) {
      event.preventDefault();
      try {
        const result = await axios.get("http://localhost:3000/users");
        console.log(result.data);
        result.data.forEach((element: any, index: number) => {
          if (element.email == this.form.email) {
            console.log("This user is already exist");
            throw Error("This user is already exist");
          } else {
            axios.post("http://localhost:3000/users", this.form);
            router.push("/");
            throw Error("Sign Up Succesfully");
          }
        });
      } catch (e: any) {
        alert(e.message);
      }

      // alert(JSON.stringify(this.form))
    },
    onReset(event: SubmitEvent) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
    },
  },
});
</script>
  <style>
</style>