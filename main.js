canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

mars_images_array=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
random_select=Math.floor(Math.random()*4);

rover_x=10;
rover_y=10;

rover_image="rover.png";
background_img=mars_images_array[random_select];

function add(){
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_img;

rover_imgtag=new Image();
rover_imgtag.onload=uploadrover;
rover_imgtag.src=rover_image;

}

function uploadBackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);


    if(keypress=='38'){
        up();
        console.log("up");
    }

    if(keypress=='39'){
        right();
        console.log("right");
    }

    if(keypress=='40'){
        down();
        console.log("down");
    }

    if(keypress=='37'){
        left();
        console.log("left");
    }
}

function up(){
    if (rover_y>=0){
      rover_y=rover_y-10;   
    console.log("roverx="+rover_x,"rovery="+rover_y);
  uploadBackground();
uploadrover(); }
}

function down(){
    if (rover_y<=500){
      rover_y=rover_y+10;  
    console.log("roverx="+rover_x,"rovery="+rover_y);
  uploadBackground();
uploadrover(); }
}

function left(){
    if (rover_x>=0){
      rover_x=rover_x-10;
    console.log("roverx="+rover_x,"rovery="+rover_y);
  uploadBackground();
uploadrover(); }
}

function right(){
    if (rover_x<=700){
      rover_x=rover_x+10;   
    console.log("roverx="+rover_x,"rovery="+rover_y);
  uploadBackground();
uploadrover(); }
}