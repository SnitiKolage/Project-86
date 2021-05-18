var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;


block_image_width = 70;
block_image_height = 70;

var player_object = "";
var block_image_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 20;
        block_image_height = block_image_height - 20;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current height").innerHTML = block_image_height;
    }


    if (e.shftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current height").innerHTML = block_image_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '73') {
        new_image('ironman_face.png');
        console.log("i");
    }
    if (keyPressed == '84') {
        new_image('thor_right_hand.png');
        console.log("t");
    }
    if (keyPressed == '67') {
        new_image('captain_america_left_hand.png');
        console.log("c");
    }
    if (keyPressed == '83') {
        new_image('spiderman_body.png');
        console.log("s");
    }
    if (keyPressed == '72') {
        new_image('hulk_legs.png');
        console.log("h");
    }
    
    function up() {
        if (player_y >= 0) {
            player_y = player_y - block_image_height;
            console.log("block image height=" + block_image_height);
            console.log("when UP arrow key is pressed,X=" + player_x + ",Y=" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function down() {
        if (player_y <= 500) {
            player_y = player_y + block_image_height;
            console.log("block image height=" + block_image_height);
            console.log("when DOWN arrow key is pressed,X=" + player_x + ",Y=" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function left() {
        if (player_x > 0) {
            player_x = player_x - block_image_width;
            console.log("block image width=" + block_image_width);
            console.log("when left arrow key is pressed,X=" + player_x + ",X=" + player_x);
            canvas.remove(player_object);
            player_update();
        }
    }
    function right() {
        if (player_x <= 850) {
            player_x = player_x + block_image_width;
            console.log("block image width=" + block_image_width);
            console.log("when left arrow key is pressed,X=" + player_x + ",X=" + player_x);
            canvas.remove(player_object);
            player_update();
        }
    }
}
