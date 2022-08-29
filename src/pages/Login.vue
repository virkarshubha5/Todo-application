<template>
  <div style="text-align: center">
    <img src="../assets/todologo.png" />

    <form @submit="onSubmit">
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
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 500px;
          margin-left: 225px;
        "
      >
        <button type="submit" class="pr-10 btn btn-primary">Login</button>

        <button
          type="button"
          class="pr-10 btn btn-primary m-10"
          @click="onSignUp"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import axios from "axios";
import { defineComponent, ObjectHTMLAttributes } from "vue";

export default defineComponent({
  name: "SignUp",
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
      err: "",
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
            router.push("/todo");
            localStorage.setItem("user", JSON.stringify(element));
            localStorage.setItem("email", this.form.email);
          } else {
            this.err = "Invalid user";
          }
        });
      } catch (e: any) {
        alert(e.message);
      }
    },
    onSignUp(event: SubmitEvent) {
      event.preventDefault();
      // Reset our form values
      router.push("/signup");
    },
  },
});
</script>
<style>
</style>