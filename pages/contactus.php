<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../css/contactus.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../css/navigation_contactus.css"> 
	    
	    
	     <!-- navbar style  -->
    <script src="../js/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>
	
		<div class="navigation">
		<div class="btn navbtn">
			<span class="top"></span>
			<span class="bottom"></span>
		</div>

		<div class="nav-bar hidden">
			<ul>
			    <li><a href="http://volunteer.malharfest.org" style = "text-decoration: none; color: #fff;">Home</a></li>
			    <li><a href = "../../pages/conclave.html" style = "text-decoration: none; color: #fff;">Conclave</a></li>
			    <li><a href="../../pages/concert.html" style = "text-decoration: none; color: #fff;">Malhar Concert</a></li>
			    <li><a href="../../pages/events.html" style = "text-decoration: none; color: #fff;">Events</a></li>
			    <li><a href = "http://blog.malharfest.org/" style = "text-decoration: none; color: #fff;" target = "_blank">Blog</a></li>
			    <li><a href = "../../pages/workforce.html" style = "text-decoration: none; color: #fff;">Workforce</a></li>
			    <li><a href = "../../pages/results.html" style = "text-decoration: none; color: #fff;">Results</a></li>
			    <li><a href = "../../pages/participation.html" style = "text-decoration: none; color: #fff;">Participation</a></li>
			    <li><a href = "../../pages/sponsor.html" style = "text-decoration: none; color: #fff;">Sponsors</a></li>
			    <li><a href = "../../pages/contactus.html" style = "text-decoration: none; color: #fff;">Contact Us</a></li>
			    <li><a href = "https://www.townscript.com/e/malhar2018" style = "text-decoration: none; color: #fff;" target = "_blank">E-Pass</a></li>
			</ul>
		</div>
	</div>
	
<div class="container">

	<div class="info">
		<div class="title">
	 		<h2>CONTACT US</h2>
			</div>
		<div class="infoc">
			
		<div class="admin">
			<h3 >ADMINISTRATION</h3>
			<h5>Vrushali Kelkar</h5>
			<h5>+91808627549</h5>
			<h5>admin@malharfest.org</h5>
		</div>
		<div class="marketing">
			<h3>MARKETING</h3>
			<h5>Esha Gupta</h5>
			<h5>+919769470176</h5>
			<h5>marketing@malharfest.org</h5>
		</div>
		<div class="pr">
			<h3>PUBLIC RELATIONS</h3>
			<h5>Eshaan Kably</h5>
			<h5>+919892980780</h5>
			<h5>pr@malharfest.org</h5>
		</div>
		</div>
	</div>
	<div class="address">
			<div class="addressc">
			    <div>
			    <h5>ADDRESS:</h5>
			    </div>
			    <div class="addresscp">
            		<p>Malhar Office,<br>
            			St.Xavier's College,<br>
            			5, Mahapalika Marg,<br>
            		    Mumbai 400 001.<br>
            		    contact@malharfest.org</p>
                </div>
			</div>
	</div >
	<div  class="form">
		<div class="formc">
		<h4 class="fhead"><span>
		                    <?php
	                            if(isset($_GET['msg']))
                                {
                                        $msg = $_GET['msg']
                                ?>
                                    <span style="color:red; font-size:15px; padding:0px; margin:0px; text-align:center"><?php echo $msg ?></span>
                              <?php
                                }else{ ?>
                                REACH OUT TO US
                           <?PHP }
                            
                            ?></span></h4>

		<form action="test/mail.php" method="POST">
		    
                                
                            <div class="f"><input type="text" name="name" placeholder="Name" size="23"></div>
		<div class="f"><input type="email" name="email" placeholder="Email Id" size="23"></div>
		<div class="f"><input type="number" name="phone"  placeholder="Phone no." size="23"></div>
		<div class="f"><input type="text" name="subject"  placeholder="Subject" size="23"></div>
		<div class="f"><textarea rows="4" name="message" cols="23" placeholder="Message" size="23"></textarea></div>
		
		<div class="f"><button class="subbtn" type="submit" name="push" size="20"><h5>SEND MESSAGE</h5></button></div>
	
		</form>
		</div>
	</div>
	



   
  </div>   
     <!-- NAVBAR -->
    <script type="text/javascript">
		$(".btn").click(function() {
	  		var options = {
	    	direction: "left"
	  	};
  		var effect = 'fade';
  		var duration = 1200;
  		$(".nav-bar").toggle(effect, options, duration);
		});
		$(".btn").click(function() {
		$(this).toggleClass("active");
	});
	</script>
	<script type="text/javascript">
		if (matchMedia('only screen and (max-width: 1100px)').matches) {
			$(".btn").click(function() {
	  		$("menu").toggleClass("menu--open");
			});
		}
	</script>
    

</body>
</html>