<template>
<br>
<h1>V18 Simple form</h1>
<br>
<ul>
    <li v-for="item in error" v-bind:key="item">{{ item }} not valid</li>
</ul>
<form>
    <label>Email : </label>
    <input type="text" placeholder="Enter Email" v-model="form.email"/>
    <br><br>
    <label>Password : </label>
    <input type="password" placeholder="Enter Password" v-model="form.password" />
    <br><br>
    <select v-model="form.country">
        <option>India</option>
        <option>China</option>
        <option>USA</option>
    </select>

    <br><br>
    <h3>Technology</h3>
    <label>Java : </label>
    <input type="checkbox"  v-model="form.technology" value="java"/>
    <br><br>
    <label>.net : </label>
    <input type="checkbox"  v-model="form.technology"  value=".net"/>
  <br><br>

  <h3>Gender</h3>
    <label>Male : </label>
    <input type="radio"  v-model="form.gender" value="male" name="gender"/>
    <br><br>
    <label>Female : </label>
    <input type="radio"  v-model="form.gender"  value="female" name="gender"/>
  <br><br>

    <button v-on:click="login()" type="button">Submit</button>
</form>
</template>

<script>
export default {
    name: "video18",
    data(){
        return{
            form:{
                email:'',
                password:'',
                country:'',
                technology:[],
                gender:''
            },
            error:[]
        }
    },
    methods:{
        login(){
            this.error=[]
            for(const item in this.form){
                if(this.form[item]===""||this.form[item].length===0){
                    this.error.push(item)
                }
            }
            if(this.error.length==0){
                alert("Data submitted")
            }
            console.log(this.form,this.error)
        }
    }
}
</script>
