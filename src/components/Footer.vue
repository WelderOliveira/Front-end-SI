<template>
  <div class="d-flex flex-column min-vh-100">
    <footer id="footer" class="mt-auto">
      <p>Sistemas da Informação &copy; 2023</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterHome"
}
</script>

<style>
 #footer{
   background-color: black;
   color: aqua;
   display: flex;
   position: relative;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 150px;
   clear:both;
   padding-top:20px;
 }
</style>