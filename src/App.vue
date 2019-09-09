<template>
  <div id="ui" class="ui">

    <!--header start-->
        <Header/>
    <!--header end-->

    <!--sidebar start-->
        <Sidebar/>
    <!--sidebar end-->

    <!--main content start-->
        <Body/>
    <!--main content end-->

    <!--footer start-->
    <div id="footer" class="ui-footer">
      2017 &copy; Bootkit by ThemeBucket.
    </div>
    <!--footer end-->

  </div>
</template>

<script>
  import Header from './components/Header'
  import Sidebar from './components/Sidebar'
  import Body from './components/Body'
  export default {
    name: 'App',
    components: {Header,Sidebar,Body}
  }


</script>
