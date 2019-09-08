<template>
  <div id="ui" class="ui">

    <!--header start-->
      <Header/>
    <!--header end-->

    <!--sidebar start-->
    <aside id="aside" class="ui-aside">
      <ul class="nav" ui-nav>
        <li>
          <a href="index.html"><i class="fa fa-home"></i><span> Dashboard </span></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href="index.html"><span>Dashboard</span></a></li>
          </ul>
        </li>
        <li class="active">
          <a href="layouts.html"><i class="fa fa-object-group"></i><span>Layouts <small class="label label-success">Special</small></span></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href="layouts.html"><span>Layouts</span></a></li>
          </ul>
        </li>
        <li>
          <a href="mailbox.html"><i class="fa fa-envelope-o"></i><span> Mailbox </span></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href="mailbox.html"><span>Mailbox</span></a></li>
          </ul>
        </li>
        <li>
          <a href="note.html"><i class="fa fa-file-text-o"></i><span> Notes <small class="label label-warning">Apps</small></span></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href="note.html"><span>Notes</span></a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-bar-chart-o"></i><span>Charts</span><i class="fa fa-angle-right pull-right"></i></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href=""><span>Charts</span></a></li>
            <li><a href="chart-high.html"><span>High Charts</span></a></li>
            <li><a href="chart-rickshaw.html"><span>Rickshaw Charts</span></a></li>
            <li><a href="chart-c3.html"><span>C3 Charts</span></a></li>
            <li><a href="chart-nvd3.html"><span>NVD3 Charts</span></a></li>
            <li><a href="chart-flot.html"><span>Flot Charts </span></a></li>
            <li><a href="chart-morris.html"><span>Morris Charts</span></a></li>
            <li><a href="chartjs.html"><span>ChartJs</span></a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-snowflake-o"></i><span>UI Elements</span><i class="fa fa-angle-right pull-right"></i></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href=""><span>UI Elements</span></a></li>
            <li><a href="general.html"><span>General </span></a></li>
            <li><a href="buttons.html"><span>Buttons</span></a></li>
            <li><a href="typography.html"><span>Typography</span></a></li>
            <li><a href="tree.html"><span>Tree</span></a></li>
            <li><a href="nestables.html"><span>Nestables</span></a></li>
            <li><a href="sliders.html"><span>Sliders</span></a></li>
            <li><a href="tabs-accordions.html"><span>Tabs &amp; Accordions</span></a></li>
          </ul>
        </li>
        <li>
          <a href="grids.html"><i class="fa fa-th-large"></i><span>Grid Option</span></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href="grids.html"><span>Grid Option</span></a></li>
          </ul>
        </li>
        <li>
          <a href="font-awesome.html"><i class="fa fa-font-awesome"></i><span>Font Awesome</span></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href="font-awesome.html"><span>Font Awesome</span></a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-bookmark-o"></i><span>Components <small class="label label-danger">3</small> </span> <i class="fa fa-angle-right pull-right"></i></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href=""><span>Components</span></a></li>
            <li><a href="calendar.html"><span>Calendar</span></a></li>
            <li><a href="timeline.html"><span>Timeline</span></a></li>
            <li><a href="panels.html"><span>Panels</span></a></li>
            <li><a href="toastr-notifications.html"><span>Toastr Notifications</span></a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-table"></i><span>Data Tables</span><i class="fa fa-angle-right pull-right"></i></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href=""><span>Data Tables</span></a></li>
            <li><a href="tables.html"><span>Basic Table </span></a></li>
            <li><a href="dynamic-table.html"><span>Dynamic Table</span></a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-list-alt"></i><span>Form</span><i class="fa fa-angle-right pull-right"></i></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href=""><span>Form</span></a></li>
            <li><a href="form-layouts.html"><span>Form Layouts </span></a></li>
            <li><a href="form-advanced.html"><span>Form Advanced</span></a></li>
            <li><a href="form-wizard.html"><span>Form Wizard</span></a></li>
            <li><a href="form-validation.html"><span>Form Validation</span></a></li>
            <li><a href="text-editors.html"><span>Text Editors</span></a></li>
            <li><a href="inline-editors.html"><span>Inline Editors</span></a></li>
            <li><a href="dropzone.html"><span>Dropzone</span></a></li>
            <li><a href="file-upload.html"><span>File Upload</span></a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-television"></i><span>Extra Pages</span><i class="fa fa-angle-right pull-right"></i></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href=""><span>Extra Pages</span></a></li>
            <li><a href="profile.html"><span>Profile</span></a></li>
            <li><a href="invoice.html"><span>Invoice</span></a></li>
            <li><a href="login.html"><span>Login</span></a></li>
            <li><a href="registration.html"><span>Registration</span></a></li>
            <li><a href="forgot-password.html"><span>Forgot Password</span></a></li>
            <li><a href="lock-screen.html"><span>Lock Screen</span></a></li>
            <li><a href="404.html"><span>Error 404</span></a></li>
            <li><a href="500.html"><span>Error 500</span></a></li>
          </ul>
        </li>
        <li>
          <a href=""><i class="fa fa-server"></i><span>Multilevel</span><i class="fa fa-angle-right pull-right"></i></a>
          <ul class="nav nav-sub">
            <li class="nav-sub-header"><a href="#"><span>Multilevel</span></a></li>
            <li><a href="#"><span>Level One </span></a></li>
            <li>
              <!-- <a href=""><span>Level Two </span></a> -->
              <a href="#"><span>Level One </span><i class="fa fa-angle-right pull-right"></i></a>
              <ul class="nav nav-sub">
                <li><a href="#"><span>Level Two </span></a></li>
                <li>
                  <!-- <a href=""><span>Level Two </span></a> -->
                  <a href=""><span>Level Two </span><i class="fa fa-angle-right pull-right"></i></a>
                  <ul class="nav nav-sub">
                    <li><a href="#"><span>Level Three </span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <!--sidebar end-->

    <!--main content start-->
    <div id="content" class="ui-content">
      <div class="ui-content-body">

        <div class="ui-container">
          <h2>{{this.$route.name}}</h2>
          <div class="row">
            <div class="col-md-12">
              <div class="panel">
                <div class="panel-body">
                  <router-view></router-view>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!--right side widget start-->
        <div class="ui-aside-right " ui-aside-right>

          <!--customer start-->
          <div class="aside-widget">
            <h5>Online Customer</h5>
            <ul class="contact-list">
              <li class="online">
                <div class="media">
                  <a href="#" class="pull-left media-thumb">
                    <img alt="" src="imgs/a0.jpg" class="media-object">
                    <span class="online"></span>
                  </a>
                  <div class="media-body">
                    <strong>John Doe</strong>
                    <small>General Manager at TB</small>
                  </div>
                </div><!-- media -->
              </li>
              <li class="online">
                <div class="media">
                  <a href="#" class="pull-left media-thumb">
                    <img alt="" src="imgs/a1.jpg" class="media-object">
                    <span class="offline"></span>
                  </a>
                  <div class="media-body">
                    <strong>Jonathan Smith</strong>
                    <small>Lead Designer</small>
                  </div>
                </div><!-- media -->
              </li>

              <li class="online">
                <div class="media">
                  <a href="#" class="pull-left media-thumb">
                    <img alt="" src="imgs/a2.jpg" class="media-object">
                    <span class="busy"></span>
                  </a>
                  <div class="media-body">
                    <strong>Margarita Rose</strong>
                    <small>Human Resource Manager</small>
                  </div>
                </div><!-- media -->
              </li>
              <li class="online">
                <div class="media">
                  <a href="#" class="pull-left media-thumb">
                    <img alt="" src="imgs/a0.jpg" class="media-object">
                    <span class="away"></span>
                  </a>
                  <div class="media-body">
                    <strong>Mr. Kameron De</strong>
                    <small>Marketing Officer</small>
                  </div>
                </div><!-- media -->
              </li>
              <li class="online">
                <div class="media">
                  <a href="#" class="pull-left media-thumb">
                    <img alt="" src="imgs/a2.jpg" class="media-object">
                    <span class="offline"></span>
                  </a>
                  <div class="media-body">
                    <strong>Mr. Mosa</strong>
                    <small>Development Manager</small>
                  </div>
                </div><!-- media -->
              </li>
            </ul>
          </div>
          <!--customer end-->

          <!--stock start-->
          <div class="aside-widget">
            <h5>Recent Stocks</h5>
            <table class="table">
              <tbody>
              <tr>
                <td>DOWJ</td>
                <td>19,764.00</td>
                <td><small class="label label-success">+ 0.08%</small></td>
              </tr>
              <tr>
                <td>AAPL</td>
                <td>116.90</td>
                <td><small class="label label-danger">- 0.29%</small></td>
              </tr>
              <tr>
                <td>SBUX</td>
                <td>50.33</td>
                <td><small class="label label-warning">+ 0.23%</small></td>
              </tr>
              <tr>
                <td>NKE</td>
                <td>164.00</td>
                <td><small class="label label-success">+ 0.08%</small></td>
              </tr>
              <tr>
                <td>YHOO</td>
                <td>764.00</td>
                <td><small class="label label-danger">- 0.91%</small></td>
              </tr>
              </tbody>
            </table>
          </div>
          <!--stock end-->

          <!--task start-->
          <div class="aside-widget">
            <h5>Task Pending</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#">
                  <div class="task-info">
                    Wp Development (66%)
                  </div>
                  <div class="progress progress-striped">
                    <div style="width: 66%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" role="progressbar" class="progress-bar progress-bar-warning">
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="task-info">
                    Dashboard Design (80%)
                  </div>
                  <div class="progress progress-striped">
                    <div style="width: 80%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar" class="progress-bar progress-bar-success ">
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="task-info">
                    Marketing (40%)
                  </div>
                  <div class="progress progress-striped">
                    <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-info">
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="task-info">
                    Mobile App Development (33%)
                  </div>
                  <div class="progress progress-striped">
                    <div style="width: 33%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar" class="progress-bar progress-bar-danger">
                    </div>
                  </div>
                </a>
              </li>
              <li class="text-center">
                <a href="#" class="btn btn-sm btn-info btn-block">See All Pending Tasks</a>
              </li>
            </ul>
          </div>
          <!--task end-->

        </div>
        <!--right side widget end-->

      </div>
    </div>
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
  export default {
    name: 'App',
    components: {Header}
  }


</script>
