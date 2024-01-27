<template>
  <!-- <a class="text-left" href="/">Homepage</a>
  <br/>
  <br/>
  <a class="d-flex justify-content-between align-items-center" href="/about-us">About Us</a> -->
  <div class="container">
    <div class="mb-2" >
  <router-link class="nav-link" active-class="active" to="/" >
    Homepage
  </router-link>
  <router-link class="nav-link" active-class="active" to="/about-us" >
    About Us
  </router-link>
  <router-link class="nav-link" active-class="active" to="/details">
    Details
  </router-link>
</div>
  <router-view></router-view>  
</div>
</template>


<style>

.nav-link{
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid rgb(194, 161, 117);
  color: rgb(194, 161, 117);
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px !important;

}
.active{
  background-color: rgb(194, 161, 117);
  color: darkcyan;
}

</style>


<script>

</script>