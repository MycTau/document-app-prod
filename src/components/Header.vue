<template>
    <header id="header" class="ui-header">

        <div class="navbar-header">
            <!--logo start-->
            <a href="index.html" class="navbar-brand">
                <span class="logo"><img src="./../assets/images/logo-dark.png" alt=""/></span>
                <span class="logo-compact"><img src="./../assets/images/logo-icon-dark.png" alt=""/></span>
            </a>
            <!--logo end-->
        </div>

        <div class="search-dropdown dropdown pull-right visible-xs">
            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-search"></i></button>
            <div class="dropdown-menu">
                <form action="">
                    <input class="form-control" placeholder="Search here..." type="text">
                </form>
            </div>
        </div>

    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .ui-header {
        background: lightcyan;
    }
</style>